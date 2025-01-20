import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../context/userContext";

const UserCard = ({ userIntro, index }) => {
  const { id, name, email, address } = userIntro;
  const { updateDpColors } = useContext(UserContext);

  const nameList = name.split(" ");
  const dp =
    nameList.length > 1 ? nameList[0][0] + nameList[1][0] : nameList[0][0];

  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-cyan-400",
  ];

  const dpColor = colors[index % colors.length];

  const [show, setShow] = useState(false);
  useEffect(() => {
    updateDpColors(id, dpColor);
    setTimeout(() => setShow(true), index * 100);
  }, [index]);

  return (
    <Link
      to={`/users/${id}`}
      className={`relative bg-gray-100 dark:bg-gray-800 flex flex-col items-center p-5 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform
        ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        hover:-translate-y-2 hover:shadow-2xl w-full max-w-[300px]`}
    >
      <div
        className={`h-20 w-20 sm:h-24 sm:w-24 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-md ${dpColor}`}
      >
        {dp}
      </div>

      <div className="mt-4 text-center w-full">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
          {name}
        </h2>
        <p className="text-base sm:text-base text-gray-500 dark:text-gray-400 truncate">
          {email}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 truncate">
          {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
    </Link>
  );
};

export default UserCard;
