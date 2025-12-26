"use server";
import { OtpState } from "@/features/auth/types/types";
import http from "@/services/server/http";

export async function sendOtpAction(
  _: OtpState,
  formData: FormData
): Promise<OtpState> {
  const phone = formData.get("phone")?.toString() || "";

  try {
    const res = await http("/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ mobile: phone }),
    });
    if (res.status === 200) {
      return { success: true, message: `OTP sent to ${phone}` };
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    return { success: false, message: "Failed to send OTP" };
  }

  return { success: true, message: `OTP sent to ${phone}` };
}
