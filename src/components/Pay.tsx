import { FC } from 'react';

import { useRouter } from 'next/router';

import { createOrder } from '../utils/http';

const Pay: FC = () => {
  const router = useRouter();
  const orderInfo = {
    Email: 'joe.chang1014@gmail.com',
    Amt: 80,
    ItemDesc: 'vip一個月',
  };
  const handleOrder = async () => {
    const res = await createOrder(orderInfo);
    // eslint-disable-next-line no-underscore-dangle
    router.push(`/checkOrder/?order=${res.data.data._id}`);
  };
  return (
    <div>
      <button className="btn" onClick={handleOrder} type="submit">
        送出
      </button>
    </div>
  );
};

export default Pay;
