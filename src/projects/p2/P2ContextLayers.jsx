import SectionHeader from '../../components/ui/SectionHeader'
import { contextLayers } from '../../data/agentData'
import useWindowWidth from '../../hooks/useWindowWidth'

const LAYER_COLORS = ['#5b8dee', '#2de28a', '#00e5c8', '#f5a623']

export default function P2ContextLayers() {
  const isMobile = useWindowWidth() < 640
  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Context layers" subtitle="What we fed the agent to ground its answers" />

      <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.875rem' }}>
        {contextLayers.map((layer, i) => (
          <div key={layer.id} style={{
            background: '#0f1a3e', border: '1px solid #1a2858', borderRadius: '0.75rem',
            padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: LAYER_COLORS[i] }} />

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.125rem' }}>{layer.icon}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8eeff' }}>{layer.label}</span>
              </div>
              <span style={{
                fontSize: '10px', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px', flexShrink: 0,
                background: LAYER_COLORS[i] + '20', color: LAYER_COLORS[i],
              }}>{layer.impact}</span>
            </div>

            <p style={{ fontSize: '12px', lineHeight: 1.5, color: '#6b7db3', margin: 0 }}>{layer.description}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: 'auto' }}>
              <span style={{ fontSize: '12px', color: '#4d6391' }}>Context size:</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: LAYER_COLORS[i] }}>{layer.tokens.toLocaleString()} tokens</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 1.25rem 1.25rem' }}>
        <div style={{ background: '#0f1a3e', border: '1px solid #1a2858', borderRadius: '0.75rem', padding: '0.75rem 1rem', fontSize: '12px', lineHeight: 1.6 }}>
          <span style={{ fontWeight: 600, color: '#e8eeff' }}>Grounding approach: </span>
          <span style={{ color: '#6b7db3' }}>
            Context → Tools → Data. The agent receives business rules, table definitions, and access metadata
            before each query, so it understands <em>what</em> the data means — not just its schema.
          </span>
        </div>
      </div>
    </div>
  )
}
