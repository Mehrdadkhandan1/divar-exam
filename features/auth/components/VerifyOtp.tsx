import CustomButton from "@/components/cusotm-ui/CustomButton";
import { Input } from "@/components/ui/input";
import React from "react";

const VerifyOtp = () => {
  return (
    <form className="h-full flex flex-col gap-5 w-full">
      <h3 className="text-20 font-semibold">ورود به حساب کاربری</h3>
      <p className="font-semibold text-12 text-gray-400">
        برای امکان استفاده از خدمات دیوار، شماره موبایل خود را وارد کنید. کد
        تایید به این شماره ارسال خواهد شد
      </p>
      <div className="flex flex-col gap-3 ">
        <p className="text-18 font-bold">
          شماره موبایل <span className="text-red-500">*</span>
        </p>
        <Input
          id="phone"
          name="phone"
          placeholder="شماره موبایل"
          className="border-2 hover:outline-0! focus:outline-0! focus:shadow-none!"
        />
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
