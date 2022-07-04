import { FC } from 'react';

import { useRouter } from 'next/router';

const Pay: FC = () => {
  const router = useRouter();
  const handleOrder = async () => {
    router.push(`/checkOrder`);
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
