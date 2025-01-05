import React, { useContext } from "react";
import CartContext from "../utils/CartContext";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import OrderContext from "../utils/OrderContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const orderContext = useContext(OrderContext);

  const navigate = useNavigate();

  let totalAmt = 0;
  cartContext.cart.map((product) => {
    totalAmt += product.price * product.quantity;
  });
  console.log(cartContext);
  if (cartContext.cart.length == 0) {
    return (
      <div className="text-center text-2xl text-black font-bold ">
        Please Add Items to The Cart
      </div>
    );
  }

  return (
    <div className="flex">
      <aside className="bg-[#f0f0fc] w-[250px] ml-5 rounded-md p-4 h-[200px] sticky top-[250px]">
        <div className="text-xl font-bold text-cent">
          Total Amount <p>$ {totalAmt}</p>
        </div>
        <button
          onClick={() => {
            const newOrder = {
              orderId: new Date().toISOString(),
              totalAmt: totalAmt,
              orderedItems: cartContext.cart,
            };
            orderContext.setOrder([...orderContext.order, newOrder]);
            cartContext.setCart([]);
            navigate("/orders");
          }}
          className="text-center text-white font-semibold mt-9 bg-[#7064e5] w-[200px] border border-solid border-[#7064e5] rounded-xl p-3 hover:bg-white hover:text-[#7064e5]"
        >
          Purchase
        </button>
      </aside>
      <section className="flex gap-6 flex-wrap m-5 ">
        {cartContext.cart.map((cartDetails) => {
          return <CartCard details={cartDetails} cartContext={cartContext} />;
        })}
      </section>
    </div>
  );
};

export default Cart;
