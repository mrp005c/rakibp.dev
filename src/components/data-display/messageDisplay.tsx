import React from "react";
import { messagetype } from "../lib/types";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { Mail, MailOpen } from "lucide-react";

const MessageDisplay = ({
  _id,
  name,
  email,
  subject,
  message,
  readStatus,
  createdAt,
  updatedAt,
  deleteMessage,
  updateMessage,
}: messagetype & {
  _id: string;
  deleteMessage: (id: string) => Promise<void>;
  updateMessage: (id: string, isRead: boolean) => Promise<void>;
}) => {
  return (
    <div className="p-2 sm:p-4 rounded-md border border-blue/30 box-border bg-violet-50">
      <div className="text-base">
        <div className="space-x-2">
          <span className="font-semibold">Name:</span>
          <span>{name}</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">Email:</span>
          <span>{email}</span>
        </div>
        <div className="space-x-2 font-semibold">
          <span className="font-semibold">Subject:</span>
          <span>{subject}</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold">Message:</span>
          <span>{message}</span>
        </div>
        <div className="space-x-2 text-xs">
          <span className="font-semibold">Reveived At:</span>
          <span>{new Date(createdAt).toUTCString()}</span>
        </div>
      </div>

      <div className="buttons flex flex-wrap justify-end gap-3">
        <Button
          size={"sm"}
          variant={"destructive"}
          onClick={() => deleteMessage(_id)}
        >
          Delete <MdDelete />
        </Button>
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => updateMessage(_id, readStatus)}
        >
          {readStatus ? (
            <>
              Mark As Read <MailOpen />
            </>
          ) : (
            <>
              Mark As Unread <Mail />{" "}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default MessageDisplay;
