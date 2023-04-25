import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Results } from "./components";

const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate />} />
        <Route exact path="/search" element={<Results />} />
      </Routes>
    </div>
  );
};

export default Router;
