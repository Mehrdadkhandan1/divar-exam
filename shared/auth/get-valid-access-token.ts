"use server";
import { env } from "next-runtime-env";
import { cookies } from "next/headers";

let refreshTokenPrimise: Promise<string | null> | null = null;
function isTokenExpired(token: string) {
  try {
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    return payload.exp * 1000 < Date.now() - 30_000; // 30s buffer
  } catch {
    return true;
  }
}

export async function getValidAccessToken() {
  const cookiesStore = cookies();
  const accessToken = (await cookiesStore).get("accessToken")?.value;
  const refreshToken = (await cookiesStore).get("refreshToken")?.value;
  if (accessToken && !isTokenExpired(accessToken || "")) {
    return accessToken;
  }
  if (!refreshToken) {
    return null;
  }
  if (!refreshTokenPrimise) {
    refreshTokenPrimise = (async () => {
      try {
        const res = await fetch(
          `${env("NEXT_PUBLIC_API_BASE_URL")}/auth/check-refresh-token`,
          {
            method: "POST",
            body: JSON.stringify({ refreshToken }),
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );
        console.log(await res.ok);
        if (!res.ok) {
          return null;
        }

        const data = await res.json();

        return data;
      } catch {
        return null;
      } finally {
        refreshTokenPrimise = null;
      }
    })();
  } else {
    console.log("2");
  }
  console.log("refreshTokenPrimise");
  return refreshTokenPrimise;
}
