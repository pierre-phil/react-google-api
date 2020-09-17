import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

const AppContainer = ({ children }) => {
  const { modeClass } = useContext(ModeContext);
  return <div className={`pt-3 ${modeClass}`}>{children}</div>;
};

export default AppContainer;
