declare namespace Order {
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
  interface OrderAPIResponse extends Api.ApiResponse {
    data: OrderDetail;
  }
}
