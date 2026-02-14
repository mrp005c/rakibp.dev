"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";

const AlertDiagram = ({
  show,
  setShow,
  title,
  message,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  message?: string;
}) => {
  const buttonFocus = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    buttonFocus.current?.focus();
  });

  if (show) {
    return (
      <div className="min-h-screen min-w-full bg-gray/20 backdrop-blur-md flex-center absolute top-0 z-99999">
        <div className="p-8 w-full max-w-100 bg-gray space-y-5 rounded-md border border-red/20 shadow shadow-black/20">
          <h2 className="text-2xl font-bold ">{title}</h2>
          <p>{message}</p>
          <div className="w-full flex justify-end">
            <Button
              ref={buttonFocus}
              onClick={() => setShow(false)}
              variant={"default"}
              className="text-lg font-bold"
            >
              Ok
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return;
};

export { AlertDiagram };
