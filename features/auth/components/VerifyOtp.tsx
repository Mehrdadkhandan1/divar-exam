import { validationOtp } from "@/app/actions/auth/validateOtp";
import CustomButton from "@/components/cusotm-ui/CustomButton";
import { Input } from "@/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { OtpState } from "../types/types";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phone: string;
};

const otpRegex = /^\d{5}$/;

const VerifyOtp = ({ setStep, phone }: Props) => {
  const [code, setCode] = React.useState("");
  const router = useRouter();
  const [state, action, isPending] = useActionState<OtpState, FormData>(
    validationOtp,
    null
  );

  const isValidOtp = otpRegex.test(code);

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state, router]);

  return (
    <form
      action={(formData) => {
        formData.append("phone", phone);
        action(formData);
      }}
      className="h-full flex flex-col gap-5 w-full"
    >
      <h3 className="text-20 font-semibold">ورود به حساب کاربری</h3>

      <div className="flex flex-col gap-3">
        <p
          onClick={() => setStep(1)}
          className="text-18 font-bold cursor-pointer"
        >
          کد تایید را وارد کنید<span className="text-red-500">*</span>
        </p>

        <Input
          maxLength={6}
          id="code"
          name="code"
          value={code}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setCode(value);
          }}
          placeholder="کد تایید"
          className={cn(
            "border-2 hover:outline-0! focus:outline-0! focus:shadow-none!"
          )}
        />

        {code.length > 0 && !isValidOtp && (
          <span className="text-red-500 text-12">کد باید ۶ رقم باشد</span>
        )}
      </div>

      <div>
        <CustomButton
          className="text-12 underline font-semibold cursor-pointer hover:bg-white hover:text-blue-300 text-blue-400 bg-white p-0"
          type="button"
          onClick={() => setStep(1)}
        >
          تغییر شماره موبایل
        </CustomButton>
      </div>
      {state?.status === 401 && (
        <div>
          <span className="text-red-500 text-12 font-bold">
            کد تایید نامعتبر است
          </span>
        </div>
      )}
      <div>
        <CustomButton
          type="submit"
          disabled={!isValidOtp || isPending}
          isPending={isPending}
          className={`${
            (!isValidOtp || isPending) && "opacity-50 cursor-not-allowed"
          }`}
        >
          تایید
        </CustomButton>
      </div>
    </form>
  );
};

export default VerifyOtp;
