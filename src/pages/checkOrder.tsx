import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import LinePay from '../components/LinePay';
// import Order from '../components/Order';

export const CheckOrder: NextPage = () => {
  const router = useRouter();
  const orderId = router.query.id;
  return (
    <div className="flex items-center justify-center h-[calc(100vh-164px)] text-white">
      <div>
        <h2 className="pb-10 text-xl">
          您的VIP訂閱已完成! 訂單編號
          <span className="pl-2 font-bold text-yellow-400">{orderId}</span>
        </h2>
        <img
          className="mx-auto h-36 w-36"
          src="/assets/images/finish.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CheckOrder;
