import { BASE_URL } from '../../config';
import service from './axiosConfig';

const PAY_PATH = `${BASE_URL}/order`;

type OrderParam = {
  Email: string;
  Amt: number;
  ItemDesc: string;
};

export const createOrder = async (param: OrderParam) =>
  service.post<OrderParam, APIData.OrderAPIResponse>(`${PAY_PATH}`, param);
