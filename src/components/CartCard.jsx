import React from "react";

const CartCard = ({ details, cartContext }) => {
  const handleCartQuantity = (op) => {
    const newCart = [...cartContext.cart];
    const index = newCart.findIndex((e) => {
      return e.id == details.id;
    });
    if (index >= 0) {
      if (newCart[index].quantity == 1 && op == "sub") {
        const newRemovedCard = newCart.filter((item) => {
          return item.id != details.id;
        });
        cartContext.setCart(newRemovedCard);
      } else {
        op == "add"
          ? (newCart[index].quantity += 1)
          : (newCart[index].quantity -= 1);

        cartContext.setCart(newCart);
      }
    }
  };
  return (
    <div className="border border-solid border-black rounded-xl p-3 shadow-md shadow-gray-500">
      <div className="w-[300px] h-[400px]">
        <img className="w-[100%] h-[100%]" src={details.image} />
      </div>
      <div>
        <p
          title={details.title}
          className="text-2xl overflow-hidden w-[300px] mt-2 text-ellipsis whitespace-nowrap"
        >
          {details.title}
        </p>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold m-2 inline-block">
            $ {details.price}
          </h2>
          <span className="mr-3">
            <button
              onClick={() => {
                handleCartQuantity("sub");
              }}
              className="border border-solid text-black bg-[#7064e5] border-[#7064e5] rounded-full p-1 font-extrabold mr-2"
            >
              -
            </button>
            {details.quantity}
            <button
              onClick={() => {
                handleCartQuantity("add");
              }}
              className="border border-solid text-black bg-[#7064e5] border-[#7064e5] rounded-full p-1 font-extrabold ml-2"
            >
              +
            </button>
          </span>
        </div>
        <button
          onClick={() => {
            const newCart = [...cartContext.cart];
            const newRemovedCard = newCart.filter((item) => {
              return item.id != details.id;
            });
            cartContext.setCart(newRemovedCard);
          }}
          className="text-center text-white font-semibold bg-[#a94c4c] w-[300px] block border border-solid border-[#a94c4c] rounded-xl p-3 hover:bg-white hover:text-[#7064e5]"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
