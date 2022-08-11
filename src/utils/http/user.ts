import { BASE_URL } from '../../config';
import service from './axiosConfig';
import { getAuthorizationHeader, getAuthorizationImgHeader } from './header';

const PAY_PATH = `${BASE_URL}/user`;

export const getUser = () => {
  const headers = getAuthorizationHeader();
  return service.get<{}, User.UserInfoApiResponse>(`${PAY_PATH}`, {
    headers,
  });
};

export const patchUser = (param: FormData) => {
  const headers = getAuthorizationImgHeader();
  return service.patch<{}, User.UserInfoApiResponse>(`${PAY_PATH}`, param, {
    headers,
  });
};
