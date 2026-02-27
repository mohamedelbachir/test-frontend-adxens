"use client";
import { Button } from "@/components/ui/button";
import { BalanceCard } from "@/components/balancecard";
import { MetricCard } from "@/components/stat-card";
import { StackedOrganizationChart } from "@/components/organization-spending-chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";

import data from "@/data/datas.json";
import { computeMetrics } from "@/utils";
import {
  CardCoin,
  MoneySend,
  Receipt2,
  MoneyRecive,
  Message2,
} from "iconsax-reactjs";
import ButtonPrimary from "@/components/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function DashbordContent() {
  const metrics = computeMetrics(data);

  return (
    <main className="flex-1 relative container mx-auto overflow-y-auto bg-white p-4 pt-4 ">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <Button
          className={"fixed bottom-10 z-30 right-5 p-4 shadow bg-black hover:scale-110 transition-transform"}
          size={"icon-lg"}
        >
          <Message2 className="size-6 " variant="Bold" />
        </Button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <div className="w-full flex flex-col sm:flex-row item-center justify-between">
          <motion.div variants={itemVariants}>
            <h1 className="block sm:hidden sm:text-2xl font-semibold text-gray-900">
              Organization Balance
            </h1>
            <p className="text-sm text-gray-500">
              Manage your organization funds here.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ButtonPrimary className="hidden sm:block">
              Allocate Funds
            </ButtonPrimary>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="my-3 flex items-center justify-between"
        >
          <Tabs defaultValue="overview">
            <TabsList
              variant="line"
              className="h-auto rounded-none border-border border-b"
            >
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Transactions
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Team wallets
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <ToggleGroup
            variant="outline"
            defaultValue={["all"]}
            className={"hidden sm:block !rounded-md shadow shadow-xs"}
          >
            <ToggleGroupItem
              value="all"
              aria-label="Toggle all"
              className={"text-primary !rounded-tl-md !rounded-bl-md"}
            >
              30D
            </ToggleGroupItem>
            <ToggleGroupItem value="missed" aria-label="15D" disabled>
              15D
            </ToggleGroupItem>
            <ToggleGroupItem
              value="missed"
              aria-label="7D"
              disabled
              className={"!rounded-tr-md !rounded-br-md"}
            >
              7D
            </ToggleGroupItem>
          </ToggleGroup>
        </motion.div>

        <div className="grid grid-cols-12 gap-3">
          <motion.div
            variants={itemVariants}
            className="col-span-12 h-full lg:col-span-5"
          >
            <BalanceCard />
          </motion.div>
          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-7">
            <MetricCard
              title="Total spent"
              amount={metrics.totalSpent}
              period="Last 30 days"
              index={1}
              icon={<Receipt2 size="32" className="text-gray-500" />}
            />
            <MetricCard
              title="Total allocated"
              amount={metrics.totalAllocated}
              period="Last 30 days"
              index={2}
              icon={
                <CardCoin
                  size="32"
                  className="text-gray-500"
                  variant="TwoTone"
                />
              }
            />
            <MetricCard
              title="Pending deposit"
              amount={metrics.pendingDeposit}
              period="Last 30 days"
              index={3}
              icon={
                <MoneySend
                  size="32"
                  className="text-gray-500"
                  variant="TwoTone"
                />
              }
            />
            <MetricCard
              title="Pending withdrawal"
              amount={metrics.pendingWithdrawal}
              period="Last 30 days"
              index={4}
              icon={
                <MoneyRecive
                  size="32"
                  className="text-gray-500"
                  variant="TwoTone"
                />
              }
            />
          </div>
          <motion.div variants={itemVariants} className="col-span-12">
            <StackedOrganizationChart
              data={metrics.stackedChart}
              total={29342}
              change={91}
              previousTotal={20100.78}
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default DashbordContent;

//export default DashbordContent;
