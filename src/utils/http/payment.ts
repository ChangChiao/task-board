import { BASE_URL } from '../../config';
import service from './axiosConfig';

const PAY_PATH = `${BASE_URL}/order`;

console.log('PAY_PATH', PAY_PATH);


type OrderParam = {
  Email: String;
  Amt: Number;
  ItemDesc: String;
}

type Order = {
  _id: String;
  Amt: String;
  ItemDesc: String;
}

type OrderAPIResponse = {
  status: String;
  message: String;
  order: Order;
}


export const createOrder = async (param: OrderParam) =>
  service.post<OrderParam, OrderAPIResponse>(`${PAY_PATH}`, param);