"use server";
import {
  OtpState,
  validateOtpRespinseType,
} from "./../../../features/auth/types/types";
import http from "@/services/server/http";

import { cookies } from "next/headers";

export async function validationOtp(
  _: OtpState,
  formData: FormData
): Promise<OtpState> {
  const otpRegex = /^\d{5}$/;
  const otp = formData.get("code")?.toString() || "";
  if (!otpRegex.test(otp)) {
    return { success: false, message: "Invalid OTP format" };
  }
  try {
    const res: validateOtpRespinseType = await http.post("/auth/check-otp", {
      code: otp,
      mobile: formData.get("phone"),
    });
    const cookiesStore = cookies();
    (await cookiesStore).set("accessToken", res.data.accessToken, {
      httpOnly: true,
      name: "accessToken",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });
    // Set cookie for refresh token
    (await cookiesStore).set("refreshToken", res.data.refreshToken, {
      httpOnly: true,
      name: "refreshToken",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
    });

    return { success: true, message: "OTP validated successfully" };
  } catch (error) {
    const err = error as { status: number };
    console.error("Error validating OTP:", err.status);
    return {
      success: false,
      message: "Failed to validate OTP",
      status: err.status,
    };
  }
}
