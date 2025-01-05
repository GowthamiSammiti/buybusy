import React, { useState } from "react";
import Products from "./Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex justify-between items-center p-3">
        <form className="flex items-center justify-center m-3 pl-[20%] w-[50%] ">
          <input
            type="search"
            placeholder="Search By Name"
            className="w-[100%] p-2 border border-solid border-blue-700 rounded-xl outline-none bg-slate-100 "
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <span>
          <button
            onClick={() => {
              setSort("acending");
            }}
            className="text-center text-white font-semibold bg-[#7064e5] w-[120px] border border-solid border-[#7064e5] rounded-xl p-3 mr-3 hover:bg-white hover:text-[#7064e5]"
          >
            Ascending
          </button>
          <button
            onClick={() => {
              setSort("decending");
            }}
            className="text-center text-white font-semibold bg-[#7064e5] w-[120px] border border-solid border-[#7064e5] rounded-xl p-3 hover:bg-white hover:text-[#7064e5]"
          >
            Decending
          </button>
        </span>
      </div>
      <section>
        <Products sort={sort} search={search} />
      </section>
    </>
  );
};

export default Home;
