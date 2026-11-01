// KpiCard — single metric tile with delta badge
export default function KpiCard({ icon, label, value, delta, prefix = '', suffix = '', highlight = false }) {
  const isPositive = delta > 0
  const isNeutral  = delta === null || delta === undefined

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3"
      style={{ background: '#111f52', border: '1px solid #1e2f6a' }}
    >
      {/* icon + label */}
      <div className="flex items-center gap-2">
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
          style={{ background: '#162460' }}
        >
          {icon}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#6b7db3' }}>
          {label}
        </span>
      </div>

      {/* value */}
      <div
        className="text-3xl font-bold leading-none"
        style={{ color: highlight ? '#00e5c8' : '#e2e8f0' }}
      >
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>

      {/* delta badge */}
      {!isNeutral && (
        <div className="flex items-center gap-1.5">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: isPositive ? 'rgba(45,226,138,0.15)' : 'rgba(255,90,90,0.15)',
              color:      isPositive ? '#2de28a' : '#ff6b6b',
            }}
          >
            {isPositive ? '▲' : '▼'} {Math.abs(delta)}%
          </span>
          <span className="text-xs" style={{ color: '#6b7db3' }}>vs last month</span>
        </div>
      )}
    </div>
  )
}
