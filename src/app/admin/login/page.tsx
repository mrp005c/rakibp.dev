"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { VscLoading } from "react-icons/vsc";

type Inputs = {
  email: "";
  password: "";
};

const Page = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const router = useRouter();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("root", { message: "Credential Mismatched!" });
        alert("Credential Mismatched!")
        return;
    }

      const result = await res.json();

      router.push("/admin/dashboard");
    } catch {
      setError("root", { message: "Something Went Wrong!" });
    }
  };

  return (
    <div className="absolute top-0 min-h-screen min-w-full bg-gray z-9999 flex-center">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="p-8 bg-green/10 flex-center flex-col gap-3 rounded-md border box-border border-red/30 shadow-lg shadow-blue/20 min-w-48"
      >
        <h3 className="text-center font-bold text-xl">Admin Login</h3>
        <div className="w-full">
          <div className="grid grid-cols-1 space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email or username is required!",
                },
              })}
              id="email"
              type="email"
              placeholder="Enter Email"
              className=" bg-gray  dark:bg-gray dark:placeholder:text-gray-200"
            />
            {errors.email && (
              <span className="text-xs text-red">{errors.email.message}</span>
            )}
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label htmlFor="password">Password</label>
            <Input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: { value: 8, message: "At least 8 character!" },
                maxLength: { value: 15, message: "Maximum 15 character!" },
              })}
              id="password"
              type="password"
              placeholder="Enter Password"
              className=" bg-gray  dark:bg-gray dark:placeholder:text-gray-200"
            />
            {errors.password && (
              <span className="text-xs text-red">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <>
              <VscLoading className="animate-spin" />
              Please Wait
            </>
          ) : (
            "Log In"
          )}
        </Button>
        {/* {errors.root && (
              <span className="text-lg text-red">
                {errors.root.message}
              </span>
            )} */}
      </form>
    </div>
  );
};

export default Page;
