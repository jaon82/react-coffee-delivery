import { ReactNode, createContext, useState } from "react";

export interface Item {
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
  removeItem: (itemId: number) => void;
  incrementItemQuantity: (itemId: number) => void;
  decrementItemQuantity: (itemId: number) => void;
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

  const removeItem = (itemId: number) => {
    const itemsUpdated = items.filter((item) => item.id !== itemId);
    setItems(itemsUpdated);
  };

  const incrementItemQuantity = (itemId: number) => {
    const itemsUpdated = items.map((item) => {
      if (item.id == itemId) {
        item.quantity++;
      }
      return item;
    });
    setItems(itemsUpdated);
  };

  const decrementItemQuantity = (itemId: number) => {
    const itemsUpdated = items.map((item) => {
      if (item.id == itemId) {
        item.quantity--;
      }
      return item;
    });
    setItems(itemsUpdated);
  };

  const confirmOrder = () => {};

  return (
    <OrderContext.Provider
      value={{
        items,
        orders,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
