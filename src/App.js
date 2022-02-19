import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import { AppRoutes } from "./AppRoutes";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
};
