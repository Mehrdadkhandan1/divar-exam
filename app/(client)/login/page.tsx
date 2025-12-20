"use client";
import { SendOtpForm } from "@/features/auth";
import VerifyOtp from "@/features/auth/components/VerifyOtp";
import { useState } from "react";

const AuthPage = () => {
  const [step, setStep] = useState(2);
  const [phone, setPhone] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" p-8 w-1/2 border shadow rounded-lg ">
        {step === 1 && (
          <SendOtpForm phone={phone} setPhone={setPhone} setStep={setStep} />
        )}
        {step === 2 && <VerifyOtp phone={phone} setStep={setStep} />}
      </div>
    </div>
  );
};

export default AuthPage;
