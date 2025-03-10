//imports
import React from "react";
import * as motion from "motion/react-client";

export default function AuthSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="w-full flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 xl:gap-6"
    >
      {children}
    </motion.section>
  );
}
