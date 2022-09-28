import service from './axiosConfig';
import { getAuthorizationImgHeader } from './header';

const PAY_PATH = `/user`;

export const getUser = () => {
  return service.get<{}, User.UserInfoApiResponse>(`${PAY_PATH}`);
};

export const patchUser = (param: FormData) => {
  const headers = getAuthorizationImgHeader();
  return service.patch<{}, User.UserInfoApiResponse>(`${PAY_PATH}`, param, {
    headers,
  });
};
