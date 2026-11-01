import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
} from 'recharts'
import SectionHeader from '../../components/ui/SectionHeader'
import { iterationLog } from '../../data/agentData'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const d     = payload[0]
  const entry = iterationLog.find(i => i.iteration === Number(label))
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '12px', maxWidth: '220px' }}>
      <p style={{ fontWeight: 600, color: '#e8eeff', margin: '0 0 0.25rem' }}>Iteration {label}</p>
      {entry?.change && <p style={{ color: '#6b7db3', margin: '0 0 0.5rem', lineHeight: 1.4 }}>{entry.change}</p>}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <span style={{ color: '#6b7db3' }}>Accuracy</span>
        <span style={{ fontWeight: 700, color: '#5b8dee' }}>{d.value}%</span>
      </div>
      {entry?.delta && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '0.25rem' }}>
          <span style={{ color: '#6b7db3' }}>Delta</span>
          <span style={{ fontWeight: 700, color: '#2de28a' }}>+{entry.delta} pts</span>
        </div>
      )}
    </div>
  )
}

export default function P2IterationChart() {
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Prompt engineering iterations" subtitle="Accuracy improvement with each context layer added" />
      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={iterationLog} margin={{ top: 8, right: 48, left: -12, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" vertical={false} />
            <XAxis dataKey="iteration" tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `Iter ${v}`} />
            <YAxis domain={[20, 100]} tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={80} stroke="#2de28a" strokeDasharray="4 4" strokeOpacity={0.5}
              label={{ value: 'Target 80%', position: 'right', fill: '#2de28a', fontSize: 11 }} />
            <Line type="monotone" dataKey="accuracy" stroke="#5b8dee" strokeWidth={2.5}
              dot={{ fill: '#5b8dee', r: 5, strokeWidth: 0 }} activeDot={{ r: 6, fill: '#5b8dee', strokeWidth: 0 }}
              isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>

        {/* iteration log list */}
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {iterationLog.map(iter => (
            <div key={iter.iteration} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '12px' }}>
              <span style={{
                width: '1.5rem', height: '1.5rem', borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 700,
                background: '#162460', color: '#5b8dee',
              }}>{iter.iteration}</span>
              <span style={{ flex: 1, color: '#6b7db3' }}>{iter.change}</span>
              <span style={{ fontWeight: 700, color: '#e8eeff' }}>{iter.accuracy}%</span>
              {iter.delta && <span style={{ fontWeight: 600, color: '#2de28a' }}>+{iter.delta}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
