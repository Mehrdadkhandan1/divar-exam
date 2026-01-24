"use client";
import React, { createContext } from "react";
import { toast as showToast } from "react-toastify";
type ToastType = "info" | "warning" | "error" | "success";
type ContextToastType = {
  toast: (type: ToastType, message: string) => void;
};

export const ToastContext = createContext<ContextToastType | null>(null);
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = (type: ToastType, message: string) => {
    showToast[type](message, {
      position: "bottom-right",
      hideProgressBar: true,
      autoClose: 4000,
      rtl: true,
    });
  };
  return (
    <ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
