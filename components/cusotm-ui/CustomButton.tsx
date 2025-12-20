import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

const CustomButton = ({
  isPending,
  ...props
}: React.ComponentProps<typeof Button> & { isPending?: boolean }) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-primary px-6 py-2 cursor-pointer text-white rounded-md flex items-center justify-center",
        props.className
      )}
    >
      {isPending ? <Spinner /> : props.children}
    </Button>
  );
};

export default CustomButton;
