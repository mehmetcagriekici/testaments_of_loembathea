//imports
import * as motion from "motion/react-client";

export default function AuthError({ error }: { error: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className=""
    >
      <span className="text-red-400 absolute top-8 left-0 p-2 text-center text-lg font-space-grotesk leading-relaxed tracking-wide animate-pulse md:text-xl md:left-1/2 md:-translate-x-1/2 xl:text-2xl">
        {error}
      </span>
    </motion.div>
  );
}
