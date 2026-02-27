"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AnimatedNumber({
  value,
  duration = 2,
  className,
  format = (v) => v.toFixed(0),
}: {
  value: number;
  duration?: number;
  className?: string;
  format?: (value: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const transformedValue = useTransform(springValue, (latest) => format(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest);
      }
    });
  }, [springValue, format]);

  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}
