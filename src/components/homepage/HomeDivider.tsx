"use client";

//only works in client components
//Minimal impact on page load and SEO.
import dynamic from "next/dynamic";
const Divider = dynamic(() => import("@mui/material/Divider"), { ssr: false });

export default function HomeDivider() {
  return <Divider flexItem variant="middle" className="bg-white" />;
}
