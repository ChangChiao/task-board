import { FC, useState } from 'react';

import { PAY_URL } from '../config';
import { createOrder } from '../utils/http';

const orderParam = {
  Email: 'joe.chang1014@gmail.com',
  Amt: 80,
  ItemDesc: 'vip一個月',
};
const Order: FC = () => {
  const [orderInfo, setOrder] = useState<Partial<APIData.OrderDetail>>({});

  const handleOrder = async () => {
    const res = await createOrder(orderParam);
    setOrder(res.data.data);
  };

  return (
    <div className="text-white">
      checkOrder
      <button onClick={handleOrder}>購買VIP</button>
      <form
        action={PAY_URL}
        id="spg"
        // className="hidden"
        method="post"
      >
        <input type="text" name="MerchantID" value={orderInfo.MerchantID} />
        <input
          readOnly
          type="text"
          name="TradeSha"
          value={orderInfo.TradeSha}
        />
        <input
          readOnly
          type="text"
          name="TradeInfo"
          value={orderInfo.TradeInfo}
        />
        <input
          readOnly
          type="text"
          name="TimeStamp"
          value={orderInfo.TimeStamp}
        />
        <input readOnly type="text" name="Version" value={orderInfo.Version} />
        <input
          readOnly
          type="text"
          name="MerchantOrderNo"
          value={orderInfo.MerchantOrderNo}
        />
        <input readOnly type="text" name="Amt" value={orderInfo.Amt} />
        <input
          readOnly
          type="email"
          name="Email"
          value="joe.chang1014@gmail.com"
        />
        <button type="submit">送出</button>
      </form>
    </div>
  );
};

export default Order;
