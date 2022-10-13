import { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdArrowBackIosNew } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import io, { Socket } from 'socket.io-client';

import { BACKEND_URL } from '../../config';
import { roomState } from '../../store/room';
import { userState } from '../../store/user';
import { getCookie } from '../../utils/cookie';
import Avatar from '../atoms/Avatar';
import ChatLoading from './ChatLoading';
import ChatRoomInputBox from './ChatRoomInputBox';
import ChatRoomMessage from './ChatRoomMessage';

const ChatRoom = ({ roomId, name, avatar, isOpen }: Chat.RoomState) => {
  const router = useRouter();
  const [room, setRoom] = useRecoilState(roomState);
  let timer: ReturnType<typeof setTimeout>;
  const socket = useRef<Socket>();
  const [user] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [typingFlag, setTypingFlag] = useState<boolean>(false);
  const msgEl = useRef<HTMLDivElement>(null);
  const [fetchAllFlag, setFetchAllFlag] = useState<boolean>(false);
  const [newMsgFlag, setNewMsgFlag] = useState<boolean>(false);
  const [flagHistory, setFlagHistory] = useState<boolean>(false);
  const scrollRecord = useRef<number>(0);
  const [messageList, setMessageList] = useState<Chat.Msg[]>([]);
  const getHistory = () => {
    if (fetchAllFlag) return;
    const info = {
      lastTime: messageList[0]?.createdAt,
    };
    setIsLoading(true);
    console.warn('getHistory---', socket.current!.connected);
    socket.current!.emit('history', info);
  };

  const endTyping = () => {
    socket.current!.emit('typing', false);
  };

  const userTyping = (key: string) => {
    if (key === 'Enter') {
      endTyping();
      return;
    }
    socket.current!.emit('typing', true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      endTyping();
    }, 1500);
  };

  const sendMessage = (msg: string) => {
    const sendMsg = {
      message: msg,
      sender: user._id,
    };
    socket.current!.emit('chatMessage', sendMsg);
  };

  const scrollBottom = async () => {
    setNewMsgFlag(false);
    msgEl.current!.scrollTop = msgEl.current!.scrollHeight;
  };

  const closeRoom = () => {
    const keepRoom = room.filter(
      (item: Chat.RoomState) => item.roomId !== roomId
    );
    setRoom(keepRoom);
  };

  const handleOpen = () => {
    // const updatedRoom = room.find(
    //   (item: Chat.RoomState) => item.roomId === roomId
    // );

    const updatedRoom = room.map((item: Chat.RoomState) => {
      if (item.roomId === roomId) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
      return item;
    });
    setRoom(updatedRoom);
    // updatedRoom.isOpen = !updatedRoom.isOpen;
  };

  const detectTop = () => {
    msgEl.current!.addEventListener(
      'scroll',
      () => {
        if (msgEl.current?.scrollTop === 0) {
          scrollRecord.current = msgEl.current!.scrollHeight;
          getHistory();
        }
      },
      false
    );
  };

  const scrollToCorrect = async () => {
    if (!msgEl.current) return;
    msgEl.current.scrollTop = msgEl.current.scrollHeight - scrollRecord.current;
  };

  const toPrevPage = () => {
    router.back();
    setRoom([]);
  };

  const socketInit = () => {
    const token = getCookie('token');
    if (!token) {
      toast.error('請先登入喔！');
      router.push('/');
    }
    // socket初始化
    socket.current = io(`${BACKEND_URL}/chat`, {
      query: {
        token,
        room: roomId,
      },
      auth: {
        token,
      },
    });
    console.log('socket', socket);

    // 建立連線
    socket.current!.on('connect', () => {
      getHistory();
    });

    // 接收到別人傳的訊息
    socket.current!.on('chatMessage', (msg) => {
      console.log('接收到別人傳的訊息', msg);
      const newArray = [msg, ...messageList];
      setMessageList(newArray);
      // eventBus.emit('updateChatRecord', { roomId: roomId.value, msg });
      if (!msgEl.current) return;
      if (
        msgEl.current.scrollHeight - msgEl.current.scrollTop >
        msgEl.current.clientHeight
      ) {
        if (user._id !== msg.sender) {
          setNewMsgFlag(true);
        }
      } else {
        scrollBottom();
      }
    });

    // 接收歷史訊息
    socket.current!.on('history', (msgList) => {
      setIsLoading(false);
      // isLoading.value = false;
      console.log('接收到歷史訊息', msgList);
      const newArray = [...msgList, ...messageList];
      setMessageList(newArray);
      console.log('messageList', messageList);
      if (msgList.length) {
        setFetchAllFlag(true);
      }
      if (!flagHistory) {
        scrollBottom();
        setFlagHistory(true);
      } else {
        scrollToCorrect();
      }
      // 滾輪調整
    });
    socket.current!.on('typing', (boolean) => {
      setTypingFlag(boolean);
    });

    // 接收錯誤
    socket.current!.on('error', (error) => {
      toast.error(error);
      router.push('/');
    });
  };
  useEffect(() => {
    socketInit();
    detectTop();
    return () => {
      socket.current!.emit('leaveRoom', roomId);
      socket.current!.off();
      socket.current!.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={clsx(
        'pointer-events-auto lg:ml-4 lg:w-[338px] overflow-hidden h-screen lg:h-[455px] rounded-tl-lg rounded-tr-lg relative',
        { 'lg:h-14': !isOpen }
      )}
    >
      <div className="flex items-center justify-between px-2 py-2 overflow-hidden text-white bg-cyan-800 h-14 lg:px-4">
        <div className="flex items-center">
          <MdArrowBackIosNew
            onClick={toPrevPage}
            className="block w-8 h-8 mr-2 text-white lg:hidden"
          />
          <Avatar image={avatar} />
          <span className="pl-4 font-bold">{name}</span>
          {typingFlag && (
            <span className="text-xs text-gray">對方正在輸入中...</span>
          )}
        </div>
        <div className="hidden lg:flex">
          {isOpen ? (
            <AiOutlineMinus
              className="w-6 h-6 cursor-pointer hover:opacity-50"
              onClick={handleOpen}
            />
          ) : (
            <AiOutlinePlus
              className="w-6 h-6 cursor-pointer hover:opacity-50"
              onClick={handleOpen}
            />
          )}
          <AiOutlineClose
            className="w-6 h-6 text-white cursor-pointer hover:opacity-50"
            onClick={closeRoom}
          />
        </div>
      </div>
      {isOpen && (
        <div
          id="messageContainer"
          ref={msgEl}
          className="h-[calc(100vh-56px-48px)] lg:h-[350px] relative bg-slate-100 overflow-y-auto"
        >
          {messageList.length === 0 && (
            <div className="py-2 text-sm text-center">開始聊天吧！</div>
          )}
          {isLoading && (
            <div className="flex items-center justify-center pt-2 text-slate-700">
              載入中
              <ChatLoading />
            </div>
          )}
          {messageList.map((message) => (
            <ChatRoomMessage key={message._id} {...message} />
          ))}
        </div>
      )}
      {newMsgFlag && (
        <div
          onClick={scrollBottom}
          className="absolute left-0 w-full h-12 p-2 text-white bg-black bottom-10 bg-opacity-40"
        >
          您有新訊息
        </div>
      )}
      {isOpen && (
        <ChatRoomInputBox userTyping={userTyping} sendMessage={sendMessage} />
      )}
    </div>
  );
};

export default ChatRoom;
