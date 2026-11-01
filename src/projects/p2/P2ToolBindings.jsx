import SectionHeader from '../../components/ui/SectionHeader'
import ProgressBar from '../../components/ui/ProgressBar'
import { toolBindings } from '../../data/agentData'

const TOOL_ICONS = {
  run_sql: '🗄️', get_schema: '📐', semantic_search: '🔍', create_chart: '📊', send_to_slack: '💬',
}

export default function P2ToolBindings() {
  const maxCalls = Math.max(...toolBindings.map(t => t.calls))

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="Tool bindings" subtitle="System-level tools the agent can call · call volume & success rate" />

      {toolBindings.map((tool, i) => (
        <div key={tool.tool} style={{
          padding: '1rem 1.5rem',
          borderBottom: i < toolBindings.length - 1 ? '1px solid #1a2858' : 'none',
          display: 'flex', flexDirection: 'column', gap: '0.625rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
              <span style={{ fontSize: '1.125rem', flexShrink: 0 }}>{TOOL_ICONS[tool.tool] ?? '🔧'}</span>
              <div style={{ minWidth: 0 }}>
                <span style={{ fontSize: '0.875rem', fontFamily: 'monospace', fontWeight: 600, color: '#00e5c8', display: 'block' }}>{tool.tool}</span>
                <p style={{ fontSize: '12px', color: '#6b7db3', margin: '0.125rem 0 0', lineHeight: 1.4 }}>{tool.description}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <span style={{ fontSize: '12px', color: '#4d6391' }}>{tool.calls.toLocaleString()} calls</span>
              <span style={{
                fontSize: '12px', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px',
                background: tool.successRate >= 95 ? 'rgba(45,226,138,0.16)' : 'rgba(245,166,35,0.16)',
                color:      tool.successRate >= 95 ? '#2de28a' : '#f5a623',
              }}>{tool.successRate}%</span>
            </div>
          </div>
          <ProgressBar value={tool.calls} max={maxCalls} color={tool.successRate >= 95 ? '#5b8dee' : '#f5a623'} height={4} />
        </div>
      ))}
    </div>
  )
}
