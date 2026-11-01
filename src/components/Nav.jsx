// Top navigation bar — portfolio title + 4 tabs (Overview + 3 projects)

const TABS = [
  { id: 'home', label: 'Overview',        icon: '🏠', color: '#6b7db3' },
  { id: 'p1',   label: 'Token Analytics', icon: '📊', color: '#00e5c8' },
  { id: 'p2',   label: 'AI Agent',        icon: '🤖', color: '#5b8dee' },
  { id: 'p3',   label: 'AI Product',      icon: '🎯', color: '#f5a623' },
]

export default function Nav({ active, onNavigate }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%',
      background: 'rgba(8,14,43,0.95)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #1e2f6a',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem', gap: '1.5rem' }}>

          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span style={{
              width: '1.875rem', height: '1.875rem', borderRadius: '0.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.875rem', fontWeight: 700,
              background: 'rgba(0,229,200,0.12)', color: '#00e5c8',
            }}>✦</span>
            <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '-0.01em', color: active === 'home' ? '#e8eeff' : '#6b7db3' }}>
              AIScope
            </span>
          </button>

          {/* Tabs */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', overflowX: 'auto' }}>
            {TABS.map(tab => {
              const isActive = active === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => onNavigate(tab.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', borderRadius: '0.75rem',
                    fontSize: '0.875rem', fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
                    background:  isActive ? tab.color + '18' : 'transparent',
                    color:       isActive ? tab.color        : '#4d6391',
                    border:      isActive ? `1px solid ${tab.color}30` : '1px solid transparent',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#c8d3f0'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#4d6391'; e.currentTarget.style.background = 'transparent' } }}
                >
                  <span style={{ fontSize: '1rem', lineHeight: 1 }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                  {tab.id !== 'home' && (
                    <span style={{ fontSize: '10px', fontWeight: 700, color: isActive ? tab.color : '#2a3f80' }}>
                      {tab.id === 'p1' ? '#1' : tab.id === 'p2' ? '#2' : '#3'}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right badge — removed year */}

        </div>
      </div>
    </header>
  )
}
