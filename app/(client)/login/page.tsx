"use client";
import { SendOtpForm } from "@/features/auth";
import VerifyOtp from "@/features/auth/components/VerifyOtp";
import { useState } from "react";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" p-8 w-1/2 border shadow rounded-lg ">
        {step === 1 && <SendOtpForm setStep={setStep} />}
        {step === 2 && <VerifyOtp setStep={setStep} />}
      </div>
    </div>
  );
};

export default AuthPage;
