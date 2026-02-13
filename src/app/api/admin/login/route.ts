import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { strict } from "assert";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      {
        message: "Invalid Credentials",
      },
      { status: 401 },
    );
  }
  const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}


  const token = jwt.sign({ role: "admin", name: "Muhammad Rakib", }, secret , {
    expiresIn: "20h",
  });

  const response = NextResponse.json({ message: "Login Successful" });

  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // secure: false,
    sameSite: "lax",
    path: "/",
  });

  return response;
}
