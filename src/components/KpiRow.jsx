import KpiCard from './KpiCard'

export default function KpiRow({ kpis }) {
  const { aiSpend, hoursSaved, netValue, roi } = kpis

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard
        icon="💸"
        label="AI Spend"
        value={aiSpend.value}
        delta={aiSpend.pct}
        prefix="$"
      />
      <KpiCard
        icon="⏱"
        label="Hours Saved"
        value={hoursSaved.value}
        delta={hoursSaved.pct}
        suffix=" hrs"
      />
      <KpiCard
        icon="💎"
        label="Net Value"
        value={Math.round(netValue.value)}
        delta={netValue.pct}
        prefix="$"
      />
      <KpiCard
        icon="📈"
        label="Estimated ROI"
        value={roi.value}
        delta={roi.pct}
        suffix="%"
        highlight
      />
    </div>
  )
}
