"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Message = {
  _id: string;
  name: string;
  subject: string;
  email: string;
  message: string;
  readStatus: boolean;
};

const Page = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);

  const handleLoad = async () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal`, {
        method: "GET",
      });
      const { success, result }: { success: boolean; result: Message[] } =
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
      const res = await data.json();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteMessage = async (id: string) => {
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
      const res = await data.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      });
      if (!res.ok) {
        throw new Error("Log Out Failed!");
      }
      router.replace("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <Button onClick={handleLogOut}>Log out</Button>
      <Button onClick={handleLoad}>Load Messages</Button>
      <Button onClick={() => updateMessage("698efddc6177e059786d8766", true)}>
        Update Message
      </Button>
      <Button onClick={() => deleteMessage("698efddc6177e059786d8766")}>
        Delete Message
      </Button>

      <div className="">
        {messages && messages.length > 0 ? (
          messages.map((item, index) => (
            <div key={index}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.subject}</div>
              <div>{item.message}</div>
            </div>
          ))
        ) : (
          <div>No Message to show</div>
        )}
      </div>
    </div>
  );
};

export default Page;
