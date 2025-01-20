import React from "react";

const UserContext = React.createContext({
  CurrentMode: "light",
  changeMode: () => {},
  dpColor: {},
  updateDpColors: () => {},
});

export default UserContext;
