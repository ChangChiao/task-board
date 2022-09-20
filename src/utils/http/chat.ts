import { BASE_URL } from '../../config';
import service from './axiosConfig';
import { getAuthorizationHeader } from './header';

const PAY_PATH = `${BASE_URL}/chat`;

interface GetRoomIdParam {
  receiver: string;
}

interface GetRoomIdResponse extends Api.ApiResponse {
  data: Chat.RoomInfo;
}

export const getRoomId = async (sendData: GetRoomIdParam) => {
  const headers = getAuthorizationHeader();
  return service.post<GetRoomIdParam, GetRoomIdResponse>(
    `${PAY_PATH}/room-info`,
    sendData,
    { headers }
  );
};
