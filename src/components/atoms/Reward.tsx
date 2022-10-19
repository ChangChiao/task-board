import React from 'react';

import { MdAttachMoney } from 'react-icons/md';

const Reward = ({ reward, unit }: { reward: number; unit: number }) => {
  const addThousands = () => {
    const numParts = reward.toString().split('.');
    numParts[0] = numParts[0]!.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numParts.join('.');
  };
  return (
    <div className="flex items-center text-yellow-500">
      {unit === 0 ? '一次' : '一小時'}
      <MdAttachMoney />
      <span>{addThousands()}</span>
    </div>
  );
};

export default Reward;
