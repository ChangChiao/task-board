import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { roomState } from '../store/room';
import { getDeviceType } from '../utils/device';

export const useChat = () => {
  const router = useRouter();
  const [room, updateRoom] = useRecoilState(roomState);
  const isRoomExist = (roomId: string) => {
    const roomArr = room.map((item: Chat.RoomInfo) => item.roomId);
    return roomArr.includes(roomId);
  };
  const handleRoom = ({ roomId, name, avatar }: Chat.RoomInfo) => {
    const roomObj = { roomId, name, avatar, isOpen: true };
    const device = getDeviceType();
    if (device === 'desktop') {
      if (isRoomExist(roomId)) {
        return;
      }

      if (room.length === 3) {
        toast.error('您最多只能跟三個人聊天呦！');
        return;
      }
      updateRoom([...room, roomObj]);
      return;
    }
    updateRoom([roomObj]);
    router.push('/chat-room');
  };
  return {
    handleRoom,
  };
};
