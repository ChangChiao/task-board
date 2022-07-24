import { BASE_URL } from '../../config';
import service from './axiosConfig';
import { getAuthorizationHeader } from './header';

const PAY_PATH = `${BASE_URL}/user`;

export const getUser = () => {
  const headers = getAuthorizationHeader();
  service.get<{}, Order.OrderAPIResponse>(`${PAY_PATH}`, { headers });
};
