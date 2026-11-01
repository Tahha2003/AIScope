import StatCard from '../../components/ui/StatCard'

export default function P1KpiRow({ kpis }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
      <StatCard icon="💸" label="AI Spend"      value={kpis.aiSpend.value}              delta={kpis.aiSpend.pct}    prefix="$"    accentColor="#5b8dee" />
      <StatCard icon="⏱"  label="Hours Saved"   value={kpis.hoursSaved.value}           delta={kpis.hoursSaved.pct} suffix=" hrs" accentColor="#00e5c8" />
      <StatCard icon="💎" label="Net Value"      value={Math.round(kpis.netValue.value)} delta={kpis.netValue.pct}   prefix="$"    accentColor="#2de28a" />
      <StatCard icon="📈" label="Estimated ROI"  value={kpis.roi.value}                  delta={kpis.roi.pct}        suffix="%"    accentColor="#f5a623" />
    </div>
  )
}
