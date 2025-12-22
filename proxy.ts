import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const publicRoute = ["/login"];
const privateRoute = ["/profile", "/dashboard", "/settings"];

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = privateRoute.includes(path);
  const accessToken = (await cookies()).get("accessToken")?.value;

  if (isProtectedRoute && !accessToken) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  if (publicRoute.includes(path) && accessToken) {
    // const dashboardUrl = new URL("/", req.url);
    // return NextResponse.redirect(dashboardUrl);
  }
}
