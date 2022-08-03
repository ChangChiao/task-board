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
  [key: string]: string | number;
  // order: string;
  // sortby: string;
  // city: string;
  // keyword: string;
  // page: number;
}

interface PickStaffParam {
  taskId: string;
  userId: string;
}

const genQueryStr = (obj: QueryTaskParam) => {
  const queryKey = Object.keys(obj);
  if (queryKey?.length === 0) return undefined;
  return Object.keys(obj).reduce((a, b) => {
    return typeof b === 'string' ? `${a}&${b}=${obj[b]}` : b;
  }, '');
};

export const getAllTask = (param: QueryTaskParam) => {
  const queryStr = genQueryStr(param);
  let path = `${TASK_PATH}`;
  if (queryStr) {
    path += `/?${queryStr}`;
  }
  return service.get<QueryTaskParam, Task.TaskAPIResponse<Task.TaskDetail>>(
    path
  );
};

export const getUserCreateTaskList = () => {
  const headers = getAuthorizationHeader();
  return service.post<{}, Task.TaskAPIResponse<Task.TaskDetail>>(
    `${TASK_PATH}/createTaskList`,
    {
      headers,
    }
  );
};

export const getUserApplyTaskList = () => {
  const headers = getAuthorizationHeader();
  return service.post<{}, Task.TaskAPIResponse<Task.TaskDetail>>(
    `${TASK_PATH}/applyTaskList`,
    {
      headers,
    }
  );
};

export const addTask = (param: TaskParam) => {
  const headers = getAuthorizationImgHeader();
  return service.post(TASK_PATH, param, { headers });
};

export const deleteTask = (taskId: string) => {
  const headers = getAuthorizationHeader();
  return service.delete<string, Task.TaskAPIResponse<{}>>(
    `${TASK_PATH}/${taskId}`,
    { headers }
  );
};

export const updateTask = async (param: Partial<TaskParam>) => {
  const headers = getAuthorizationImgHeader();
  return service.patch<
    Partial<TaskParam>,
    Task.TaskAPIResponse<Task.TaskDetail>
  >(`${TASK_PATH}/`, param, { headers });
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
  return service.patch<
    PickStaffParam,
    Task.TaskAPIResponse<Task.TaskWithApplicant>
  >(`${TASK_PATH}/${taskId}/staff`, { userId }, { headers });
};
