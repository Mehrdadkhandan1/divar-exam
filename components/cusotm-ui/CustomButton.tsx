import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const CustomButton = (props: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-primary px-6 py-2 cursor-pointer text-white rounded-md flex items-center justify-center",
        props.className
      )}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
