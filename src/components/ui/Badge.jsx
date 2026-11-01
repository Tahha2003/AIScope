export default function Badge({ children, color = '#00e5c8' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '0.15rem 0.625rem',
      borderRadius: '999px', fontSize: '12px', fontWeight: 600,
      background: color + '20', color,
    }}>
      {children}
    </span>
  )
}
