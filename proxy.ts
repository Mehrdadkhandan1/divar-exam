import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose"; // از jose استفاده کن
import { env } from "next-runtime-env";
import { getValidAccessToken } from "@/shared/auth/get-valid-access-token";

const publicRoute = ["/login"];
const privateRoute = ["/profile", "/dashboard", "/settings", "/admin"];
const JWT_SECRET_KEY = new TextEncoder().encode(env("JWT_SECRET_KEY"));

export async function proxy(req: NextRequest) {
  const cookiesStore = cookies();
  const path = req.nextUrl.pathname;
  const isProtectedRoute = privateRoute.includes(path);
  const accessToken = (await cookiesStore).get("accessToken")?.value;
  const refreshToken = (await cookiesStore).get("refreshToken")?.value;
  const decode = accessToken
    ? await jwtVerify(accessToken, JWT_SECRET_KEY)
    : null;
  const isExpired =
    decode &&
    decode.payload?.exp &&
    decode.payload.exp * 1000 < Date.now() - 30_000;
  if ((!accessToken || isExpired) && refreshToken) {
    console.log("mehrdad");
    try {
      const data = (await getValidAccessToken()) as {
        accessToken: string;
        refreshToken: string;
      } | null;
      const newAccessToken = data?.accessToken || null;
      console.log(newAccessToken);
      const newRefreshToken = data?.refreshToken || null;

      (await cookiesStore).set("accessToken", newAccessToken || "", {
        httpOnly: true,
        name: "accessToken",
        path: "/",
        maxAge: 60 * 60,
      });
      (await cookiesStore).set("refreshToken", newRefreshToken || "", {
        httpOnly: true,
        name: "refreshToken",
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
      });
      return NextResponse.next();
    } catch (error) {
      console.log(error)
    }
  }

  if (isProtectedRoute && !accessToken) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  if (publicRoute.includes(path) && accessToken) {
    const dashboardUrl = new URL("/", req.url);
    return NextResponse.redirect(dashboardUrl);
  }
}
