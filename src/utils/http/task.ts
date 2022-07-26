import { BASE_URL } from '../../config';
import service from './axiosConfig';
import { getAuthorizationImgHeader, getAuthorizationHeader } from './header';

const TASK_PATH = `${BASE_URL}/task`;

interface TaskParam {
  title: string;
  content: string;
  cover: File;
  expire: string;
  pay: number;
}

interface QueryTaskParam {
  order: string;
  sortby: string;
  city: string;
  keywprd: string;
  page: number;
}

interface QueryTaskUserParam {
  status: number;
  page: number;
}

interface PickStaffParam {
  taskId: string;
  userId: string;
}

export const getAllTask = (param: Partial<QueryTaskParam>) => {
  return service.post<Partial<QueryTaskParam>, Task.TaskAPIResponse>(
    `${TASK_PATH}/`,
    param
  );
};

export const getUserTask = (param: Partial<QueryTaskUserParam>) => {
  const headers = getAuthorizationHeader();
  return service.post<Partial<QueryTaskUserParam>, Task.TaskAPIResponse>(
    TASK_PATH,
    param,
    { headers }
  );
};

export const addTask = (param: TaskParam) => {
  const headers = getAuthorizationImgHeader();
  return service.post(TASK_PATH, param, { headers });
};

export const deleteTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.delete(`${TASK_PATH}/${taskId}`, { headers });
};

export const updateTask = async (param: Partial<QueryTaskUserParam>) => {
  const headers = getAuthorizationImgHeader();
  return service.patch<Partial<QueryTaskParam>, Task.TaskAPIResponse>(
    `${TASK_PATH}/`,
    param,
    { headers }
  );
};

export const applyTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.post(`${TASK_PATH}/${taskId}/applicant`, {}, { headers });
};

export const cancelApplyTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.delete(`${TASK_PATH}/${taskId}/applicant`, { headers });
};

export const pickStaff = ({ taskId, userId }: PickStaffParam) => {
  const headers = getAuthorizationHeader();
  return service.patch(`${TASK_PATH}/${taskId}/staff`, { userId }, { headers });
};
