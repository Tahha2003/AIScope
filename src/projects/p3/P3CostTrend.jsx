import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
} from 'recharts'
import SectionHeader from '../../components/ui/SectionHeader'
import { costTrend } from '../../data/productData'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.625rem', padding: '0.625rem 0.875rem', fontSize: '12px' }}>
      <p style={{ fontWeight: 600, color: '#e8eeff', margin: '0 0 0.25rem' }}>{label}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <span style={{ color: '#6b7db3' }}>Cost per output</span>
        <span style={{ fontWeight: 700, color: '#f5a623' }}>${payload[0].value.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default function P3CostTrend() {
  const latest    = costTrend[costTrend.length - 1].costPerOutput
  const earliest  = costTrend[0].costPerOutput
  const reduction = Math.round(((earliest - latest) / earliest) * 100)

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader
        title="Cost per output over time"
        subtitle="Efficiency trend as prompt & model tuning improves"
        action={
          <span style={{
            fontSize: '12px', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: '999px',
            background: 'rgba(45,226,138,0.16)', color: '#2de28a',
          }}>
            ↓ {reduction}% reduction
          </span>
        }
      />
      <div style={{ padding: '1.25rem 1.25rem 1rem' }}>
        <ResponsiveContainer width="100%" height={190}>
          <LineChart data={costTrend} margin={{ top: 8, right: 56, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false}
              tickFormatter={v => `$${v.toFixed(2)}`} domain={[0, 0.65]} width={44}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={0.30} stroke="#5b8dee" strokeDasharray="4 4" strokeOpacity={0.5}
              label={{ value: 'Target', position: 'right', fill: '#5b8dee', fontSize: 11 }}
            />
            <Line
              type="monotone" dataKey="costPerOutput" stroke="#f5a623" strokeWidth={2.5}
              dot={{ fill: '#f5a623', r: 5, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#f5a623', strokeWidth: 0 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
