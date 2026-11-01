import { HOURLY_RATE } from '../data/mockData'

// Inline bar — fills proportionally to the max value in the column
function Bar({ value, max, color = '#00e5c8' }) {
  const pct = max > 0 ? (value / max) * 100 : 0
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 rounded-full h-2" style={{ background: '#162460' }}>
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  )
}

const TEAM_COLORS = {
  Engineering: '#00e5c8',
  Support:     '#2de28a',
  Marketing:   '#5b8dee',
  Sales:       '#f5a623',
  Operations:  '#e25b8d',
}

export default function TeamTable({ rows }) {
  if (!rows.length) return null

  const maxTokens  = Math.max(...rows.map(r => r.tokens))
  const maxCost    = Math.max(...rows.map(r => r.cost))
  const maxHours   = Math.max(...rows.map(r => r.hoursSaved))

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: '#111f52', border: '1px solid #1e2f6a' }}
    >
      {/* header */}
      <div className="px-6 pt-5 pb-3">
        <h2 className="text-base font-semibold text-slate-100">Usage &amp; outcomes by team</h2>
        <p className="text-xs mt-0.5" style={{ color: '#6b7db3' }}>
          Tokens · Cost · Hours saved · Cost per ticket
        </p>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid #1e2f6a' }}>
              {['Team', 'Tokens', 'Cost', 'Hours', 'Tickets', 'Cost / ticket', 'ROI signal'].map(h => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                  style={{ color: '#6b7db3' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const color          = TEAM_COLORS[row.team] ?? '#00e5c8'
              const costPerTicket  = row.ticketsResolved > 0
                ? (row.cost / row.ticketsResolved).toFixed(2)
                : '—'
              const timeValue      = row.hoursSaved * HOURLY_RATE
              const roiSignal      = row.cost > 0
                ? Math.round(((timeValue + row.revenueImpact * 0.28) / row.cost) * 100)
                : 0

              return (
                <tr
                  key={row.team}
                  style={{
                    borderBottom: i < rows.length - 1 ? '1px solid #1a2858' : 'none',
                  }}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  {/* team name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: color }}
                      />
                      <span className="font-medium text-slate-200">{row.team}</span>
                    </div>
                  </td>

                  {/* tokens with bar */}
                  <td className="px-6 py-4 min-w-[140px]">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-slate-300">
                        {(row.tokens / 1_000_000).toFixed(0)}M
                      </span>
                      <Bar value={row.tokens} max={maxTokens} color={color} />
                    </div>
                  </td>

                  {/* cost with bar */}
                  <td className="px-6 py-4 min-w-[130px]">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-slate-300">${row.cost.toLocaleString()}</span>
                      <Bar value={row.cost} max={maxCost} color={color} />
                    </div>
                  </td>

                  {/* hours with bar */}
                  <td className="px-6 py-4 min-w-[120px]">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-slate-300">{row.hoursSaved}</span>
                      <Bar value={row.hoursSaved} max={maxHours} color={color} />
                    </div>
                  </td>

                  {/* tickets resolved */}
                  <td className="px-6 py-4">
                    <span className="text-slate-300">{row.ticketsResolved}</span>
                  </td>

                  {/* cost per ticket — the core ROI metric */}
                  <td className="px-6 py-4">
                    <span
                      className="font-semibold text-sm px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(0,229,200,0.1)', color: '#00e5c8' }}
                    >
                      ${costPerTicket}
                    </span>
                  </td>

                  {/* ROI signal */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-xs font-bold"
                        style={{ color: roiSignal >= 200 ? '#2de28a' : roiSignal >= 100 ? '#f5a623' : '#ff6b6b' }}
                      >
                        {roiSignal}%
                      </span>
                      <span className="text-xs" style={{ color: '#6b7db3' }}>return</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* legend note */}
      <div className="px-6 py-3 text-xs" style={{ color: '#6b7db3', borderTop: '1px solid #1e2f6a' }}>
        Cost per ticket = AI spend ÷ tickets resolved &nbsp;·&nbsp; ROI signal = (time value + incremental profit) ÷ AI spend
      </div>
    </div>
  )
}
