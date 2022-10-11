import service from './axiosConfig';
import { getAuthorizationImgHeader } from './header';

const PAY_PATH = `/user`;
// interface FormDataValue {
//   name?: string;
//   contact?: string;
// }

// interface FormData {
//   append(name: string, value: FormDataValue, fileName?: string): void;
//   set(name: string, value: FormDataValue, fileName?: string): void;
// }

export const getUser = () => {
  return service.get<{}, User.UserInfoApiResponse>(`${PAY_PATH}`);
};

export const patchUser = (param: FormData) => {
  const headers = getAuthorizationImgHeader();
  return service.patch<{}, User.UserInfoApiResponse>(`${PAY_PATH}`, param, {
    headers,
  });
};
