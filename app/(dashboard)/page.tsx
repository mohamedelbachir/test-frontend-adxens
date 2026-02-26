import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Wallet, EyeOff, HelpCircle, Bell, ChevronDown,Receipt,ArrowDownLeft,CreditCard,ArrowUpRight } from "lucide-react";
import { BalanceCard } from "@/components/balancecard";
import {MetricCard} from "@/components/stat-card";
import {SpendingChart} from "@/components/spending-card";
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 items-center justify-between border-b px-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Organization Balance
            </h1>
            <p className="text-sm text-gray-500">
              Manage your organization funds here.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-1.5">
              <Wallet className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">$0,00</span>
              <EyeOff className="h-4 w-4 text-gray-400" />
            </div>

            <Button variant="outline" className="gap-2 text-gray-600">
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>

            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <Bell className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 pl-2">
              <img
                src="https://picsum.photos/seed/simon/32/32"
                alt="Simon Alt"
                className="h-8 w-8 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-medium text-gray-900">
                Simon Alt
              </span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-white p-8">
          
          {/* Top Actions Row */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex gap-8 border-b border-gray-100 pb-px">
              <button className="border-b-2 border-gray-900 pb-4 text-sm font-medium text-gray-900">
                Overview
              </button>
              <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-900">
                Transactions
              </button>
              <button className="pb-4 text-sm font-medium text-gray-500 hover:text-gray-900">
                Team wallets
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                <button className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  30D
                </button>
                <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50">
                  15D
                </button>
                <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-50">
                  7D
                </button>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Allocate Funds
              </Button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left Column: Balance Card */}
            <div className="col-span-12 lg:col-span-5">
              <BalanceCard />
            </div>

            {/* Right Column: Metric Cards Grid */}
            <div className="col-span-12 grid grid-cols-2 gap-6 lg:col-span-7">
              <MetricCard
                title="Total spent"
                amount="$29,342"
                period="Last 30 days"
                icon={Receipt}
              />
              <MetricCard
                title="Total allocated"
                amount="$10,342.50"
                period="Last 30 days"
                icon={CreditCard}
              />
              <MetricCard
                title="Pending deposit"
                amount="$5,000"
                period="Last 30 days"
                icon={ArrowDownLeft}
              />
              <MetricCard
                title="Pending withdrawal"
                amount="$3,200"
                period="Last 30 days"
                icon={ArrowUpRight}
              />
            </div>

            {/* Bottom Row: Chart */}
            <div className="col-span-12">
              <SpendingChart />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
