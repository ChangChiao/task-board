import { useChat } from '../../hooks/useChat';
import { formateTime } from '../../utils/time';

const ChatRoomListItem = (room: Chat.RoomInfo) => {
  const { name, message: msg, avatar } = room;
  const { handleRoom } = useChat();
  const provideDefault = () => {
    return avatar ?? '/assets/images/user_default.png';
  };
  const goChatRoom = () => {
    handleRoom(room);
  };
  return (
    <li
      onClick={goChatRoom}
      className="box-rounded flex items-baseline p-4 h-[77px] mb-4 justify-between cursor-pointer"
    >
      <div className="flex">
        <img className="w-10 h-10 avatar" src={provideDefault()} alt="avatar" />
        <div className="flex-1 pl-2">
          <p className="font-bold">{name}</p>
          <p className="w-[200px] lg:w-80 h-10 whitespace-nowrap overflow-hidden overflow-ellipsis text-sm text-slate-700">
            {msg?.[0]?.message}
          </p>
        </div>
      </div>
      <span className="text-xs text-gray">
        {formateTime(msg?.[0]?.createdAt as string)}
      </span>
    </li>
  );
};

export default ChatRoomListItem;
