//imports
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * function to check authentication status
 * @returns Promise<boolean>
 */
export async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return !!token; //convery falsy or truhty values to booleans
}

/**
 * Middleware function to enfore authentication
 * @param req - current request
 * @param redirectPath - path to redirect, default "/auth/login"
 */
export async function requireAuth(
  req: NextRequest,
  redirectPath: string = "/auth/login"
) {
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  return NextResponse.next();
}

/**
 * Middleware function to prevent authenticated users from accessing auth pages
 * @param req - current request
 * @param redirectPath - path to redirect, default "/dashboard"
 */
export async function preventAuthPages(
  req: NextRequest,
  redirectPath: string = "/dashboard"
) {
  const authenticated = await isAuthenticated();

  if (authenticated) {
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  return NextResponse.next();
}
