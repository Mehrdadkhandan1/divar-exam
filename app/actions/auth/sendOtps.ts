"use server";
import { SendOtpState } from "@/features/auth/types/types";

export async function sendOtpAction(
  state: SendOtpState,
  formData: FormData
): Promise<SendOtpState> {
  const phone = formData.get("phone")?.toString() || "";
    
    
    

  return { success: true, message: `OTP sent to ${phone}` };
}
