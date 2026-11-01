import { useState } from 'react'
import Nav       from './components/Nav'
import Landing   from './pages/Landing'
import Project1  from './projects/p1/Project1'
import Project2  from './projects/p2/Project2'
import Project3  from './projects/p3/Project3'
import useWindowWidth from './hooks/useWindowWidth'

const PAGE_LABELS = {
  p1: { number: 'Project #1', title: 'Token Analytics',        color: '#00e5c8' },
  p2: { number: 'Project #2', title: 'Data Analyst AI Agent',  color: '#5b8dee' },
  p3: { number: 'Project #3', title: 'AI Product Analysis',    color: '#f5a623' },
}

export default function App() {
  const [page, setPage] = useState('home')
  const w = useWindowWidth()
  const isMobile = w < 640

  function navigate(id) {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const meta = PAGE_LABELS[page]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#080e2b' }}>
      <Nav active={page} onNavigate={navigate} />

      {/* Breadcrumb */}
      {meta && (
        <div style={{ background: '#0f1a3e', borderBottom: '1px solid #1a2858' }}>
          <div style={{
            maxWidth: '80rem', margin: '0 auto',
            padding: isMobile ? '0.5rem 1rem' : '0.625rem 2rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '12px',
          }}>
            <button
              onClick={() => navigate('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#4d6391', padding: 0, fontSize: '12px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c8d3f0'}
              onMouseLeave={e => e.currentTarget.style.color = '#4d6391'}
            >Overview</button>
            <span style={{ color: '#2a3f80' }}>›</span>
            <span style={{ color: meta.color, fontWeight: 600 }}>{meta.number}</span>
            {!isMobile && <><span style={{ color: '#2a3f80' }}>·</span><span style={{ color: '#6b7db3' }}>{meta.title}</span></>}
          </div>
        </div>
      )}

      {/* Main */}
      <main style={{ flex: 1, padding: isMobile ? '1.25rem 0.875rem 2.5rem' : '2.5rem 2rem 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          {page === 'home' && <Landing onNavigate={navigate} />}
          {page === 'p1'   && <Project1 />}
          {page === 'p2'   && <Project2 />}
          {page === 'p3'   && <Project3 />}
        </div>
      </main>
    </div>
  )
}
