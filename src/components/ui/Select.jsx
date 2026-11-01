export default function Select({ value, onChange, options, icon }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      {icon && (
        <span style={{
          position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)',
          fontSize: '0.875rem', pointerEvents: 'none', userSelect: 'none', zIndex: 1,
        }}>
          {icon}
        </span>
      )}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          paddingTop: '0.5rem', paddingBottom: '0.5rem',
          paddingLeft: icon ? '2.25rem' : '0.875rem', paddingRight: '2rem',
          borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 600,
          outline: 'none', cursor: 'pointer',
          background: '#162460', border: '1px solid #2a3f80', color: '#e8eeff',
          minWidth: '140px', transition: 'border-color 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#3d5ab0'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#2a3f80'}
      >
        {options.map(o => (
          <option key={o} value={o} style={{ background: '#0f1a3e', color: '#e8eeff' }}>{o}</option>
        ))}
      </select>
      <span style={{
        position: 'absolute', right: '0.625rem', top: '50%', transform: 'translateY(-50%)',
        pointerEvents: 'none', fontSize: '11px', color: '#6b7db3',
      }}>▾</span>
    </div>
  )
}
