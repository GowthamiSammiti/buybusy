import React, { useContext } from "react";
import OrderTable from "./OrderTable";
import OrderContext from "../utils/OrderContext";

const Orders = () => {
  const { order, setOrder } = useContext(OrderContext);

  console.log(order);
  if (order.length == 0) {
    return (
      <div className="text-center text-2xl text-black font-bold ">
        No Orders to Display
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-2xl text-black font-extrabold ">
        Your Orders
      </h1>
      {order.map((or) => {
        return (
          <div className="mb-5">
            <OrderTable
              orderDetails={or.orderedItems}
              orderId={or.orderId}
              grandTotal={or.totalAmt}
            />
          </div>
        );
      })}
    </>
  );
};

export default Orders;
