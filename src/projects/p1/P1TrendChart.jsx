import {
  ResponsiveContainer, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import { teamData, MONTHS } from '../../data/mockData'
import SectionHeader from '../../components/ui/SectionHeader'

const TEAM_COLORS = {
  Engineering: '#00e5c8', Support: '#2de28a', Marketing: '#5b8dee',
  Sales: '#f5a623', Operations: '#e25b8d',
}
const TEAMS_LIST = ['Engineering', 'Support', 'Marketing', 'Sales', 'Operations']

function buildChartData() {
  return [...MONTHS].reverse().map(month => {
    const label = month.split(' ')[0].slice(0, 3) + ' \'' + month.split(' ')[1].slice(2)
    const point = { month: label }
    const rows  = teamData[month] ?? []
    TEAMS_LIST.forEach(t => {
      const r  = rows.find(x => x.team === t)
      point[t] = r ? Math.round(r.tokens / 1_000_000) : 0
    })
    return point
  })
}

const chartData = buildChartData()

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '12px', minWidth: '160px' }}>
      <p style={{ fontWeight: 600, color: '#e8eeff', margin: '0 0 0.5rem' }}>{label}</p>
      {payload.map(p => (
        <div key={p.dataKey} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color }} />
            <span style={{ color: '#6b7db3' }}>{p.dataKey}</span>
          </div>
          <span style={{ fontWeight: 600, color: p.color }}>{p.value}M</span>
        </div>
      ))}
    </div>
  )
}

export default function P1TrendChart() {
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Token usage over time" subtitle="Millions of tokens · all teams" />
      <div style={{ padding: '1rem 1.25rem 1.25rem' }}>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
            <defs>
              {TEAMS_LIST.map(t => (
                <linearGradient key={t} id={`tg-${t}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={TEAM_COLORS[t]} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={TEAM_COLORS[t]} stopOpacity={0}   />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7db3', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${v}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle" iconSize={8}
              wrapperStyle={{ fontSize: 11, color: '#6b7db3', paddingTop: '12px', paddingBottom: '4px' }}
            />
            {TEAMS_LIST.map(t => (
              <Area key={t} type="monotone" dataKey={t} stroke={TEAM_COLORS[t]} strokeWidth={2}
                fill={`url(#tg-${t})`} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
