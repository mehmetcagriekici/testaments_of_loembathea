"use client";

//imports
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Link from "next/link";

interface BlobProps {
  href?: string;
  text?: string;
  route?: string;
  extraStyles?: {
    outer?: string;
    link?: string;
  };
}

export default function Blob({
  href = "",
  text = "",
  route = "",
  extraStyles = { outer: "", link: "" },
}: BlobProps) {
  const [screenSize, setScreenSize] = useState({ sw: 0, sh: 0 });
  const [initial, setInitial] = useState({ x: 0, y: 0 });

  // Set screen size and initial random position
  useEffect(() => {
    const sw = window.innerWidth;
    const sh = window.innerHeight;
    setScreenSize({ sw, sh });
    setInitial({ x: Math.random() * sw, y: Math.random() * sh });
  }, []);

  //motion controls for the movement (outer div)
  const control = useAnimation();
  //check if the component is still mounted for animation
  const mountedRef = useRef(true);

  //create the animation function and prevent re-creation on each render
  const animateBlob = useCallback(async () => {
    //animate the blob's position in an infinite loop
    while (mountedRef.current) {
      const newX = Math.random() * screenSize.sw;
      const newY = Math.random() * screenSize.sh;
      if (!mountedRef.current) break;

      //animate to new position
      try {
        await control.start({
          x: newX,
          y: newY,
          transition: { duration: 10, ease: "linear" },
        });
      } catch {
        break;
      }
    }
  }, [control, screenSize.sw, screenSize.sh]);

  //call the animation blob while the component is mounted
  useEffect(() => {
    mountedRef.current = true;

    animateBlob();

    return () => {
      mountedRef.current = false;
    };
  }, [animateBlob]);

  return (
    <motion.div
      initial={{ x: initial.x, y: initial.y }}
      animate={control}
      className={`rounded-full ${extraStyles.outer}`}
    >
      <Link
        href={href}
        className={`h-full w-full rounded-full flex justify-center items-center  ${extraStyles.link}`}
      >
        <motion.span className="hidden lg:inline">{text}</motion.span>
        <motion.span className="lg:hidden">{route}</motion.span>
      </Link>
    </motion.div>
  );
}
