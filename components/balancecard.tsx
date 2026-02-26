import React from "react";
import { EyeOff, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BalanceCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-6 text-white shadow-xl">
      {/* Background Gradient/Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
            <div className="h-4 w-8 rounded bg-white/20" />
            <div className="mt-1 h-1 w-8 rounded bg-white/20" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-blue-200">Organization Balance</p>
          <div className="mt-1 flex items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight">$2,405.50</h2>
            <EyeOff className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Sparkline decoration */}
        <div className="absolute bottom-20 right-6 h-12 w-32">
           <svg viewBox="0 0 100 40" className="h-full w-full stroke-emerald-400 stroke-2 fill-none">
             <path d="M0 35 Q 10 35 15 25 T 30 30 T 45 15 T 60 25 T 75 10 T 90 20 T 100 15" />
             <path d="M0 35 L 100 35" className="stroke-none fill-emerald-400/10" />
           </svg>
        </div>

        <div className="mt-8 flex gap-3">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            Deposit Funds
          </Button>
          <Button  className="flex-1">
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}
