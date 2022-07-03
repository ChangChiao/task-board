import { NextPage } from "next";
import { useEffect } from "react";

export const checkOrder: NextPage = () => {
  const getURLParam = () => {
    const url = new URLSearchParams(window.location.search);
    const orderId = url.get("order")
  }
  useEffect(() => { getURLParam(); }, []);
  return <div>checkOrder</div>;
};

export default checkOrder;