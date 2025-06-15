// src/components/ProtectedLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ProtectedLayout;
