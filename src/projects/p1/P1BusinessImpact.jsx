import SectionHeader from '../../components/ui/SectionHeader'

function ImpactRow({ icon, label, value, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0.875rem 1.5rem', borderBottom: last ? 'none' : '1px solid #1a2858',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{
          width: '2rem', height: '2rem', borderRadius: '0.5rem', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem',
          background: '#162460',
        }}>{icon}</span>
        <span style={{ fontSize: '0.875rem', color: '#a0aec0' }}>{label}</span>
      </div>
      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#e8eeff' }}>${value.toLocaleString()}</span>
    </div>
  )
}

export default function P1BusinessImpact({ kpis }) {
  const { timeValueSaved, avoidedCosts, incrementalProfit, aiSpend, netValue } = kpis
  const total = Math.round(timeValueSaved + avoidedCosts + incrementalProfit)
  const tvPct = (timeValueSaved    / total) * 100
  const acPct = (avoidedCosts      / total) * 100
  const ipPct = (incrementalProfit / total) * 100

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <SectionHeader title="Business impact" subtitle="Value breakdown this period" />

      <ImpactRow icon="⏱" label="Time value saved"   value={Math.round(timeValueSaved)}    />
      <ImpactRow icon="🛡" label="Avoided costs"      value={Math.round(avoidedCosts)}      />
      <ImpactRow icon="📈" label="Incremental profit" value={Math.round(incrementalProfit)} last />

      {/* totals */}
      <div style={{ padding: '0.875rem 1.5rem 0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#4d6391' }}>Total value</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#00e5c8' }}>${total.toLocaleString()}</span>
        </div>
        <div style={{ width: '100%', height: '6px', borderRadius: '999px', overflow: 'hidden', display: 'flex', background: '#162460' }}>
          <div style={{ width: `${tvPct}%`, background: '#00e5c8', transition: 'width 0.5s' }} />
          <div style={{ width: `${acPct}%`, background: '#2de28a', transition: 'width 0.5s' }} />
          <div style={{ width: `${ipPct}%`, background: '#5b8dee', transition: 'width 0.5s' }} />
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          {[['Time value','#00e5c8'],['Avoided','#2de28a'],['Profit','#5b8dee']].map(([l,c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, flexShrink: 0 }} />
              <span style={{ fontSize: '11px', color: '#4d6391' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* formula box */}
      <div style={{ margin: '0 1rem 1rem', background: '#0f1a3e', border: '1px solid #1a2858', borderRadius: '0.75rem', padding: '0.75rem 1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#a0aec0', margin: '0 0 0.25rem' }}>
          Business outcome = <span style={{ color: '#00e5c8' }}>Money made</span> + <span style={{ color: '#2de28a' }}>Time saved</span>
        </p>
        <p style={{ fontSize: '11px', color: '#4d6391', margin: 0 }}>
          Net <span style={{ fontWeight: 700, color: '#c8d3f0' }}>${Math.round(netValue.value).toLocaleString()}</span>
          {' '}on <span style={{ fontWeight: 700, color: '#c8d3f0' }}>${aiSpend.value.toLocaleString()}</span> spend
        </p>
      </div>
    </div>
  )
}
