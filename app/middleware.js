import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token") || req.headers.get("Authorization");

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    // Redirect to login if token is missing for protected routes
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Add protected routes here
};
