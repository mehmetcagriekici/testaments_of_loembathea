//imports
import React from "react";

/**
 * component for section elements in homepage
 * full screen on smaller screens (moblie)
 * @param children - react - node
 * @param extraStyles - extra tailwind classes
 */
export default function Sec({
  children,
  extraStyles = "",
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) {
  return (
    <section
      className={`relative min-h-dvh min-w-dvw p-6 flex flex-col justify-safe-center items-safe-center lg:p-24 ${extraStyles}`}
    >
      {children}
    </section>
  );
}
