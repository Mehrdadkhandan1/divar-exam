import { env } from "next-runtime-env";

export default async function http(
  path: string,
  options: RequestInit = {}
) {
  return fetch(`${env("NEXT_PUBLIC_API_BASE_URL")}${path}`, {
    ...options,
    cache: "no-store",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
}
