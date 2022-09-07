import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import LinePay from '../components/LinePay';
// import Order from '../components/Order';

export const CheckOrder: NextPage = () => {
  const router = useRouter();
  const orderId = router.query.id;
  return (
    <div>
      您的訂閱已完成! 訂單編號<span>{orderId}</span>
    </div>
  );
};

export default CheckOrder;
