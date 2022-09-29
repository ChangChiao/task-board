import { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { MdArrowBackIosNew } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import io, { Socket } from 'socket.io-client';

import { BASE_URL } from '../../config';
import { roomState } from '../../store/room';
import { userState } from '../../store/user';
import ChatLoading from './ChatLoading';
import ChatRoomInputBox from './ChatRoomInputBox';
import ChatRoomMessage from './ChatRoomMessage';

const ChatRoom = ({ roomId, name, avatar, isOpen }: Chat.RoomState) => {
  const router = useRouter();
  const [room, setRoom] = useRecoilState(roomState);
  let timer: ReturnType<typeof setTimeout>;
  let socket: Socket;
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
    console.warn('getHistory---', socket.connected);
    socket.emit('history', info);
  };

  const endTyping = () => {
    socket.emit('typing', false);
  };

  const userTyping = (key: string) => {
    if (key === 'Enter') {
      endTyping();
      return;
    }
    socket.emit('typing', true);
    clearTimeout(timer);
    timer = setTimeout(() => {
      endTyping();
    }, 1500);
  };

  const sendMessage = (msg: string) => {
    const sendMsg = {
      message: msg,
      sender: user.id,
    };
    socket.emit('chatMessage', sendMsg);
  };

  const scrollBottom = async () => {
    setNewMsgFlag(false);
    msgEl.current!.scrollTop = msgEl.current!.scrollHeight;
  };

  const closeRoom = () => {
    const keepRoom = room.value.filter(
      (item: Chat.RoomState) => item.roomId !== roomId
    );
    setRoom(keepRoom);
  };

  const handleOpen = () => {
    const updatedRoom = room.find(
      (item: Chat.RoomState) => item.roomId === roomId
    );
    updatedRoom.isOpen = !updatedRoom.isOpen;
  };

  const detectTop = () => {
    msgEl.current!.addEventListener(
      'scroll',
      () => {
        if (msgEl.current!.scrollTop === 0) {
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

  const provideDefault = () => {
    return (
      avatar ?? new URL('../assets/images/user_default.png', import.meta.url)
    );
  };

  const socketInit = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('請先登入喔！');
      router.push('/');
    }
    // socket初始化
    socket = io(`${BASE_URL}/chat`, {
      query: {
        token: localStorage.getItem('token'),
        room: roomId,
      },
      auth: {
        token,
      },
    });
    // 建立連線
    socket.on('connect', () => {
      getHistory();
    });

    // 接收到別人傳的訊息
    socket.on('chatMessage', (msg) => {
      console.log('接收到別人傳的訊息', msg);
      messageList.push(msg);
      // eventBus.emit('updateChatRecord', { roomId: roomId.value, msg });
      if (!msgEl.current) return;
      if (
        msgEl.current.scrollHeight - msgEl.current.scrollTop >
        msgEl.current.clientHeight
      ) {
        if (user.id !== msg.sender) {
          setNewMsgFlag(true);
        }
      } else {
        scrollBottom();
      }
    });

    // 接收歷史訊息
    socket.on('history', (msgList) => {
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
    socket.on('typing', (boolean) => {
      setTypingFlag(boolean);
    });

    // 接收錯誤
    socket.on('error', (error) => {
      toast.error(error);
      router.push('/');
    });
  };
  useEffect(() => {
    socketInit();
    detectTop();
    return () => {
      socket.emit('leaveRoom', roomId);
      socket.off();
      socket.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={clsx(
        'pointer-events-auto lg:border-2 lg:ml-4 lg:w-[338px] overflow-hidden h-screen lg:h-[455px] rounded-tl-lg rounded-tr-lg relative',
        { 'lg:h-14': !isOpen }
      )}
    >
      <div className="flex items-center justify-between px-2 py-2 bg-white border-b-2 h-14 lg:px-4">
        <div className="flex items-center">
          <MdArrowBackIosNew
            onClick={toPrevPage}
            className="block w-8 h-8 mr-2 lg:hidden"
          />
          <img className="w-10 h-10 avatar" src={provideDefault()} alt="" />
          <span className="pl-4 font-bold">{name}</span>
          {typingFlag && (
            <span className="text-xs text-gray">對方正在輸入中...</span>
          )}
        </div>
        <div className="hidden lg:flex">
          {isOpen ? (
            <AiOutlineMinus
              v-show="isOpen"
              className="w-6 h-6 cursor-pointer hover:opacity-50"
              onClick={handleOpen}
            />
          ) : (
            <AiOutlinePlus
              v-show="!isOpen"
              className="w-6 h-6 cursor-pointer hover:opacity-50"
              onClick={handleOpen}
            />
          )}
          <GrClose
            className="w-6 h-6 cursor-pointer hover:opacity-50"
            onClick={closeRoom}
          />
        </div>
      </div>
      <div
        v-show="isOpen"
        id="messageContainer"
        ref={msgEl}
        className="h-[calc(100vh-56px-48px)] lg:h-[350px] relative bg-slate-100 overflow-y-auto"
      >
        <div
          className="py-2 text-sm text-center"
          v-if="messageList.length === 0"
        >
          開始聊天吧！
        </div>
        {isLoading && (
          <div className="flex items-center justify-center pt-2 text-slate-700">
            載入中
            <ChatLoading />
          </div>
        )}
        {messageList.map((message) => (
          <ChatRoomMessage key={message._id} {...message} />
        ))}
        {/* <template v-for="message in messageList" :key="message._id">
      <ChatRoomMessage :message="message" />
    </template> */}
      </div>
      {newMsgFlag && (
        <div
          v-if="newMsgFlag"
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
