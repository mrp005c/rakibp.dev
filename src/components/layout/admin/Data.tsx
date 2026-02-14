"use client";
import { Button } from "@/components/ui/button";
import { MdRefresh } from "react-icons/md";

const Data = () => {
  return (
    <>
      {/* header of content */}
      <div>
        <div className="p-2 rounded-sm bg-violet-100 box-border border border-blue/20 flex-between">
          <span>Data</span>
          <Button variant={"outline"} size={"icon"}>
            <MdRefresh />
          </Button>
        </div>
      </div>

      {/* content of header */}

      <div className="max-h-[calc(100vh-250px)] overflow-auto no-scrollbar">
        <div>Not Implemented Yet!</div>
      </div>
    </>
  );
};

export default Data;
