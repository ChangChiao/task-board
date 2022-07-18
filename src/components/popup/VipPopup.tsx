import { FC } from 'react';

import { useRouter } from 'next/router';

import { usePopupContext } from '../../hooks/usePopupContext';
import PopupTemplate from './PopupTemplate';

const VipPopup: FC = () => {
  const { showPopupName, setPopup } = usePopupContext();
  const router = useRouter();
  const closePopup = () => {
    setPopup('');
  };
  const handleOrder = async () => {
    closePopup();
    router.push(`/checkOrder`);
  };
  return (
    <>
      {showPopupName === 'upgrade' && (
        <PopupTemplate titleName="成為VIP">
          <div className="bg-[url(/assets/cover/vip.jpg)] bg-bottom"></div>
          <p>現在只要199元</p>
          <p>即可成為vip 享有三個月的任務優先曝光!</p>
          <button className="btn" onClick={closePopup}>
            取消
          </button>
          <button className="btn" onClick={handleOrder}>
            確認
          </button>
        </PopupTemplate>
      )}
    </>
  );
};

export default VipPopup;
