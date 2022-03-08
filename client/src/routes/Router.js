import React from "react";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/register"></Route>
      <Route path="/login"></Route>
      <Route path="/logout"></Route>
      <Route path="/home"></Route>
      {/* <Route path="/home"></Route> */}
    </Routes>
  );
}

export default Router;
