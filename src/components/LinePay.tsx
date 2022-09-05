import { createOrder } from '../utils/http/linePay';

const LinePay = () => {
  const genOrder = async () => {
    await createOrder();
  };
  return (
    <div>
      123
      <button onClick={genOrder}>確認訂購</button>
    </div>
  );
};

export default LinePay;
