export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem',
      padding: '1.125rem 1.5rem', borderBottom: '1px solid #1a2858',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8eeff', margin: 0, letterSpacing: '0.01em' }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: '12px', color: '#6b7db3', margin: 0, lineHeight: 1.5 }}>{subtitle}</p>
        )}
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  )
}
