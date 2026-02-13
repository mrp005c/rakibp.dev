import Image from "next/image";
import Link from "next/link";
import React from "react";
// import LogoSite from '@/app/rakiblogo.png'

const Logo = () => {
  return (
    <Link href={"/"} className="logo flex-center font-semibold text-2xl relative h-20 w-20">
      <Image src={"/images/rakib/rakiblogo.png"} alt="SiteLogo" height={80} width={100} className="h-16 w-20 dark:invert object-contain " /> 
    </Link>
  );
};

export default Logo;
