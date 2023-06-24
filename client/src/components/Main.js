import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ListingSummary from "../pages/ListingSummary";

const Main = () => {
  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/listing" element={<ListingSummary />}></Route>
    </Routes>
  );
};

export default Main;
