//imports
import React from "react";

/**
 * presentational componont for the ul elements on homepage
 * with custom styling
 * @param children - children
 * @param listStyles - extra styles
 * @returns jsx
 */
export default function Ul({
  children,
  listStyles = "",
}: {
  children: React.ReactNode;
  listStyles?: string;
}) {
  return (
    <ul
      className={`flex flex-col justify-safe-center items-safe-center rounded ${listStyles}`}
    >
      {children}
    </ul>
  );
}
