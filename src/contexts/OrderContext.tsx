import { ReactNode, createContext, useState } from "react";

interface Item {
  id: number;
  quantity: number;
}
interface Order {
  items: Item[];
}
interface OrderContextProps {
  items: Item[];
  orders: Order[];
  addItem: (itemId: number, quantity: number) => void;
}

export const OrderContext = createContext({} as OrderContextProps);

interface OrderContextProviderProps {
  children: ReactNode;
}
export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addItem = (id: number, quantity: number) => {
    setItems((state) => [
      ...state,
      {
        id,
        quantity,
      },
    ]);
  };

  console.log(items);

  const removeItem = () => {};

  const incrementItemQuantity = () => {};

  const decrementItemQuantity = () => {};

  const confirmOrder = () => {};

  return (
    <OrderContext.Provider value={{ items, orders, addItem }}>
      {children}
    </OrderContext.Provider>
  );
}
