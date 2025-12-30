import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 border-b-2">
      <div className="flex items-center gap-12">
        <Link href="/">
          <Image
            src={"/Icons/divar.svg"}
            className="size-14"
            width={100}
            height={100}
            alt="لوگو دیوار"
          />
        </Link>
        <span className="flex items-center gap-1 text-gray-500">
          <Image
            src={"/Icons/location.svg"}
            className="size-6"
            width={30}
            height={30}
            alt="لوگو دیوار"
          />
          <span className="text-14 font-semibold">تهران</span>
        </span>
      </div>
      <div>
        <div className="flex items-center gap-5 justify-between">
          <Link
            href={"/auth"}
            className="flex items-center gap-2 text-gray-500"
          >
            <span>
              <Image
                src={"/Icons/profile.svg"}
                className="size-5"
                width={40}
                height={40}
                alt="لوگو دیوار"
              />
            </span>
            <span className="text-12 font-semibold">دیوار من</span>
          </Link>
          <Link
            href={"/dashboard/new-post"}
            className="flex items-center gap-2 text-14 text-white bg-primary px-4 py-2  rounded-md hover:bg-primary-dark transition"
          >
            ثبت آگهی
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
