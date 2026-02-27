"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Data = {
  date: string;
  adSpending: number;
  allocation: number;
};

type Props = {
  data: Data[];
  total: number;
  previousTotal: number;
  change: number;
};
type PropToolTip = {
  active?: boolean;
  payload?: any[];
  label?: string;
};

export function CustomTooltip({ active, payload, label }: PropToolTip) {
  if (!active || !payload?.length) return null;

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(v);

  const total = payload.reduce((sum, item) => sum + (item.value || 0), 0);

  return (
    <div className="rounded-xl border bg-background p-3 shadow-md">
      {/* Date */}
      <div className="mb-2 text-sm font-medium">{label}</div>

      {/* Valeurs par série */}
      <div className="space-y-1">
        {payload.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: item.color }}
              />

              <span className="capitalize">{item.name}</span>
            </div>

            <span className="font-medium">{formatCurrency(item.value)}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-2 border-t pt-2 flex justify-between text-sm font-semibold">
        <span>Total</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
export function StackedOrganizationChart({
  data,
  total,
  previousTotal,
  change,
}: Props) {
  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(v);

  const isPositive = change >= 0;

  return (
    <div className="mt-5">
      <div className="space-y-2 pb-0">
        <div className="text-sm text-muted-foreground">
          Organization spendings
        </div>

        <div className="text-3xl font-bold">{formatCurrency(total)}</div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span
            className={`font-medium px-2 py-1 bg-green-100 ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}
            {change.toFixed(0)}%
          </span>

          <span>vs. {formatCurrency(previousTotal)} last period</span>
        </div>
      </div>

      <div className="h-[360px] pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical horizontal={false} />

            <XAxis dataKey="date" tickLine={false} axisLine={false} />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="adSpending"
              stackId="a"
              //radius={[6, 6, 0, 0]}
              fill="#3b5bcc"
            />

            <Bar
              dataKey="allocation"
              stackId="a"
              //radius={[6, 6, 0, 0]}
              fill="#f59e0b"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
