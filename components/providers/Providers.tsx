'use client'
import React from "react";
import { ProgressProvider } from "@bprogress/next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <ProgressProvider
      height="2px"
      color="#a62626"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <Toaster />
    </ProgressProvider>
  );
};

export default Providers;
