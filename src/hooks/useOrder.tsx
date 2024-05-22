import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export default function useOrder() {
  const orderContext = useContext(OrderContext);
  return orderContext;
}
