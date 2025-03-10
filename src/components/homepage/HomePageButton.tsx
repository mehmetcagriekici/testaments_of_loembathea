"use client";
//imports
//import animation framework for csr
import { motion } from "motion/react";
//navigator
import { useRouter } from "next/navigation";
/**
 * HTML button element for home page
 * Custom styling
 * @param onClick - on click function
 * @param main - main text
 * @param span - short explanation
 * @param extraSytyles - additional styles to customize
 */
export default function Btn({
  main,
  span = "",
  extraStylesBtn = "",
  extraStylesSpan = "",
  purpose,
}: {
  purpose: string;
  main: string;
  span?: string;
  extraStylesBtn?: string;
  extraStylesSpan?: string;
}) {
  //router
  const router = useRouter();

  /**
   * Log in function
   */
  function login() {
    router.push("/auth/login");
  }

  /**
   * Sign up function
   */
  function signup() {
    router.push("/auth/signup");
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={purpose === "login" ? login : signup}
      className={`w-2/3 p-4 font-spectral font-black rounded-full hover:cursor-pointer outline-none border-none text-lg md:text-2xl md:w-1/3 xl:w-1/5 xl:text-xl ${extraStylesBtn}`}
    >
      {main}{" "}
      <span className={`font-space-grotesk ${extraStylesSpan}`}>{span}</span>
    </motion.button>
  );
}
