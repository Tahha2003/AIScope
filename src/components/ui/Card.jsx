export default function Card({ children, style = {} }) {
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', ...style }}>
      {children}
    </div>
  )
}
