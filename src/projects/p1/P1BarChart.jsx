import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, Cell,
} from 'recharts'
import { getBarChartData } from '../../data/mockData'
import SectionHeader from '../../components/ui/SectionHeader'

const TEAM_COLORS = {
  Engineering: '#00e5c8', Support: '#2de28a', Marketing: '#5b8dee',
  Sales: '#f5a623', Operations: '#e25b8d',
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '12px', minWidth: '180px' }}>
      <p style={{ fontWeight: 600, color: '#e8eeff', margin: '0 0 0.5rem' }}>{label}</p>
      {payload.map(p => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.fill }} />
            <span style={{ color: '#6b7db3' }}>{p.name === 'cost' ? 'AI Cost' : 'Est. Value'}</span>
          </div>
          <span style={{ fontWeight: 700, color: p.fill }}>${p.value.toLocaleString()}</span>
        </div>
      ))}
      {payload.length === 2 && payload[0]?.value && payload[1]?.value && (
        <div style={{ borderTop: '1px solid #1a2858', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
          <span style={{ color: '#6b7db3' }}>Multiple: </span>
          <span style={{ fontWeight: 700, color: '#00e5c8' }}>{(payload[1].value / payload[0].value).toFixed(1)}×</span>
        </div>
      )}
    </div>
  )
}

export default function P1BarChart({ month }) {
  const data = getBarChartData(month)
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Is AI creating business value?" subtitle="AI cost vs estimated value generated · per team" />
      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 24, left: 8, bottom: 0 }} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" horizontal={false} />
            <XAxis type="number" tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}K`} />
            <YAxis type="category" dataKey="team" tick={{ fill: '#c8d3f0', fontSize: 12 }} axisLine={false} tickLine={false} width={95} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
            <Legend iconType="circle" iconSize={8} formatter={v => v === 'cost' ? 'AI Cost' : 'Est. Value'} wrapperStyle={{ fontSize: 11, color: '#6b7db3', paddingTop: 12 }} />
            <Bar dataKey="cost"  fill="#5b8dee" radius={[0, 3, 3, 0]}>{data.map(d => <Cell key={d.team} fill="#5b8dee" />)}</Bar>
            <Bar dataKey="value" fill="#00e5c8" radius={[0, 3, 3, 0]}>{data.map(d => <Cell key={d.team} fill={TEAM_COLORS[d.team] ?? '#00e5c8'} />)}</Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
