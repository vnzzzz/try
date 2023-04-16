import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
import { Header } from "../header/Header";

// Pages
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { NotFound } from "../pages/NotFound";

// Authentication
import { Login } from "../Auth/Login";
import { PrivateRoute } from "../Auth/PrivateRoute";

export const AppRoutes: FC = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={"/dashboard"}
            element={
              <PrivateRoute
                component={<Dashboard />}
                redirect="/login"
                allowroles={["admin"]}
              />
            }
          />
          <Route path={"/login"} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
