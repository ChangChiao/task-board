declare namespace APIData {
  interface OrderDetail {
    _id: string;
    Amt: number;
    ItemDesc: string;
    TradeInfo: string;
    TradeSha: string;
    MerchantID: string;
    Version: string;
    MerchantOrderNo: number;
    TimeStamp: number;
    orderStatus: number;
    payment: string;
    user: { email: string; id: string };
  }

  interface OrderAPIResponse {
    // message: string;
    status: string;
    data: OrderDetail;
  }
}
