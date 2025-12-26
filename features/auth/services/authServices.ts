import http from "@/services/server/http";
import { cookies } from "next/headers";
export const whoami = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value || "";

  const res = await http("/user/whoami", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res?.status === 200 ? res.json() : null;
};
