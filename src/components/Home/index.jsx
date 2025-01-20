import { Component, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import UserContext from "../../context/userContext";
import Navbar from "../Navbar";
import UserCard from "../UserCard";
import FailurePage from "../FailurePage";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Home extends Component {
  static contextType = UserContext;

  state = {
    fullUsersList: [],
    usersList: [],
    currentSort: "asc",
    searchType: "",
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        data.sort((a, b) => a.name.localeCompare(b.name));

        setTimeout(
          () =>
            this.setState({
              fullUsersList: data,
              usersList: data,
              apiStatus: apiStatusConstants.success,
            }),
          500
        );
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  renderSuccessUsersList = () => {
    let { usersList, currentSort, searchType } = this.state;

    if (currentSort === "asc") {
      usersList.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      usersList.sort((a, b) => b.name.localeCompare(a.name));
    }

    usersList = usersList.filter((ul) =>
      ul.name.toLowerCase().includes(searchType.toLowerCase())
    );

    if (usersList.length < 1) {
      return (
        <div className="flex flex-col justify-center items-center mt-28 min-[400px]:mt-10 min-[600px]:mt-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
            className="no-jobs-img"
          />
          <h1 className="text-3xl m-3 text-center font-bold">No Users Found</h1>
          <p className="text-xl text-center">
            We could not find any users. Try other name
          </p>
        </div>
      );
    }

    return (
      <>
        <h1 className="text-5xl font-bold font-mono text-center text-blue-950 dark:text-white">
          Users List
        </h1>
        <ul className="mt-8 m-6 w-full flex flex-wrap justify-center gap-6 transition-all">
          {usersList.map((ul, index) => (
            <UserCard key={ul.id} userIntro={ul} index={index} />
          ))}
        </ul>
      </>
    );
  };

  renderLoadingView = () => (
    <div className="mt-16 flex justify-center items-center justify-self-center h-96 bg-transparent dark:bg-gray-900">
      <RingLoader
        color="#045ac9"
        size={90}
        speedMultiplier={1.5}
        cssOverride={{
          display: "block",
          margin: "auto",
        }}
      />
    </div>
  );

  userSearch = (searchType) => {
    const { fullUsersList } = this.state;

    const filteredUsers = fullUsersList.filter((user) =>
      user.name.toLowerCase().includes(searchType.toLowerCase())
    );

    this.setState({
      searchType,
      usersList: searchType ? filteredUsers : fullUsersList,
    });
  };

  changeSort = (currentSort) => {
    this.setState({ currentSort });
  };

  selectTheScreen = () => {
    let { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessUsersList();
      case apiStatusConstants.failure:
        return <FailurePage retryClicked={this.fetchUsers} />;
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="min-h-screen bg-blue-100 dark:bg-gradient-to-b  dark:bg-gray-900 transition-all duration-300">
        <Navbar userSearch={this.userSearch} changeSort={this.changeSort} />

        <div className="pt-32 p-6 flex flex-col items-center text-gray-900 dark:text-white">
          {this.selectTheScreen()}
        </div>
      </div>
    );
  }
}

export default Home;
