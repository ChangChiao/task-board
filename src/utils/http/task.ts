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

interface PickOneParam {
  taskId: string;
  userId: string;
}

export const addTask = (param: TaskParam) => {
  const headers = getAuthorizationImgHeader();
  return service.post(TASK_PATH, param, { headers });
};

export const applyTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.post(`${TASK_PATH}/${taskId}`, { headers });
};

export const pickOne = ({ taskId, userId }: PickOneParam) => {
  const headers = getAuthorizationHeader();
  return service.patch(`${TASK_PATH}/${taskId}`, { userId }, { headers });
};
