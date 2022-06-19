import { BASE_URL } from '../../config';
import service from './axiosConfig';

interface LoginParam {
  email: string;
  password: string;
}
export const login = async (param: LoginParam) =>
  service.post(`${BASE_URL}/login`, param);
export const loginByGoogle = async () => service.get(`${BASE_URL}/auth/google`);
