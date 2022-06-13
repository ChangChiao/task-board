import service from './axiosConfig';

interface LoginParam {
  email: string;
  password: string;
}
export const login = async (param: LoginParam) => service.post('/login', param);
