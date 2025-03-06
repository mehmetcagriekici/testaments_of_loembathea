"use client";
//imports
//import animation framework for csr
import { motion } from "motion/react";
/**
 * HTML button element for home page
 * Custom styling
 * @param onClick - on click function
 * @param main - main text
 * @param span - short explanation
 * @param extraSytyles - additional styles to customize
 */
export default function Btn({
  onClick = () => {},
  main,
  span = "",
  extraStylesBtn = "",
  extraStylesSpan = "",
}: {
  onClick?: () => void;
  main: string;
  span?: string;
  extraStylesBtn?: string;
  extraStylesSpan?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`w-2/3 p-4 font-spectral font-black rounded-full hover:cursor-pointer outline-none border-none text-lg md:text-2xl md:w-1/3 xl:w-1/5 xl:text-xl ${extraStylesBtn}`}
    >
      {main}{" "}
      <span className={`font-space-grotesk ${extraStylesSpan}`}>{span}</span>
    </motion.button>
  );
}
