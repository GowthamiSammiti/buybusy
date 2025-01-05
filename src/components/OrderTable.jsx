import React from "react";

const OrderTable = ({ orderDetails, orderId, grandTotal }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-4/5 bg-white shadow-md rounded-md p-6">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
          Order Id: <span className="text-gray-600 font-normal">{orderId}</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Title
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">
                    {item.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">
                    $ {item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">
                    $ {item.price * item.quantity}
                  </td>
                </tr>
              ))}
              <tr className="bg-white font-semibold">
                <td
                  colSpan="3"
                  className="border border-gray-300 px-4 py-2 text-right text-gray-700 text-sm"
                >
                  Total:
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-700 text-sm">
                  $ {grandTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
