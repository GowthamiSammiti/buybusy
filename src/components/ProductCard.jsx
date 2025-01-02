import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-solid border-black rounded-xl p-3 shadow-md shadow-gray-500">
      <div className="w-[300px] h-[400px]">
        <img className="w-[100%] h-[100%]" src={product.image} />
      </div>
      <div>
        <p
          title={product.title}
          className="text-2xl overflow-hidden w-[300px] mt-2 text-ellipsis whitespace-nowrap"
        >
          {product.title}
        </p>
        <h2 className="text-2xl font-bold m-2">$ {product.price}</h2>
        <button className="text-center text-white font-semibold bg-[#7064e5] w-[300px] border border-solid border-[#7064e5] rounded-xl p-3 hover:bg-white hover:text-[#7064e5]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
