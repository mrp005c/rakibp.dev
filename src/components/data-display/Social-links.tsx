import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Social_Links } from "@/components/lib/data";
import Link from "next/link";

const Social_links = () => {
  return (
    <div className="text-4xl flex items-center gap-3 reveal">
     {Social_Links.map((item, index)=>(
      <Link key={index} href={item.href} target="_blank"><item.icon/></Link>
     ))}
    </div>
  );
};

export default Social_links;
