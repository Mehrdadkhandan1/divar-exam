'use client'
import React from "react";
import { ProgressProvider } from "@bprogress/next/app";
const Providers = ({children}: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="2px"
      color="#a62626"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
