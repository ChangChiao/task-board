import { NextPage } from 'next';

import ChatRoomList from '../components/chat/ChatRoomList';

export const ChatRecord: NextPage = () => {
  return (
    <div className="text-white">
      <ChatRoomList />
    </div>
  );
};

export default ChatRecord;
