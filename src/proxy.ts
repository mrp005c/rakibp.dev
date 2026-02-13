import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("admin_token")?.value;
  const isAdminLoginPage = pathname === "/admin/login";
  const isAdminPage = pathname === "/admin";
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminPage) {
    try {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  if (isAdminLoginPage && token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET as string);
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  if (isAdminRoute && !isAdminLoginPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET as string);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
