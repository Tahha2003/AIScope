import StatCard from '../../components/ui/StatCard'
import useWindowWidth from '../../hooks/useWindowWidth'

export default function P3KpiRow({ data }) {
  const isMobile = useWindowWidth() < 640
  const prev  = data.prevMonth
  const delta = (curr, p) => p != null ? Math.round(((curr - p) / p) * 100) : null

  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '0.75rem' : '1.25rem' }}>
      <StatCard icon="✏️" label="Correction Rate"  value={data.outputCorrectionRate}  suffix="%"
        sub={`${(data.totalOutputs * data.outputCorrectionRate / 100).toLocaleString()} of ${data.totalOutputs.toLocaleString()} outputs`}
        delta={prev ? delta(data.outputCorrectionRate, prev.outputCorrectionRate) * -1 : null} accentColor="#f5a623" />
      <StatCard icon="👍" label="Positive Feedback" value={data.positiveFeedbackRate}  suffix="%"
        sub={`${data.positiveFeedback.toLocaleString()} of ${data.ratedOutputs.toLocaleString()} rated`}
        delta={prev ? delta(data.positiveFeedbackRate, prev.positiveFeedbackRate) : null}        accentColor="#2de28a" />
      <StatCard icon="✅" label="Task Success"       value={data.taskSuccessRate}        suffix="%"
        sub={`${(data.totalTasks * data.taskSuccessRate / 100).toLocaleString()} of ${data.totalTasks.toLocaleString()} tasks`}
        delta={prev ? delta(data.taskSuccessRate, prev.taskSuccessRate) : null}                  accentColor="#00e5c8" />
      <StatCard icon="💸" label="AI Usage Cost"      value={data.aiUsageCost}            prefix="$"
        sub={`$${data.avgCostPerOutput.toFixed(2)} per output`}
        delta={prev ? delta(data.aiUsageCost, prev.aiUsageCost) * -1 : null}                    accentColor="#5b8dee" />
    </div>
  )
}
