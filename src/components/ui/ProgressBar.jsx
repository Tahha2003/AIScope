export default function ProgressBar({ value, max, color = '#00e5c8', height = 6, showLabel = false }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
      <div style={{ flex: 1, borderRadius: '999px', overflow: 'hidden', height, background: '#162460' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: '999px', background: color, transition: 'width 0.5s ease' }} />
      </div>
      {showLabel && (
        <span style={{ fontSize: '12px', fontWeight: 600, width: '2.5rem', textAlign: 'right', flexShrink: 0, color }}>
          {Math.round(pct)}%
        </span>
      )}
    </div>
  )
}
