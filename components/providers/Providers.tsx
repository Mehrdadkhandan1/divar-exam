"use client";
import React from "react";
import { ToastContainer } from "react-toastify";

import { ProgressProvider } from "@bprogress/next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToastProvider from "@/context/ToastProvider";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <ProgressProvider
      height="2px"
      color="#a62626"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <ToastProvider>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ToastProvider>
    </ProgressProvider>
  );
};

export default Providers;
