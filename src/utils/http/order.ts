import { BASE_URL } from '../../config';
import { OrderAPIResponse } from '../../types';
import service from './axiosConfig';

const PAY_PATH = `${BASE_URL}/order`;

type OrderParam = {
  Email: string;
  Amt: number;
  ItemDesc: string;
};

export const createOrder = async (param: OrderParam) =>
  service.post<OrderAPIResponse>(`${PAY_PATH}`, param);
export const getOrder = async (id: string) =>
  service.get<OrderAPIResponse>(`${PAY_PATH}/${id}`);
