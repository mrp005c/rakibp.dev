import { type StaticImageData } from "next/image";
export type techDetails = [
  {
    label: string;
    logo: string | StaticImageData;
    darkModeLogo?: string | StaticImageData;
    url: string;
  },
];
