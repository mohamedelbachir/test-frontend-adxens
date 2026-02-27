import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedNumber } from "./animated-number";

interface MetricCardProps {
  title: string;
  amount: number;
  period: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

export function MetricCard({
  title,
  amount,
  period,
  icon,
  className,
  index = 0,
}: MetricCardProps) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "flex flex-col justify-between rounded-2xl bg-accent/40 p-6 ",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            <AnimatedNumber value={amount} format={formatCurrency} />
          </h3>
        </div>
        <div className="rounded-full bg-gray-100 p-2">{icon}</div>
      </div>
      <div className="mt-4">
        <span className="rounded-md bg-white border border-border px-2 py-1 text-xs font-medium text-gray-600">
          {period}
        </span>
      </div>
    </motion.div>
  );
}
