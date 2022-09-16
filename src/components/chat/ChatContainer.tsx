import { useRecoilState } from 'recoil';

import { roomState } from '../../store/room';
import ChatRoom from './ChatRoom';

const ChatRoomListItem = () => {
  const [room] = useRecoilState(roomState);
  return (
    <div className="fixed bottom-0 hidden w-4/5 pointer-events-none right-10 lg:flex lg:items-end lg:justify-end">
      {room.map((item: Chat.RoomState) => (
        <ChatRoom key={item.roomId} {...item} />
      ))}
    </div>
  );
};

export default ChatRoomListItem;
