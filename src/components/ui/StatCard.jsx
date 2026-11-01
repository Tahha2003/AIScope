// StatCard — reusable KPI tile used across all 3 projects
export default function StatCard({ icon, label, value, sub, delta, accentColor = '#00e5c8', prefix = '', suffix = '' }) {
  const isPositive = delta > 0
  const showDelta  = delta !== null && delta !== undefined

  return (
    <div style={{
      background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem',
      padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.625rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '7rem', height: '7rem', borderRadius: '50%',
        background: accentColor, opacity: 0.05, filter: 'blur(36px)',
        transform: 'translate(30%,-30%)', pointerEvents: 'none',
      }} />

      {/* icon + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span style={{
          width: '2rem', height: '2rem', borderRadius: '0.5rem', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem',
          background: accentColor + '22',
        }}>{icon}</span>
        <span style={{
          fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.07em', color: '#6b7db3', lineHeight: 1.3,
        }}>{label}</span>
      </div>

      {/* big value */}
      <div style={{
        fontSize: '1.875rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em', color: '#e8eeff',
      }}>
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>

      {/* sub-label */}
      {sub && (
        <p style={{ fontSize: '12px', color: '#6b7db3', lineHeight: 1.4, margin: 0 }}>{sub}</p>
      )}

      {/* delta */}
      {showDelta && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px',
            background: isPositive ? 'rgba(45,226,138,0.16)' : 'rgba(255,107,107,0.16)',
            color:      isPositive ? '#2de28a'               : '#ff6b6b',
          }}>
            {isPositive ? '▲' : '▼'} {Math.abs(delta)}%
          </span>
          <span style={{ fontSize: '11px', color: '#4d6391' }}>vs last month</span>
        </div>
      )}
    </div>
  )
}
