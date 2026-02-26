type Tx = {
  date: string
  amount: number
  category: string
  status: string
}

const inRange = (d: string, start: Date, end: Date) => {
  const x = new Date(d)
  return x >= start && x <= end
}

export function computeMetrics(data: any) {
  const txs: Tx[] = data.transactions

  const start = new Date(data.periods.current.start)
  const end = new Date(data.periods.current.end)

  const last30 = txs.filter(t => inRange(t.date, start, end))

  const sum = (arr: Tx[]) =>
    arr.reduce((s, t) => s + t.amount, 0)

  const adCompleted = last30.filter(
    t => t.category === "ad_spending" && t.status === "completed"
  )

  const depositPending = last30.filter(
    t => t.category === "deposit" && t.status === "pending"
  )

  const allocationCompleted = last30.filter(
    t => t.category === "allocation" && t.status === "completed"
  )

  const withdrawalPending = last30.filter(
    t => t.category === "withdrawal" && t.status === "pending"
  )

  const prevStart = new Date(data.periods.previous.start)
  const prevEnd = new Date(data.periods.previous.end)

  const prevAd = txs.filter(
    t =>
      inRange(t.date, prevStart, prevEnd) &&
      t.category === "ad_spending" &&
      t.status === "completed"
  )

  const currentTotal = sum(adCompleted)
  const prevTotal = sum(prevAd)

  const change =
    prevTotal === 0
      ? 0
      : ((currentTotal - prevTotal) / prevTotal) * 100

  const chart = Object.values(
    adCompleted.reduce((acc: any, t) => {
      const d = new Date(t.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })

      acc[d] = acc[d] || { date: d, amount: 0 }
      acc[d].amount += t.amount

      return acc
    }, {})
  )

  const balance = data.accounts.find(
    (a: any) => a.id === "wallet_001"
  )?.balance

  return {
    totalSpent: currentTotal,
    pendingDeposit: sum(depositPending),
    totalAllocated: sum(allocationCompleted),
    pendingWithdrawal: sum(withdrawalPending),
    currentAdSpending: currentTotal,
    previousAdSpending: prevTotal,
    changePercent: change,
    chartData: chart,
    balance
  }
}