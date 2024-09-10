import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Define the secret for JWT validation
const secret = process.env.NEXT_PUBLIC_SECRET as string;

export async function middleware(req: NextRequest) {
  // @ts-ignore
  const token = await getToken({ req, secret });

  // If there's no token and the request is not to a public path, redirect to login
  if (!token && !req.nextUrl.pathname.startsWith("/public")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // If token exists or request is to a public path, continue as normal
  return NextResponse.next();
}

// Define which paths this middleware should be applied to
export const config = {
  matcher: ["/settings/:path*", "/profile/:id*"],
};
