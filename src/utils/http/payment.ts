import { BASE_URL } from "../../config";
import service from "./axiosConfig";

const PAY_PATH = `${BASE_URL}/order`;

console.log("PAY_PATH", PAY_PATH);

type OrderParam = {
  Email: string;
  Amt: number;
  ItemDesc: string;
};

type Order = {
  _id: string;
  Amt: string;
  ItemDesc: string;
};

type OrderAPIResponse = {
  status: string;
  message: string;
  data: Order;
};

export const createOrder = async (param: OrderParam) =>
  service.post<OrderParam, OrderAPIResponse>(`${PAY_PATH}`, param);

export const getOrder = async (id: string) => {
  service.get<string, OrderAPIResponse>(`${PAY_PATH}/${id}`);
};
