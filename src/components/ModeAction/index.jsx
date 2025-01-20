import { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import UserContext from "../../context/userContext";

const ModeAction = () => {
  const { CurrentMode, changeMode } = useContext(UserContext);

  useEffect(() => {
    if (CurrentMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [CurrentMode]);

  return (
    <button
      onClick={() => changeMode()}
      className="p-2 w-16 flex flex-col ml-auto rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-500"
    >
      {CurrentMode === "dark" ? (
        <FaSun className="text-yellow-400 self-end transition ease-in-out duration-500" />
      ) : (
        <FaMoon className="text-gray-600 dark:text-white transition ease-in-out duration-500" />
      )}
    </button>
  );
};

export default ModeAction;
