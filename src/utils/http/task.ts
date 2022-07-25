import { NumberLocale } from 'yup/lib/locale';

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

interface QueryTaskParam {
  order: string;
  sortby: string;
  city: string;
  keywprd: string;
  page: NumberLocale;
}

interface PickOneParam {
  taskId: string;
  userId: string;
}

export const getAllTask = (param: Partial<QueryTaskParam>) => {
  return service.post<Partial<QueryTaskParam>, Task.TaskAPIResponse>(
    `${TASK_PATH}/`,
    param
  );
};

export const addTask = (param: TaskParam) => {
  const headers = getAuthorizationImgHeader();
  return service.post(TASK_PATH, param, { headers });
};

export const applyTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.post(`${TASK_PATH}/${taskId}`, {}, { headers });
};

export const pickOne = ({ taskId, userId }: PickOneParam) => {
  const headers = getAuthorizationHeader();
  return service.patch(`${TASK_PATH}/${taskId}`, { userId }, { headers });
};
