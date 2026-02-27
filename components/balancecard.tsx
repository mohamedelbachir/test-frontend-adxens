import React from "react";
import { EyeSlash, Strongbox } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";
import ChartMini from "@/assets/chart-mini.png";
import Image from "next/image";
import ButtonPrimary from "./Button";
import { AnimatedNumber } from "./animated-number";

export function BalanceCard() {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <div className="relative h-full overflow-hidden rounded-4xl bg-[#0F172A] p-4 text-white bg-[url('/bg-card.png')] bg-no-repeat bg-cover">
      {/* Background Gradient/Effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" /> */}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between ">
        <div className="w-full grow rounded-3xl bg-white/10 border border-white/40 p-4 backdrop-blur-sm flex flex-col justify-between">
          <div className="relative">
            <Strongbox
              variant="Bold"
              className="text-[#9ab0fd] size-10  fill-white !p-0 !m-0"
            />
            <div className="size-8 rounded-2xl bg-white -z-1 absolute top-1 left-1"></div>
          </div>

          <div>
            <p className="text-sm font-medium text-blue-200">
              Organization Balance
            </p>
            <div className="flex items-center justify-between">
              <div className="mt-1 flex items-center gap-3">
                <h2 className="text-3xl font-bold tracking-tight">
                  <AnimatedNumber value={2405.5} format={formatCurrency} />
                </h2>
                <EyeSlash className="h-5 w-5 text-gray-400" />
              </div>
              <Image src={ChartMini} alt="chart" className="w-32" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <ButtonPrimary className="flex-1">Deposit Funds</ButtonPrimary>

          {/* <Button className="flex-1 !rounded-md !bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.25),transparent_70%)]"></Button> */}
          <Button
            className="flex-1 h-full !rounded-md bg-white hover:bg-white"
            variant={"secondary"}
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}
