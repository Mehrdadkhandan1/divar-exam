import { validationOtp } from "@/app/actions/auth/validateOtp";
import CustomButton from "@/components/cusotm-ui/CustomButton";
import { Input } from "@/components/ui/input";
import React, { useActionState } from "react";
import { OtpState } from "../types/types";
type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phone: string;
};
const VerifyOtp = ({ setStep, phone }: Props) => {
  const [code, setCode] = React.useState("");
  const [state, action] = useActionState<OtpState, FormData>(
    validationOtp,
    null
  );
  console.log(state)
  return (
    <form
      action={(formData) => {
        formData.append("phone", phone);
        action(formData);
      }}
      className="h-full flex flex-col gap-5 w-full"
    >
      <h3 className="text-20 font-semibold">ورود به حساب کاربری</h3>

      <div className="flex flex-col gap-3 ">
        <p onClick={() => setStep(1)} className="text-18 font-bold">
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
          className="border-2 hover:outline-0! focus:outline-0! focus:shadow-none!"
        />
      </div>
      <div>
        <CustomButton
          className="text-12 underline font-semibold cursor-pointer hover:bg-white hover:text-blue-300 text-blue-400 bg-white p-0"
          onClick={() => setStep(1)}
        >
          تغیر شماره موبایل
        </CustomButton>
      </div>
      <div>
        <CustomButton type="submit" className="">
          تایید{" "}
        </CustomButton>
      </div>
    </form>
  );
};

export default VerifyOtp;
