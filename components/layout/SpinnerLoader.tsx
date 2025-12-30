"use client";
import { Spinner } from "@/components/ui/spinner";

const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner className="size-8 text-primary" />
    </div>
  );
};

export default SpinnerLoader;
