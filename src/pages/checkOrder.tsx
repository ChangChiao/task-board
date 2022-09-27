import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import LinePay from '../components/LinePay';
// import Order from '../components/Order';

export const CheckOrder: NextPage = () => {
  const router = useRouter();
  const orderId = router.query.id;
  return (
    <div className="text-white">
      您的訂閱已完成! 訂單編號<span>{orderId}</span>
      <img className="w-16 h-16" src="/assets/images/finish.jpg" alt="" />
    </div>
  );
};

export default CheckOrder;
