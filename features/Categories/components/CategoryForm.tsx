"use client";
import CustomButton from "@/components/cusotm-ui/CustomButton";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryInfer, categoryZod } from "../validation";

const CategoryForm = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const { register, formState: { errors }, handleSubmit } = useForm<categoryInfer>({
    mode: 'onChange',
    resolver: zodResolver(categoryZod)
  })

  const addCategor = (data: categoryInfer) => {
    
  }
  const setIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <form onSubmit={handleSubmit(addCategor)} className="flex flex-col gap-3">
      <div>
        <h3 className="mt-4 font-bold border-b-2 pb-2 border-primary inline-block ">
          دسته بندی جدید
        </h3>
      </div>
      <div className="flex items-center justify-center ">
        <label
          htmlFor="icon"
          className=" border relative rounded-full flex items-center cursor-pointer justify-center p-2 border-primary size-20 "
        >
          {preview &&
            <div className="absolute -left-2 bottom-0 bg-white rounded-full size-7 border  p-1 flex items-center justify-center">
              <Image
                src={"/Icons/trash.svg"}
                alt="trash"
                width={30}
                height={30}
              />
            </div>
          }
          <Image
            src={preview ? preview : "/Icons/camera.svg"}
            alt="icon"
            height={50}
            width={50}
            className={` w-full  h-full object-cover ${!preview && "opacity-50 w-10! h-10!"
              } `}
          />
        </label>
        <Input
          onChange={setIcon}
          type="file"
          name="icon"
          id="icon"
          className="fixed -left-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="categoryName">نام دسته بندی</label>
        <Input type="text" id="categoryName" {...register('name')} error={!!errors.name?.message} />
        {errors.name && <p className="text-primary font-bold text-14">
          {errors.name.message}
        </p>}
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="slug">اسلاگ</label>
        <Input type="text" {...register('slug')} error={!!errors.slug?.message} />
        {errors.slug && <p className="text-primary font-bold text-14">
          {errors.slug.message}
        </p>}
      </div>
      <CustomButton type="submit" >
        ثبت دسته بندی
      </CustomButton>
    </form>
  );
};

export default CategoryForm;
