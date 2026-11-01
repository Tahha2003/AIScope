import { HOURLY_RATE } from '../../data/mockData'
import ProgressBar from '../../components/ui/ProgressBar'
import SectionHeader from '../../components/ui/SectionHeader'

const TEAM_COLORS = {
  Engineering: '#00e5c8', Support: '#2de28a', Marketing: '#5b8dee',
  Sales: '#f5a623', Operations: '#e25b8d',
}

const TH = { padding: '0.625rem 1.25rem', textAlign: 'left', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4d6391' }
const TD = { padding: '0.875rem 1.25rem', fontSize: '0.875rem', verticalAlign: 'middle' }

export default function P1TeamTable({ rows }) {
  if (!rows.length) return null
  const maxTokens = Math.max(...rows.map(r => r.tokens))
  const maxCost   = Math.max(...rows.map(r => r.cost))
  const maxHours  = Math.max(...rows.map(r => r.hoursSaved))

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Usage & outcomes by team" subtitle="Tokens · Cost · Hours saved · Cost per ticket resolved" />
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1a2858' }}>
              {['Team','Tokens','Cost','Hours','Tickets','Cost / ticket','ROI signal'].map(h => (
                <th key={h} style={TH}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const color         = TEAM_COLORS[row.team] ?? '#00e5c8'
              const costPerTicket = row.ticketsResolved > 0 ? (row.cost / row.ticketsResolved).toFixed(2) : '—'
              const timeValue     = row.hoursSaved * HOURLY_RATE
              const roiSignal     = row.cost > 0 ? Math.round(((timeValue + row.revenueImpact * 0.28) / row.cost) * 100) : 0
              return (
                <tr key={row.team}
                  style={{ borderBottom: i < rows.length - 1 ? '1px solid #1a2858' : 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <td style={TD}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                      <span style={{ fontWeight: 600, color: '#e8eeff' }}>{row.team}</span>
                    </div>
                  </td>
                  <td style={{ ...TD, minWidth: '140px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      <span style={{ color: '#c8d3f0' }}>{(row.tokens / 1_000_000).toFixed(0)}M</span>
                      <ProgressBar value={row.tokens} max={maxTokens} color={color} height={5} />
                    </div>
                  </td>
                  <td style={{ ...TD, minWidth: '130px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      <span style={{ color: '#c8d3f0' }}>${row.cost.toLocaleString()}</span>
                      <ProgressBar value={row.cost} max={maxCost} color={color} height={5} />
                    </div>
                  </td>
                  <td style={{ ...TD, minWidth: '120px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                      <span style={{ color: '#c8d3f0' }}>{row.hoursSaved}</span>
                      <ProgressBar value={row.hoursSaved} max={maxHours} color={color} height={5} />
                    </div>
                  </td>
                  <td style={TD}><span style={{ color: '#c8d3f0' }}>{row.ticketsResolved}</span></td>
                  <td style={TD}>
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', padding: '0.2rem 0.625rem', borderRadius: '0.5rem', background: 'rgba(0,229,200,0.1)', color: '#00e5c8' }}>
                      ${costPerTicket}
                    </span>
                  </td>
                  <td style={TD}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: roiSignal >= 200 ? '#2de28a' : roiSignal >= 100 ? '#f5a623' : '#ff6b6b' }}>
                        {roiSignal}%
                      </span>
                      <span style={{ fontSize: '12px', color: '#4d6391' }}>return</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div style={{ padding: '0.625rem 1.5rem', fontSize: '11px', color: '#4d6391', borderTop: '1px solid #1a2858' }}>
        Cost per ticket = AI spend ÷ tickets resolved · ROI signal = (time value + incremental profit) ÷ AI spend
      </div>
    </div>
  )
}
