//imports
import { NextRequest, NextResponse } from "next/server";
import { requireAuth, preventAuthPages } from "./middlewares/auth";

/**
 * Main middleware, imports all feature specific middlewares
 * @param req - current request
 */
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  //protect dashboard
  if (path.startsWith("/dashboard")) {
    return requireAuth(req);
  }

  //prevent logged-in usersfrom accessing auth pages
  if (path.startsWith("/auth")) {
    return preventAuthPages(req);
  }

  return NextResponse.next();
}

//Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
