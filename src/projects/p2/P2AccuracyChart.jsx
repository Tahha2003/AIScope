import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, LabelList,
} from 'recharts'
import SectionHeader from '../../components/ui/SectionHeader'

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const before = payload.find(p => p.dataKey === 'before')?.value
  const after  = payload.find(p => p.dataKey === 'after')?.value
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '12px', minWidth: '200px' }}>
      <p style={{ fontWeight: 600, color: '#e8eeff', margin: '0 0 0.5rem' }}>{label}</p>
      {[{ key: 'Before context', val: before, color: '#4d6391' }, { key: 'After context', val: after, color: '#5b8dee' }].map(r => (
        <div key={r.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: r.color }} />
            <span style={{ color: '#6b7db3' }}>{r.key}</span>
          </div>
          <span style={{ fontWeight: 700, color: r.color === '#4d6391' ? '#c8d3f0' : r.color }}>{r.val}%</span>
        </div>
      ))}
      <div style={{ borderTop: '1px solid #1a2858', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
        <span style={{ color: '#6b7db3' }}>Lift: </span>
        <span style={{ fontWeight: 700, color: '#2de28a' }}>+{after - before} pts</span>
      </div>
    </div>
  )
}

export default function P2AccuracyChart({ categories }) {
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Accuracy: before vs after context" subtitle="% of questions answered correctly by category" />
      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={categories} layout="vertical" margin={{ top: 0, right: 40, left: 16, bottom: 0 }} barCategoryGap="28%">
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
            <YAxis type="category" dataKey="category" width={135} tick={{ fill: '#c8d3f0', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
            <Legend iconType="circle" iconSize={8} formatter={v => v === 'before' ? 'Before context' : 'After context'} wrapperStyle={{ fontSize: 11, color: '#6b7db3', paddingTop: 12 }} />
            <Bar dataKey="before" fill="#2a3f7a" radius={[0, 3, 3, 0]} name="before">
              <LabelList dataKey="before" position="right" style={{ fill: '#4d6391', fontSize: 11 }} formatter={v => `${v}%`} />
            </Bar>
            <Bar dataKey="after" fill="#5b8dee" radius={[0, 3, 3, 0]} name="after">
              <LabelList dataKey="after" position="right" style={{ fill: '#5b8dee', fontSize: 11 }} formatter={v => `${v}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
