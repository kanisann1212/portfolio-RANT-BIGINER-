"use client";

import React, { useRef, useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Dela_Gothic_One } from "next/font/google"

const CYCLES_PER_LETTER = 6.5;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})


type Props = {
  children: string,
  className?:string,
};

const ScrambleText: React.FC<Props> = ({ children,className }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children ?? "" 
  const ref = useRef<HTMLSpanElement>(null)

  const [text, setText] = useState(TARGET_TEXT);
useEffect(() => {
  scramble() 
}, [])

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index ) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      whileTap={{
        scale: 0.975,
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default ScrambleText;