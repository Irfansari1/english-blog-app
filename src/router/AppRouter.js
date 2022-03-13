import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Writing from "../pages/Writing";
import Reading from "../pages/Reading";
import Listening from "../pages/Listening";
import Speaking from "../pages/Speaking";
import Grammar from "../pages/Grammar";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Detail from "../pages/Detail";
import Logout from "../pages/Logout";
import "../router/AppRouter";

const AppRouter = () => {
  
  const { isAuth } = useAuth();
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuth ? (
          <React.Fragment>
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/logout" element={<Logout />} />
          </React.Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default AppRouter;
