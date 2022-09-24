import { usePopupContext } from '../../../hooks/usePopupContext';
import { createOrder } from '../../../utils/http/linePay';
import PopupTemplate from './PopupTemplate';

const VipPopup = () => {
  const { showPopupName, setPopup } = usePopupContext();
  // const router = useRouter();
  const closePopup = () => {
    setPopup('');
  };
  const handleOrder = async () => {
    closePopup();
    const res = await createOrder();
    console.log('res.data.url', res.data.url);
    window.location.replace(res.data.url);
    // router.push(`/checkOrder`);
  };
  return (
    <>
      {showPopupName === 'upgrade' && (
        <PopupTemplate titleName="成為VIP">
          <div className="bg-[url(/assets/cover/vip.jpg)] bg-bottom"></div>
          <p className="text-xl font-bold">現在只要299元</p>
          <p>即可成為vip，享有三個月的任務優先曝光!</p>
          <img className="my-6" src="/assets/images/vip.jpg" alt="" />
          <div className="flex justify-between">
            <button className="bg-gray-400 w-36 btn" onClick={closePopup}>
              取消
            </button>
            <button className="w-36 btn" onClick={handleOrder}>
              確認
            </button>
          </div>
        </PopupTemplate>
      )}
    </>
  );
};

export default VipPopup;
