import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "./context/userContext";
import Home from "./components/Home";
import UserDetail from "./components/userDetails";

import "./App.css";

class App extends Component {
  state = {
    CurrentMode: "light",
    dpColors: {},
  };

  changeMode = () => {
    this.setState((prevState) => ({
      CurrentMode: prevState.CurrentMode === "light" ? "dark" : "light",
    }));
  };

  updateDpColors = (userId, newColor) => {
    this.setState((prevState) => ({
      dpColors: { ...prevState.dpColors, [userId]: newColor },
    }));
  };

  render() {
    const { CurrentMode, dpColors } = this.state;
    console.log(dpColors);

    return (
      <UserContext.Provider
        value={{
          CurrentMode,
          changeMode: this.changeMode,
          dpColors,
          updateDpColors: this.updateDpColors,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </UserContext.Provider>
    );
  }
}

export default App;
