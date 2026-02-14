"use client";
import React, { createContext, useContext, useState } from "react";
import { Button } from "../ui/button";

type ConfirmContextType = (message: string) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmContextType | null>(null);

export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context)
    throw new Error("useConfirm must be used inside ConfirmProvider");
  return context;
};

export const ConfirmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [resolvePromise, setResolvePromise] = useState<
    ((value: boolean) => void) | null
  >(null);

  const confirm = (msg: string) => {
    setMessage(msg);
    return new Promise<boolean>((resolve) => {
      setResolvePromise(() => resolve);
    });
  };

  const handleClose = (result: boolean) => {
    resolvePromise?.(result);
    setMessage(null);
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}

      {message && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-99999 ">
          <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/30 border border-red/30 w-90">
            <h2 className="text-lg font-semibold mb-4">{message}</h2>

            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => handleClose(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => handleClose(true)}>
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};
