import { BASE_URL } from '../../config';
import service from './axiosConfig';

const TASK_PATH = `${BASE_URL}/task`;

const getAuthorizationImgHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'multipart/form-data',
    authorization: `Bearer ${token}`,
  };
};

interface TaskParam {
  title: string;
  content: string;
  cover: File;
  expire: string;
}

export const addTask = (param: TaskParam) => {
  const headers = getAuthorizationImgHeader();
  return service.post(TASK_PATH, param, { headers });
};
