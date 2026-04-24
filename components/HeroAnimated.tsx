"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function HeroAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="hidden" animate="visible" className="space-y-4">
      {children}
    </motion.div>
  );
}

export { fadeUp };
