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
  allocation?: number;
};

type Props = {
  data: any[];
  total: number;
  change: number;
  previousTotal: number;
};

export function OrganizationSpendingChart({
  data,
  total,
  change,
  previousTotal,
}: Props) {
  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(v);

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="space-y-2 pb-0">
        <div className="text-sm text-muted-foreground">
          Organization spendings
        </div>

        <div className="text-3xl font-bold">{formatCurrency(total)}</div>

        <div className="text-sm text-muted-foreground flex gap-2">
          <span
            className={`font-medium ${
              change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change >= 0 ? "+" : ""}
            {change.toFixed(0)}%
          </span>

          <span>vs. {formatCurrency(previousTotal)} last period</span>
        </div>
      </CardHeader>

      <CardContent className="h-[360px] pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical horizontal={false} />

            <XAxis dataKey="date" tickLine={false} axisLine={false} />

            <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} />

            {/* Bleu — Ad spending */}
            <Bar
              dataKey="adSpending"
              stackId="a"
              radius={[4, 4, 0, 0]}
              fill="#3b5bcc"
            />

            {/* Orange — Allocation / autre */}
            <Bar
              dataKey="allocation"
              stackId="a"
              radius={[4, 4, 0, 0]}
              fill="#f5a623"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
