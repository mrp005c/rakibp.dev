"use client";
import MessageDisplay from "@/components/data-display/messageDisplay";
import { useConfirm } from "@/components/general/confirm-provider";
import { messagetype } from "@/components/lib/types";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { MdRefresh } from "react-icons/md";

type filterKeyword = "unread" | "read" | "all";

const Messages = () => {
  const confirm = useConfirm();
  const [messages, setMessages] = useState<messagetype[]>([]);
  const [filterMessages, setFilterMessages] = useState<messagetype[]>([]);
  const [filterKey, setFilterKey] = useState<filterKeyword>("unread");
  const FilterKeys: filterKeyword[] = ["unread", "read", "all"];
  const handleLoadMessage = async () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal`, {
        method: "GET",
      });
      const { success, result }: { success: boolean; result: messagetype[] } =
        await data.json();
      if (success) {
        setMessages(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateMessage = async (id: string, isRead: boolean) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const message = {
      readStatus: !isRead,
    };

    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal?id=${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(message),
        redirect: "follow",
      });
      if (!data.ok) {
        throw new Error("Fetch failed not ok");
      }
      const { success } = await data.json();
      if (success) handleLoadMessage();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id: string) => {
    const ok = await confirm(`Are you sure? Delete The Item?`);
    if (!ok) {
      return;
    }
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal?id=${id}`, {
        method: "DELETE",
        redirect: "follow",
      });
      if (!data.ok) {
        throw new Error("Fetch failed not ok");
      }
      const { success } = await data.json();
      if (success) handleLoadMessage();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadMessage();
  }, []);

  useEffect(() => {
    const priFilter = messages.filter((item) => {
      if (filterKey === "read") {
        return item.readStatus === true;
      }
      if (filterKey === "unread") {
        return item.readStatus === false;
      }
      return true;
    });

    setFilterMessages(priFilter);
  }, [filterKey, messages]);

  return (
    <>
      {/* header of content */}
      <div>
        <div className="p-2 rounded-sm bg-violet box-border border border-blue/20 flex-between">
          <span>Messages</span>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => handleLoadMessage()}
          >
            <MdRefresh />
          </Button>
        </div>
      </div>

      {/* filter body  */}
      <div className="flex-center gap-3 w-fit flex-wrap p-2 box-border bg-green/40 rounded-md border border-red/50">
        {FilterKeys.map((item, index) => (
          <Button
            variant={filterKey === item ? "default" : "secondary"}
            key={index}
            size={"sm"}
            onClick={() => setFilterKey(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            {filterKey === item ? `(${filterMessages.length})` : ""}
          </Button>
        ))}
      </div>

      {/* content of header */}

      <div className="h-[calc(100vh-250px)] min-h-175 overflow-auto no-scrollbar">
        <div className="space-y-3">
          {messages && filterMessages && filterMessages.length > 0 ? (
            filterMessages.map((item, index) => (
              <MessageDisplay
                {...item}
                key={index}
                updateMessage={updateMessage}
                deleteMessage={deleteMessage}
              />
            ))
          ) : (
            <div className="text-center font-bold text-xl">
              No Message to show
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Messages;

/*
<Button onClick={handleLoad}>Load Messages</Button>
        <Button onClick={() => updateMessage("698efddc6177e059786d8766", true)}>
          Update Message
        </Button>
        <Button onClick={() => deleteMessage("698efddc6177e059786d8766")}>
          Delete Message
        </Button>
*/
