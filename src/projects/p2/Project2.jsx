import { useState } from 'react'
import { AGENT_MONTHS, evalData } from '../../data/agentData'
import useWindowWidth   from '../../hooks/useWindowWidth'
import Select           from '../../components/ui/Select'
import P2KpiRow         from './P2KpiRow'
import P2AccuracyChart  from './P2AccuracyChart'
import P2IterationChart from './P2IterationChart'
import P2ContextLayers  from './P2ContextLayers'
import P2ToolBindings   from './P2ToolBindings'

const SKILLS = [
  { label: 'System Prompt Engineering',   icon: '⚙️', color: '#5b8dee' },
  { label: 'Context Layer Orchestration', icon: '🧠', color: '#2de28a' },
  { label: 'LLM Evals / Benchmarking',    icon: '📊', color: '#00e5c8' },
  { label: 'Alignment Engineering',       icon: '🎯', color: '#f5a623' },
]

export default function Project2() {
  const [month, setMonth] = useState(AGENT_MONTHS[0])
  const isMobile = useWindowWidth() < 768
  const data = evalData[month]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.25rem' : '1.75rem' }}>

      {/* Page header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.875rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block', width: 'fit-content', fontSize: '11px', fontWeight: 700,
            padding: '0.2rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em',
            background: 'rgba(91,141,238,0.14)', color: '#5b8dee',
          }}>Project #2</span>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '1.875rem', fontWeight: 800, color: '#e8eeff', letterSpacing: '-0.02em', margin: 0 }}>Data Analyst AI Agent</h1>
          <p style={{ fontSize: '0.875rem', color: '#6b7db3', margin: 0 }}>Context grounding · LLM evals · accuracy benchmarking · {month}</p>
        </div>
        <Select value={month} onChange={setMonth} options={AGENT_MONTHS} icon="📅" />
      </div>

      {/* Skills legend — 2-col on mobile, 4-col on desktop */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '0.75rem' }}>
        {SKILLS.map(s => (
          <div key={s.label} style={{
            background: '#0f1a3e', border: `1px solid ${s.color}30`, borderRadius: '0.75rem',
            padding: isMobile ? '0.75rem' : '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.625rem',
          }}>
            <span style={{ fontSize: isMobile ? '1rem' : '1.25rem', flexShrink: 0 }}>{s.icon}</span>
            <span style={{ fontSize: isMobile ? '11px' : '12px', fontWeight: 600, lineHeight: 1.35, color: s.color }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* KPIs */}
      <P2KpiRow data={data} />

      {/* Charts — stacks on mobile */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <P2AccuracyChart categories={data.categories} />
        <P2IterationChart />
      </div>

      <P2ContextLayers />
      <P2ToolBindings />

      <p style={{ fontSize: '11px', textAlign: 'center', color: '#2a3f80', paddingBottom: '1rem' }}>
        Illustrative mock data · Data Analyst AI Agent · Portfolio Project #2
      </p>
    </div>
  )
}
