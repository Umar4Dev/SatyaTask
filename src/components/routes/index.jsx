import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";

const CustomRoutes = () => {
  let role = "Admin";

  return (
    <Routes>
      <Route path="/*" exact element={<AdminRoutes />} />
    </Routes>
  );
};

export default CustomRoutes;
