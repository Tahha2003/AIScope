import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { teamData, MONTHS } from '../data/mockData'

const TEAM_COLORS = {
  Engineering: '#00e5c8',
  Support:     '#2de28a',
  Marketing:   '#5b8dee',
  Sales:       '#f5a623',
  Operations:  '#e25b8d',
}

const TEAMS_LIST = ['Engineering', 'Support', 'Marketing', 'Sales', 'Operations']

// Build chart data: one point per month, keys = team names (tokens in M)
function buildChartData() {
  // Show months oldest → newest on x-axis
  const ordered = [...MONTHS].reverse()
  return ordered.map(month => {
    const point = { month: month.split(' ')[0].slice(0, 3) + ' ' + month.split(' ')[1].slice(2) }
    const rows = teamData[month] ?? []
    TEAMS_LIST.forEach(team => {
      const row = rows.find(r => r.team === team)
      point[team] = row ? Math.round(row.tokens / 1_000_000) : 0
    })
    return point
  })
}

const chartData = buildChartData()

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div
      className="rounded-xl px-4 py-3 text-xs shadow-xl"
      style={{ background: '#0d1b45', border: '1px solid #1e2f6a', minWidth: 160 }}
    >
      <p className="font-semibold text-slate-300 mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.dataKey} className="flex items-center justify-between gap-4 mb-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span style={{ color: '#6b7db3' }}>{p.dataKey}</span>
          </div>
          <span className="font-semibold" style={{ color: p.color }}>{p.value}M</span>
        </div>
      ))}
    </div>
  )
}

export default function TrendChart() {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: '#111f52', border: '1px solid #1e2f6a' }}
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-100">Token usage over time</h2>
        <p className="text-xs mt-0.5" style={{ color: '#6b7db3' }}>Millions of tokens · all teams</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <defs>
            {TEAMS_LIST.map(team => (
              <linearGradient key={team} id={`grad-${team}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor={TEAM_COLORS[team]} stopOpacity={0.25} />
                <stop offset="95%" stopColor={TEAM_COLORS[team]} stopOpacity={0}    />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2858" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#6b7db3', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6b7db3', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `${v}M`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 11, color: '#6b7db3', paddingTop: 12 }}
          />
          {TEAMS_LIST.map(team => (
            <Area
              key={team}
              type="monotone"
              dataKey={team}
              stroke={TEAM_COLORS[team]}
              strokeWidth={2}
              fill={`url(#grad-${team})`}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
