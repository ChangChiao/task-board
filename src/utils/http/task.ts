import { BASE_URL } from '../../config';
import service from './axiosConfig';
import { getAuthorizationImgHeader, getAuthorizationHeader } from './header';

const TASK_PATH = `${BASE_URL}/task`;

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

export const applyTask = () => {
  const headers = getAuthorizationHeader();
  return service.post(TASK_PATH, {}, { headers });
};
