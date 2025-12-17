import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Image
            src={"/divar.svg"}
            className="size-16"
            width={100}
            height={100}
            alt="لوگو دیوار"
          />
        </div>
      </div>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
