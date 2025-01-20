import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import UserContext from "../../context/userContext";
import ModeAction from "../ModeAction";

const UserDetail = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { dpColors } = useContext(UserContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-blue-100 dark:bg-slate-900 min-h-screen text-2xl font-bold">
        <RingLoader color="#045ac9" size={90} speedMultiplier={1.5} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="user-details-error"
          className="w-60 sm:w-80"
        />
        <div className="text-xl sm:text-2xl mt-4 text-red-500">
          Error: {error}
        </div>
      </div>
    );
  }

  const nameList = user.name.split(" ");
  const dp =
    nameList.length > 1 ? nameList[0][0] + nameList[1][0] : nameList[0][0];

  const dpColor = dpColors[userId] || "bg-gray-400";

  return (
    <>
      <div className="relative min-h-screen bg-blue-100 dark:bg-slate-900 flex flex-col justify-center items-center p-4 sm:p-6">
        <div className="fixed right-4 sm:right-10 top-4 sm:top-9">
          <ModeAction />
        </div>

        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 transition-all duration-700 transform scale-95 hover:scale-100">
          <div className="flex flex-wrap items-center justify-center sm:justify-start mb-4 gap-4">
            <div
              className={`rounded-full flex items-center justify-center text-white font-bold shadow-md ${dpColor}`}
              style={{
                width: "var(--dp-size, 5rem)",
                height: "var(--dp-size, 5rem)",
                fontSize: "var(--font-size, 1.5rem)",
              }}
            >
              {dp}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-950 dark:text-white">
              {user.name}
            </h2>
          </div>

          {/* User Details Section */}
          <p className="text-gray-700 sm:text-lg md:text-xl my-2 dark:text-gray-400">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700 sm:text-lg md:text-xl my-2 dark:text-gray-400">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-gray-700 sm:text-lg md:text-xl my-2 dark:text-gray-400">
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="text-gray-700 sm:text-lg md:text-xl my-2 dark:text-gray-400">
            <strong>Website:</strong> {user.website}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-4 w-full max-w-28 py-2 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>

      <style>
        {`
          :root {
            --dp-size: 4rem;
            --font-size: 1.25rem;
          }
          
          @media (min-width: 640px) {
            :root {
              --dp-size: 5rem;
              --font-size: 1.5rem;
            }
          }

          @media (min-width: 768px) {
            :root {
              --dp-size: 6rem;
              --font-size: 2rem;
            }
          }

          @media (min-width: 1024px) {
            :root {
              --dp-size: 7rem;
              --font-size: 2.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default UserDetail;
