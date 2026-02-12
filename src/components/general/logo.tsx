import Image from "next/image";
import Link from "next/link";
import React from "react";
// import LogoSite from '@/app/rakiblogo.png'

const Logo = () => {
  return (
    <Link href={"/"} className="logo flex-center font-semibold text-2xl relative h-20 w-48">
      <Image src={"/images/rakib/rakiblogo.png"} alt="SiteLogo" height={80} width={200} className="h-16 w-48 object-contain " /> 
    </Link>
  );
};

export default Logo;
