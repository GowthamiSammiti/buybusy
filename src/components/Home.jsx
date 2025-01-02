import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <form className="flex items-center justify-center m-3">
        <input
          type="search"
          placeholder="Search By Name"
          className="w-[30%] p-2 border border-solid border-blue-700 rounded-xl outline-none bg-slate-100 "
        />
      </form>
      <section>
        <Products />
      </section>
    </>
  );
};

export default Home;
