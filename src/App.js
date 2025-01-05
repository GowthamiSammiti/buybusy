import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartContext from "./utils/CartContext";
import OrderContext from "./utils/OrderContext";

function App() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <OrderContext.Provider value={{ order, setOrder }}>
          <NavBar />
          <Outlet />
        </OrderContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
