// BusinessImpact — mirrors the "Business impact" card from the screenshot
// Shows time value saved, avoided costs, incremental profit, and the formula banner.

function ImpactRow({ icon, label, value }) {
  return (
    <div
      className="flex items-center justify-between py-3"
      style={{ borderBottom: '1px solid #1a2858' }}
    >
      <div className="flex items-center gap-3">
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
          style={{ background: '#162460' }}
        >
          {icon}
        </span>
        <span className="text-sm" style={{ color: '#a0aec0' }}>{label}</span>
      </div>
      <span className="text-sm font-semibold text-slate-100">
        ${value.toLocaleString()}
      </span>
    </div>
  )
}

export default function BusinessImpact({ kpis }) {
  const { timeValueSaved, avoidedCosts, incrementalProfit, aiSpend, netValue } = kpis
  const totalImpact = Math.round(timeValueSaved + avoidedCosts + incrementalProfit)

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: '#111f52', border: '1px solid #1e2f6a' }}
    >
      {/* title */}
      <div className="px-6 pt-5 pb-2">
        <h2 className="text-base font-semibold text-slate-100">Business impact</h2>
        <p className="text-xs mt-0.5" style={{ color: '#6b7db3' }}>
          Breakdown of value generated this period
        </p>
      </div>

      {/* rows */}
      <div className="px-6">
        <ImpactRow icon="⏱" label="Time value saved"   value={Math.round(timeValueSaved)}   />
        <ImpactRow icon="🛡" label="Avoided costs"      value={Math.round(avoidedCosts)}     />
        <ImpactRow icon="📈" label="Incremental profit" value={Math.round(incrementalProfit)} />
      </div>

      {/* total bar */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#6b7db3' }}>
            Total business value
          </span>
          <span className="text-lg font-bold" style={{ color: '#00e5c8' }}>
            ${totalImpact.toLocaleString()}
          </span>
        </div>
        {/* visual ratio bar */}
        <div className="w-full h-2 rounded-full overflow-hidden flex" style={{ background: '#162460' }}>
          <div style={{ width: `${(timeValueSaved / totalImpact) * 100}%`,   background: '#00e5c8', transition: 'width 0.5s' }} />
          <div style={{ width: `${(avoidedCosts / totalImpact) * 100}%`,     background: '#2de28a', transition: 'width 0.5s' }} />
          <div style={{ width: `${(incrementalProfit / totalImpact) * 100}%`, background: '#5b8dee', transition: 'width 0.5s' }} />
        </div>
        <div className="flex gap-4 mt-2">
          {[
            { label: 'Time value', color: '#00e5c8' },
            { label: 'Avoided',    color: '#2de28a' },
            { label: 'Profit',     color: '#5b8dee' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: l.color }} />
              <span className="text-xs" style={{ color: '#6b7db3' }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* formula banner */}
      <div
        className="mx-4 mb-4 rounded-xl px-4 py-3 text-center"
        style={{ background: '#0d1b45', border: '1px solid #1e2f6a' }}
      >
        <p className="text-xs font-semibold" style={{ color: '#a0aec0' }}>
          Business outcome&nbsp;=&nbsp;
          <span style={{ color: '#00e5c8' }}>Money made</span>
          &nbsp;+&nbsp;
          <span style={{ color: '#2de28a' }}>Time saved</span>
        </p>
        <p className="text-xs mt-1" style={{ color: '#6b7db3' }}>
          Net value <span className="text-slate-300 font-medium">${Math.round(netValue.value).toLocaleString()}</span>
          &nbsp;on&nbsp;
          <span className="text-slate-300 font-medium">${aiSpend.value.toLocaleString()}</span> spend
        </p>
      </div>
    </div>
  )
}
