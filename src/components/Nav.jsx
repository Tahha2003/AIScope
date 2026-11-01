import useWindowWidth from '../hooks/useWindowWidth'

const TABS = [
  { id: 'home', label: 'Overview',        icon: '🏠', color: '#6b7db3' },
  { id: 'p1',   label: 'Token Analytics', icon: '📊', color: '#00e5c8' },
  { id: 'p2',   label: 'AI Agent',        icon: '🤖', color: '#5b8dee' },
  { id: 'p3',   label: 'AI Product',      icon: '🎯', color: '#f5a623' },
]

export default function Nav({ active, onNavigate }) {
  const w = useWindowWidth()
  const isMobile = w < 640

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%',
      background: 'rgba(8,14,43,0.97)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #1e2f6a',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: isMobile ? '0 0.75rem' : '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isMobile ? '3.25rem' : '4rem', gap: '0.75rem' }}>

          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{
              width: '1.75rem', height: '1.75rem', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.8125rem', fontWeight: 700,
              background: 'rgba(0,229,200,0.12)', color: '#00e5c8',
            }}>✦</span>
            {!isMobile && (
              <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '-0.01em', color: active === 'home' ? '#e8eeff' : '#6b7db3' }}>
                AIScope
              </span>
            )}
          </button>

          {/* Tabs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.125rem' : '0.25rem' }}>
            {TABS.map(tab => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.375rem',
                    padding: isMobile ? '0.5rem 0.625rem' : '0.5rem 1rem',
                    borderRadius: '0.75rem',
                    fontSize: isMobile ? '0.8125rem' : '0.875rem',
                    fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
                    background:  isActive ? tab.color + '18' : 'transparent',
                    color:       isActive ? tab.color        : '#4d6391',
                    border:      isActive ? `1px solid ${tab.color}30` : '1px solid transparent',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#c8d3f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#4d6391'; e.currentTarget.style.background = 'transparent' } }}
                >
                  <span style={{ fontSize: isMobile ? '1.125rem' : '1rem', lineHeight: 1 }}>{tab.icon}</span>
                  {!isMobile && <span>{tab.label}</span>}
                  {!isMobile && tab.id !== 'home' && (
                    <span style={{ fontSize: '10px', fontWeight: 700, color: isActive ? tab.color : '#2a3f80' }}>
                      {tab.id === 'p1' ? '#1' : tab.id === 'p2' ? '#2' : '#3'}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right spacer / wordmark on mobile */}
          {isMobile ? (
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2a3f80', flexShrink: 0 }}>AIScope</span>
          ) : (
            <div style={{ width: '3rem', flexShrink: 0 }} />
          )}

        </div>
      </div>
    </header>
  )
}
