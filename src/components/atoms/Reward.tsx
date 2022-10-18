import React from 'react';

import { MdAttachMoney } from 'react-icons/md';

const Reward = ({ reward }: { reward: number }) => {
  const addThousands = () => {
    const numParts = reward.toString().split('.');
    numParts[0] = numParts[0]!.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numParts.join('.');
  };
  return (
    <div className="flex items-center text-yellow-500">
      <MdAttachMoney />
      <span>{addThousands()}</span>
    </div>
  );
};

export default Reward;
