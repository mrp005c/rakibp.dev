"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SendMessage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (message) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url not found");
    }

    try {
      const data = await fetch(`${SERVER_URL}/api/personal`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(message),
        redirect: "follow",
      });
      if (!data.ok) {
        throw new Error("Fetch failed not ok");
      }
      const res = await data.json();
      if (res.success) {
        toast.success("Message Sent Successful.");
        reset();
      } else {
        toast.error("Message Not Sent Successful!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-1/2 p-4 rounded-md bg-violet-200 dark:bg-[#282838] border-red/30 border">
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex-center flex-col reveal"
      >
        <h3 className="text-xl text-center font-bold">
          Feel Free To Reach Out
        </h3>
        <div className="space-y-4 w-full">
          <div className="grid grid-cols-2 content-start space-x-2">
            <div className="grid grid-cols-1 space-y-2">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Name"
                {...register("name", {
                  required: { value: true, message: "Name is required!" },
                })}
              />
              {errors.name && (
                <span className="text-[10px] text-red">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: { value: true, message: "Email is required!" },
                })}
              />
              {errors.email && (
                <span className="text-[10px] text-red">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label htmlFor="subject">Subject</label>
            <Input
              id="subject"
              type="text"
              placeholder="Enter Subject"
              {...register("subject", {
                required: { value: true, message: "Subject is required!" },
              })}
            />
            {errors.subject && (
              <span className="text-[10px] text-red">
                {errors.subject.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label htmlFor="message">Message</label>
            <Textarea
              id="message"
              placeholder="Write a message"
              {...register("message", {
                required: { value: true, message: "Message is required!" },
              })}
            />
            {errors.message && (
              <span className="text-[10px] text-red">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <>
              <VscLoading className="animate-spin" />
              Sending Message
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SendMessage;
