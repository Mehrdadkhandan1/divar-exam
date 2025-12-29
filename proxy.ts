import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'; // از jose استفاده کن
import { env } from "next-runtime-env";
const publicRoute = ["/login"];
const privateRoute = ["/profile", "/dashboard", "/settings"];
const JWT_SECRET_KEY = new TextEncoder().encode(env('JWT_SECRET_KEY'))
export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = privateRoute.includes(path);
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = await (await cookies()).get('refreshToken')
  if (isProtectedRoute && !accessToken) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  if (publicRoute.includes(path) && accessToken) {
    const dashboardUrl = new URL("/", req.url);
    return NextResponse.redirect(dashboardUrl);
  }
  if
    (accessToken) {

    const decode =await jwtVerify(accessToken || '', JWT_SECRET_KEY)
      console.log(decode)
  }

}
