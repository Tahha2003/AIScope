import StatCard from '../../components/ui/StatCard'
import useWindowWidth from '../../hooks/useWindowWidth'

export default function P2KpiRow({ data }) {
  const isMobile = useWindowWidth() < 640
  const lift = data.overallAfter - data.overallBefore
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '0.75rem' : '1.25rem' }}>
      <StatCard icon="🎯" label="Accuracy (After)"  value={data.overallAfter}               suffix="%"    sub={`Baseline was ${data.overallBefore}%`}               accentColor="#5b8dee" />
      <StatCard icon="📈" label="Accuracy Lift"      value={`+${lift}`}                      suffix=" pts" sub="From context improvements"                           accentColor="#2de28a" />
      <StatCard icon="🔁" label="Eval Questions"     value={data.totalQuestions}                           sub="Known-answer test set"                                accentColor="#00e5c8" />
      <StatCard icon="💰" label="Cost / Query"        value={`$${data.costPerQuery.toFixed(3)}`}           sub={`Avg ${data.avgLatencyMs.toLocaleString()}ms latency`} accentColor="#f5a623" />
    </div>
  )
}
