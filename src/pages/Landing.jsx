// Landing page — portfolio overview with 3 project cards

const PROJECTS = [
  {
    id: 'p1',
    number: '#1',
    title: 'Token Analytics',
    tagline: 'Built a cost attribution system that ties AI spend to real ROI.',
    description:
      'Most teams had no idea what they were spending on AI or whether it was worth it. I built a dashboard that tracks token usage and cost by team, maps it to hours saved and revenue generated, and gives every team a single ROI number — like cost per ticket resolved.',
    color: '#00e5c8',
    icon: '📊',
    skills: ['Cost attribution', 'ROI modeling', 'Team analytics', 'Trend analysis'],
    metrics: [
      { label: 'Teams tracked', value: '5' },
      { label: 'Avg ROI',       value: '204%' },
      { label: 'Cost / ticket', value: '$10–28' },
    ],
  },
  {
    id: 'p2',
    number: '#2',
    title: 'Data Analyst AI Agent',
    tagline: 'Engineered and benchmarked an agent that answers business questions.',
    description:
      'The agent was answering only 41% of questions correctly — not because the model was bad, but because it had no context. I built a grounding system with business rules, table definitions, and data access metadata, then proved the fix with 170 eval questions, pushing accuracy to 84%.',
    color: '#5b8dee',
    icon: '🤖',
    skills: ['Prompt engineering', 'Context orchestration', 'LLM evals', 'Alignment engineering'],
    metrics: [
      { label: 'Accuracy lift',  value: '+43 pts' },
      { label: 'Eval questions', value: '170' },
      { label: 'Cost / query',   value: '$0.014' },
    ],
  },
  {
    id: 'p3',
    number: '#3',
    title: 'AI Product Analysis',
    tagline: 'Measured how users actually interact with AI-generated outputs.',
    description:
      'High usage numbers alone don\'t tell you if an AI feature is working. I built a behavioral analytics dashboard that tracks correction rate, regeneration patterns, and user feedback across product features — surfacing which ones deliver real value and where cost efficiency improved 54% over 6 months.',
    color: '#f5a623',
    icon: '🎯',
    skills: ['Behavioral analytics', 'Quality signals', 'Cost efficiency', 'Feature benchmarking'],
    metrics: [
      { label: 'Edit rate',      value: '18%' },
      { label: 'Task success',   value: '72%' },
      { label: 'Cost reduction', value: '54%' },
    ],
  },
]

export default function Landing({ onNavigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', paddingTop: '3.5rem', paddingBottom: '1rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>

        {/* pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            fontSize: '11px', fontWeight: 700, padding: '0.25rem 0.875rem',
            borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.1em',
            background: 'rgba(0,229,200,0.1)', color: '#00e5c8', border: '1px solid rgba(0,229,200,0.25)',
          }}>
            <span>✦</span> AI Data Portfolio
          </span>
        </div>

        {/* heading */}
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#e8eeff', marginBottom: '1.25rem' }}>
          AI is Everywhere.<br />
          <span style={{ color: '#00e5c8' }}>Most Can't Measure It.</span>
        </h1>

        {/* description */}
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#6b7db3', maxWidth: '36rem', margin: '0 auto', textAlign: 'center' }}>
          Companies are spending millions on AI with no clear view of what's working.
          I built three analytics projects to solve exactly that —{' '}
          <span style={{ color: '#c8d3f0' }}>tracking the spend</span>,{' '}
          <span style={{ color: '#c8d3f0' }}>engineering the agent</span>, and{' '}
          <span style={{ color: '#c8d3f0' }}>measuring how people actually use the output</span>.
        </p>

        {/* tags strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
          {[
            { icon: '📊', label: 'Cost Visibility' },
            { icon: '🤖', label: 'Agent Accuracy' },
            { icon: '🎯', label: 'User Behavior' },
          ].map(s => (
            <span key={s.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.875rem', fontWeight: 600, padding: '0.5rem 1.25rem',
              borderRadius: '0.75rem', background: '#111f52', border: '1px solid #1e2f6a', color: '#c8d3f0',
            }}>
              {s.icon} {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Project cards ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} onNavigate={onNavigate} />)}
      </div>

      {/* ── Bottom callout ── */}
      <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#e8eeff', marginBottom: '0.75rem' }}>
          Three real problems. Three working solutions.
        </p>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#6b7db3', maxWidth: '40rem', margin: '0 auto' }}>
          Where is our AI budget actually going?{' '}
          <span style={{ color: '#00e5c8' }}>Built a spend attribution dashboard.</span>{' '}
          Why does our agent give wrong answers?{' '}
          <span style={{ color: '#5b8dee' }}>Engineered context layers and proved the lift.</span>{' '}
          Are users happy with AI outputs?{' '}
          <span style={{ color: '#f5a623' }}>Tracked correction rates, feedback, and cost per success.</span>
        </p>
      </div>

      <p style={{ fontSize: '11px', textAlign: 'center', color: '#2a3f80', paddingBottom: '1.5rem' }}>
        All data is illustrative · Built with React + Recharts + Tailwind CSS
      </p>

    </div>
  )
}

function ProjectCard({ project: p, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate(p.id)}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = p.color + '55'
        e.currentTarget.style.transform   = 'translateY(-3px)'
        e.currentTarget.style.boxShadow   = `0 16px 48px ${p.color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#1e2f6a'
        e.currentTarget.style.transform   = 'none'
        e.currentTarget.style.boxShadow   = 'none'
      }}
      style={{
        background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem',
        display: 'flex', flexDirection: 'row', cursor: 'pointer',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
        overflow: 'hidden',
      }}
    >
      {/* left accent bar */}
      <div style={{ width: '4px', background: p.color, flexShrink: 0, borderRadius: '1rem 0 0 1rem' }} />

      {/* card body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, minWidth: 0 }}>

        {/* badge + icon row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '999px',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            background: p.color + '20', color: p.color,
          }}>
            Project {p.number}
          </span>
          <span style={{
            width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', fontSize: '1.25rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            background: p.color + '16',
          }}>
            {p.icon}
          </span>
        </div>

        {/* title + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#e8eeff', lineHeight: 1.3, margin: 0 }}>
            {p.title}
          </h2>
          <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: p.color, lineHeight: 1.4, margin: 0 }}>
            {p.tagline}
          </p>
        </div>

        {/* description */}
        <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: '#6b7db3', margin: 0 }}>
          {p.description}
        </p>

        {/* metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
          {p.metrics.map(m => (
            <div key={m.label} style={{
              background: '#0f1a3e', border: '1px solid #162460', borderRadius: '0.625rem',
              padding: '0.625rem 0.5rem', textAlign: 'center',
            }}>
              <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: p.color, margin: '0 0 0.25rem' }}>{m.value}</p>
              <p style={{ fontSize: '10px', color: '#4d6391', lineHeight: 1.3, margin: 0 }}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: 'auto' }}>
          {p.skills.map(s => (
            <span key={s} style={{
              fontSize: '11px', padding: '0.25rem 0.625rem', borderRadius: '0.5rem',
              background: '#162460', color: '#6b7db3',
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={e => { e.stopPropagation(); onNavigate(p.id) }}
          onMouseEnter={e => e.currentTarget.style.background = p.color + '32'}
          onMouseLeave={e => e.currentTarget.style.background = p.color + '1a'}
          style={{
            width: '100%', padding: '0.75rem', borderRadius: '0.75rem',
            fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
            background: p.color + '1a', color: p.color, border: `1px solid ${p.color}40`,
            transition: 'background 0.15s ease',
          }}
        >
          View Project →
        </button>
      </div>
    </div>
  )
}
