"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-row gap-1 items-center">
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer w-8"
        height="100"
        width="100"
        src="/images/motelLogo.png"
      />
      <p className="text-xl font-bold text-[#ff385c]">motel</p>
    </div>
  );
};

export default Logo;
