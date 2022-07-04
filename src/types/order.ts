export interface OrderDetail {
  _id: string;
  Amt: number;
  ItemDesc: string;
  MerchantID: string;
  MerchantOrderNo: number;
  TimeStamp: number;
  orderStatus: number;
  payment: string;
  user: { email: string; id: string };
}

export interface OrderAPIResponse {
  // message: string;
  status: string;
  data: OrderDetail;
}
