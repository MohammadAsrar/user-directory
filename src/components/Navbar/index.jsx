import { useState } from "react";
import { FaSearch, FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import ModeAction from "../ModeAction";

const Navbar = (props) => {
  const { userSearch, changeSort } = props;

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const onEnterSearchInput = (event) => {
    if (event.key === "Enter") {
      userSearch(search);
    }
  };

  const makeSortAction = (event) => {
    setSortOrder(event.target.value);

    changeSort(event.target.value);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm px-6 py-6 flex items-center transition-all duration-300 z-50">
      <div className="relative w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={onEnterSearchInput}
          className="w-full px-4 py-3 outline-none rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white hover:ring-2 hover:ring-[#aec5f6] hover:dark:ring-[#7488b3] hover:bg-slate-100 hover:dark:bg-gray-700/100 transition-all duration-300"
        />
        <button
          onClick={() => userSearch(search)}
          className="absolute p-3 right-1.5 top-1 rounded-full hover:bg-[#6e9bfd] bg-[#4c7adf] border-black"
        >
          <FaSearch className="  text-gray-300 dark:text-slate-800" />
        </button>
      </div>

      <div className="relative hidden sm:block ml-2">
        <select
          value={sortOrder}
          onChange={makeSortAction}
          className="w-32 px-4 py-3 outline-none rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
        {sortOrder === "asc" ? (
          <FaSortAlphaDown className="absolute right-6 top-4 text-gray-500 dark:text-gray-400" />
        ) : (
          <FaSortAlphaDownAlt className="absolute right-6 top-4 text-gray-500 dark:text-gray-400" />
        )}
      </div>

      <ModeAction />
    </nav>
  );
};

export default Navbar;
