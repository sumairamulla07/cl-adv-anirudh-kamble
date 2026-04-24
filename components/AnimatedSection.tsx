"use client";

import { motion } from "framer-motion";
import { CSSProperties, ElementType, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;     // ✅ ADD THIS
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  }),
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const MotionTag = motion(Tag as "div");

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
