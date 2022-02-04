import React from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Writing from "../pages/Writing";
import Reading from "../pages/Reading";
import Listening from "../pages/Listening";
import Speaking from "../pages/Speaking";
import Grammar from "../pages/Grammar";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";

import "../router/AppRouter";

const AppRouter = () => {
  const { isAuth } = useAuth();
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {isAuth ? (
            <React.Fragment>
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
            </React.Fragment>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
