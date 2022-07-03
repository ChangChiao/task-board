import { FC } from "react"; 
import { createOrder } from "../utils/http/payment";
import { useRouter } from 'next/router'



const Pay: FC = () => {
  const router = useRouter()
  const orderInfo = {
    Email: 'joe.chang1014@gmail.com',
    Amt: 80,
    ItemDesc: 'vip一個月'
  }
  const handleOrder = async () => {
    const res = await createOrder(orderInfo)
    router.push(`/checkOrder/?order=${res.order._id}`)
  }
  return <div>
    {/* <form action=""> */}
      {/* <input type="text" value={0} />
      <input type="text" value={0} />
      <input type="text" value={100} /> */}
      <button className="btn" onClick={handleOrder} type="submit">送出</button>
    {/* </form> */}
  </div>
}

export default Pay;