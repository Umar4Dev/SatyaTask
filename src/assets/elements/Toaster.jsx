import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  return (
    <ToastContainer
      autoClose={2000}
      hideProgressBar
      theme="light"
    ></ToastContainer>
  );
};

const getPosition = () => {
  return "top-right";
};

export const notifySuccess = (text) =>
  toast.success(text, { position: getPosition() });
export const notifyError = (text) =>
  toast.error(text, { position: getPosition() });
export const notifyWarn = (text) =>
  toast.warn(text, { position: getPosition() });

export default Toaster;
