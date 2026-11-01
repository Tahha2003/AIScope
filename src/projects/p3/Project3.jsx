import { useState } from 'react'
import { PRODUCT_MONTHS, FEATURES, productData } from '../../data/productData'
import useWindowWidth from '../../hooks/useWindowWidth'
import Select         from '../../components/ui/Select'
import P3KpiRow       from './P3KpiRow'
import P3EditFeedback from './P3EditFeedback'
import P3EditTypes    from './P3EditTypes'
import P3FeatureTable from './P3FeatureTable'
import P3CostTrend    from './P3CostTrend'

const SIGNALS = [
  { icon: '💸', label: 'AI Spending',  color: '#5b8dee', desc: 'Track what each output costs the company' },
  { icon: '🔄', label: 'AI Workflows', color: '#00e5c8', desc: 'How users move through AI-powered flows' },
  { icon: '🎯', label: 'AI Products',  color: '#f5a623', desc: 'Quality signals: edits, feedback, success' },
]

export default function Project3() {
  const [month,   setMonth]   = useState(PRODUCT_MONTHS[0])
  const [feature, setFeature] = useState(FEATURES[0])
  const isMobile = useWindowWidth() < 768
  const data = productData[month]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.25rem' : '1.75rem' }}>

      {/* Page header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.875rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block', width: 'fit-content', fontSize: '11px', fontWeight: 700,
            padding: '0.2rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em',
            background: 'rgba(245,166,35,0.14)', color: '#f5a623',
          }}>Project #3</span>
          <h1 style={{ fontSize: isMobile ? '1.5rem' : '1.875rem', fontWeight: 800, color: '#e8eeff', letterSpacing: '-0.02em', margin: 0 }}>AI Product Analysis</h1>
          <p style={{ fontSize: '0.875rem', color: '#6b7db3', margin: 0 }}>Output quality · user behavior · cost efficiency · {month}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <Select value={month}   onChange={setMonth}   options={PRODUCT_MONTHS} icon="📅" />
          <Select value={feature} onChange={setFeature} options={FEATURES}       icon="⚙️" />
        </div>
      </div>

      {/* Signals legend — 1-col on mobile, 3-col on desktop */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '0.75rem' }}>
        {SIGNALS.map(s => (
          <div key={s.label} style={{
            background: '#0f1a3e', border: `1px solid ${s.color}28`, borderRadius: '0.75rem',
            padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', gap: '0.875rem',
          }}>
            <span style={{
              width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem', fontSize: '1.125rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              background: s.color + '18',
            }}>{s.icon}</span>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: s.color, margin: '0 0 0.2rem' }}>{s.label}</p>
              <p style={{ fontSize: '12px', color: '#4d6391', lineHeight: 1.4, margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* KPIs */}
      <P3KpiRow data={data} />

      {/* Edit + feedback — stacks on mobile */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.25rem' }}>
        <P3EditFeedback data={data} />
        <P3EditTypes />
      </div>

      <P3FeatureTable activeFeature={feature} />
      <P3CostTrend />

      <p style={{ fontSize: '11px', textAlign: 'center', color: '#2a3f80', paddingBottom: '1rem' }}>
        Illustrative mock data · AI Product Analysis · Portfolio Project #3
      </p>
    </div>
  )
}
