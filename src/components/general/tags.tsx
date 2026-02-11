import React from "react";
import { Button } from "@/components/ui/button";

const Tags = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-1 text-sm rounded-full font-semibold mx-auto w-fit bg-red/50">
      {children}
    </div>
  );
}

const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant={"ghost"} size={"icon-lg"}>
      {children}
    </Button>
  );
};


export { Tags, IconButton };
