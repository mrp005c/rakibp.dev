"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const handleLoad = async () => {
    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal`, {
        method: "GET",
      });
      const res = await data.json();
      console.log(res);
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
      console.log({ success: res });
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
      console.log({ success: res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleLoad}>Load Messages</Button>
      <Button onClick={() => updateMessage("698efddc6177e059786d8766", true)}>Update Message</Button>
      <Button onClick={() => deleteMessage("698efddc6177e059786d8766")}>Delete Message</Button>
    </div>
  );
};

export default page;
