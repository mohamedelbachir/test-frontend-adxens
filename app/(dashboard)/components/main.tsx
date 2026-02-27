import { Button } from "@/components/ui/button";
import { BalanceCard } from "@/components/balancecard";
import { MetricCard } from "@/components/stat-card";
import { StackedOrganizationChart } from "@/components/organization-spending-chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import data from "@/data/datas.json";
import { computeMetrics } from "@/utils";
import { CardCoin, MoneySend, Receipt2, MoneyRecive } from "iconsax-reactjs";
function DashbordContent() {
  const metrics = computeMetrics(data);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  return (
    <main className="flex-1 container mx-auto overflow-y-auto bg-white p-4 pt-4 ">
      <div className="w-full flex flex-col sm:flex-row item-center justify-between">
        <h1 className="block sm:hidden sm:text-2xl font-semibold text-gray-900">
          Organization Balance
        </h1>
        <p className="text-sm text-gray-500">
          Manage your organization funds here.
        </p>
        <Button className="hidden sm:block !rounded-md">Allocate Funds</Button>
      </div>
      <div className="my-3 flex items-center justify-between">
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
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 h-full lg:col-span-5">
          <BalanceCard />
        </div>
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:col-span-7">
          <MetricCard
            title="Total spent"
            amount={formatCurrency(metrics.totalSpent)}
            period="Last 30 days"
            icon={<Receipt2 size="32" className="text-gray-500" />}
          />
          <MetricCard
            title="Total allocated"
            amount={formatCurrency(metrics.totalAllocated)}
            period="Last 30 days"
            icon={<CardCoin size="32" color="#FF8A65" variant="TwoTone" />}
          />
          <MetricCard
            title="Pending deposit"
            amount={formatCurrency(metrics.pendingDeposit)}
            period="Last 30 days"
            icon={<MoneySend size="32" color="#FF8A65" variant="TwoTone" />}
          />
          <MetricCard
            title="Pending withdrawal"
            amount={formatCurrency(metrics.pendingWithdrawal)}
            period="Last 30 days"
            icon={<MoneyRecive size="32" color="#FF8A65" variant="TwoTone" />}
          />
        </div>
        <div className="col-span-12">
          <StackedOrganizationChart
            data={metrics.stackedChart}
            total={29342}
            change={91}
            previousTotal={20100.78}
          />
        </div>
      </div>
    </main>
  );
}

export default DashbordContent;
