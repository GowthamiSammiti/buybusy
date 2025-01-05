import { createContext } from "react";

const OrderContext = createContext({
  order: [],
  setOrder: () => {},
});

export default OrderContext;
