import { FC, useEffect, useState } from 'react';

import { PAY_URL } from '../config';
import { OrderDetail } from '../types';
import { getOrder } from '../utils/http';

const Order: FC = () => {
  const [orderInfo, setOrder] = useState<Partial<OrderDetail>>({});
  const getURLParam = async () => {
    const url = new URLSearchParams(window.location.search);
    const orderId = url.get('order') as string;
    const res = await getOrder(orderId);
    setOrder(res.data.data);
    console.log('res', res);
  };
  useEffect(() => {
    getURLParam();
  }, []);
  return (
    <div className="text-white">
      checkOrder
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
          value="DA2A82255AC88DAC3CFB700959AE695A622030B6B49A0B684D23636D400E0A9C"
        />
        <input
          readOnly
          type="text"
          name="TradeInfo"
          value="c2b1e8fb67f8162972a47677920290e20c1ac86a2d7352443c651aa9d6719324eca773419a4231c8cf9144684d4de8689e53eacddc196cdbaeafc21f5a3f1b2ead75610b8bb989a021cba6fec71d7c3710553e6588d7fcb04c85d0ffbd20fefb1e31aa8ed8499f23575c585b0c06b10cbade400b508e7c7fd6769307f0ff063cbe5d211f94977ced5be60333b2d58606ca3663b8a2a2032b6c6e406968674fbd"
        />
        <input readOnly type="text" name="TimeStamp" value="1656384620" />
        <input readOnly type="text" name="Version" value="1.5" />
        <input readOnly type="text" name="MerchantOrderNo" value="1656384620" />
        <input readOnly type="text" name="Amt" value="60" />
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
