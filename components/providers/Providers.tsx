'use client'
import React from "react";
import { ProgressProvider } from "@bprogress/next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
    </ProgressProvider>
  );
};

export default Providers;
