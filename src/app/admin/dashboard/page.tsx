"use client";

import Code from "@/components/layout/admin/Code";
import Data from "@/components/layout/admin/Data";
import Home from "@/components/layout/admin/Home";
import Messages from "@/components/layout/admin/Messages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [adminTab, setAdminTab] = useState<string>(
    searchParams.get("tab") || "home",
  );

  const admin_tab_buttons: { label: string; tab: string }[] = [
    { label: "Home", tab: "home" },
    { label: "Message", tab: "message" },
    { label: "Data", tab: "data" },
    { label: "Code", tab: "code" },
  ];

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
    <div className=" ">
      <div className="max-w-445 mx-auto ">
        <div className="header flex-between flex-wrap w-full p-5 box-border bg-violet-50">
          <Link href={"/admin/dashboard"} className="text-2xl font-bold">
            Dashboard
          </Link>
          <div className="flex-center gap-2">
            <div className=" rounded-full bg-blue relative">
              <Image
                src={"/images/rakib/me.jpg"}
                alt="rakibimage"
                height={60}
                width={60}
                className="w-15 h-15 object-cover rounded-full"
              />
            </div>
            <Button variant={"destructive"} size={"xs"} onClick={handleLogOut} className="cursor-pointer">Log out</Button>
          </div>
        </div>
        <div className="flex gap-2 items-start p-2">
          {/* button container  */}
          <div className="button flex  flex-col max-w-40 w-40 md:w-50 gap-2 p-3 rounded-md border border-red bg-green/10">
            {admin_tab_buttons.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  setAdminTab(item.tab);
                  router.push(`/admin/dashboard?tab=${item.tab}`);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
          {/* content container  */}
          <div className="button flex  w-full flex-col gap-2 p-3 rounded-md border border-red bg-green/10">
          {(adminTab === "home" || adminTab === null) && <Home/>}
          {adminTab === "message" && <Messages/>}
          {adminTab === "data" && <Data/>}
          {adminTab === "code" && <Code/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
