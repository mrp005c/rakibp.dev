import React from "react";
import { Button } from "@/components/ui/button";

const Tags = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-1 box-border border border-blue/30 shadow-md shadow-blue/50 text-lg rounded-full font-semibold mx-auto w-fit bg-red/50">
      {children}
    </div>
  );
}

const Bubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-0.5 box-border border border-red/30 text-xs rounded-full  font-medium  w-fit bg-green/30">
      {children}
    </div>
  );
}




export { Tags, Bubble };
