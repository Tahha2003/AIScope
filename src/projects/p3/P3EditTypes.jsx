import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import SectionHeader from '../../components/ui/SectionHeader'
import { editTypes, regenReasons } from '../../data/productData'

const REGEN_COLORS = ['#5b8dee','#f5a623','#00e5c8','#ff6b6b','#2de28a']

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0]
  return (
    <div style={{ background: '#0f1a3e', border: '1px solid #1e2f6a', borderRadius: '0.625rem', padding: '0.375rem 0.75rem', fontSize: '12px' }}>
      <span style={{ fontWeight: 600, color: d.payload.color }}>{d.name}</span>
      <span style={{ fontWeight: 700, color: '#e8eeff', marginLeft: '0.5rem' }}>{d.value}%</span>
    </div>
  )
}

export default function P3EditTypes() {
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="What do users change & why do they regenerate?" subtitle="Edit type breakdown · top regeneration reasons" />

      <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

        {/* Donut */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4d6391', margin: '0 0 0.75rem' }}>
            Edit type breakdown
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ResponsiveContainer width={110} height={110}>
              <PieChart>
                <Pie data={editTypes} dataKey="pct" nameKey="type" cx="50%" cy="50%" innerRadius={32} outerRadius={52} paddingAngle={3} isAnimationActive={false}>
                  {editTypes.map(d => <Cell key={d.type} fill={d.color} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
              {editTypes.map(d => (
                <div key={d.type} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', color: '#6b7db3' }}>{d.type}</span>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: d.color }}>{d.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regen reasons */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4d6391', margin: '0 0 0.75rem' }}>
            Top regeneration reasons
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {regenReasons.map((r, i) => (
              <div key={r.reason}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '12px', color: '#6b7db3' }}>{r.reason}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#e8eeff' }}>{r.pct}%</span>
                </div>
                <div style={{ width: '100%', height: '5px', borderRadius: '999px', overflow: 'hidden', background: '#162460' }}>
                  <div style={{ width: `${r.pct}%`, height: '100%', borderRadius: '999px', background: REGEN_COLORS[i], transition: 'width 0.7s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
