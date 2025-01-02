import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [productList, setProductList] = useState([]);

  async function fetchProducts() {
    const raw = await fetch("https://fakestoreapi.com/products");
    const result = await raw.json();
    setProductList(result);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <section className="flex gap-7 ">
        <aside className="bg-[#f0f0fc] w-[65%] ml-5 rounded-md p-4 h-[300px] sticky top-[250px]">
          <div>
            <h2 className="text-xl font-bold text-center">Filter</h2>
            <form>
              <label htmlFor="range"> Price: </label>
              <input type="range" min={0} max={100000} id="range" />
            </form>
          </div>
          <div>
            <h2 className="text-xl font-bold text-center m-4">Category</h2>
            <form>
              <div className="flex items-center m-2">
                <input type="checkbox" id="men" className="w-5 mr-2" />
                <label htmlFor="men"> Men's Clothing </label>
              </div>
              <div className="flex items-center m-2">
                <input type="checkbox" id="women" className="w-5 mr-2" />
                <label htmlFor="women"> Women's Clothing </label>
              </div>
              <div className="flex items-center m-2">
                <input type="checkbox" id="Jwellery" className="w-5 mr-2" />
                <label htmlFor="Jwellery"> Jwellery </label>
              </div>
              <div className="flex items-center m-2">
                <input type="checkbox" id="Electronics" className="w-5 mr-2" />
                <label htmlFor="Electronics"> Electronics </label>
              </div>
            </form>
          </div>
        </aside>
        <section className="flex gap-6 flex-wrap ">
          {productList.length &&
            productList.map((e) => {
              return <ProductCard key={e.id} product={e} />;
            })}
        </section>
      </section>
    </>
  );
};

export default Products;
