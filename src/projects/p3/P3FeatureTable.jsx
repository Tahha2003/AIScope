import SectionHeader from '../../components/ui/SectionHeader'
import ProgressBar from '../../components/ui/ProgressBar'
import { featureData } from '../../data/productData'

const TH = {
  padding: '0.625rem 1rem', textAlign: 'left',
  fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.06em', color: '#4d6391', whiteSpace: 'nowrap',
}
const TD = { padding: '0.875rem 1rem', verticalAlign: 'middle' }

function ratingColor(rate) {
  return rate <= 15 ? '#2de28a' : rate <= 25 ? '#f5a623' : '#ff6b6b'
}
function ratingLabel(rate) {
  return rate <= 15 ? 'Good' : rate <= 25 ? 'Fair' : 'High'
}

export default function P3FeatureTable({ activeFeature }) {
  const rows = activeFeature === 'All features'
    ? featureData
    : featureData.filter(r => r.feature === activeFeature)

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader
        title="Performance by feature"
        subtitle="Correction rate · positive feedback · task success · cost per output"
      />
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '680px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #1a2858' }}>
              <th style={{ ...TH, width: '160px' }}>Feature</th>
              <th style={{ ...TH, width: '80px' }}>Outputs</th>
              <th style={{ ...TH, width: '180px' }}>Correction Rate</th>
              <th style={{ ...TH, width: '200px' }}>Positive Feedback</th>
              <th style={{ ...TH, width: '180px' }}>Task Success</th>
              <th style={{ ...TH, width: '110px' }}>Cost / Output</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                style={{ borderBottom: i < rows.length - 1 ? '1px solid #1a2858' : 'none', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.025)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* feature name */}
                <td style={TD}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8eeff', whiteSpace: 'nowrap' }}>{row.feature}</span>
                  </div>
                </td>

                {/* outputs */}
                <td style={TD}>
                  <span style={{ fontSize: '0.875rem', color: '#c8d3f0' }}>{row.outputs.toLocaleString()}</span>
                </td>

                {/* correction rate */}
                <td style={{ ...TD, minWidth: '180px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', color: '#c8d3f0' }}>{row.correctionRate}%</span>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: ratingColor(row.correctionRate) }}>
                        {ratingLabel(row.correctionRate)}
                      </span>
                    </div>
                    <ProgressBar value={row.correctionRate} max={40} color={ratingColor(row.correctionRate)} height={4} />
                  </div>
                </td>

                {/* positive feedback */}
                <td style={{ ...TD, minWidth: '200px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <span style={{ fontSize: '0.875rem', color: '#c8d3f0' }}>{row.positiveFeedback}%</span>
                    <ProgressBar value={row.positiveFeedback} max={100} color={row.color} height={4} />
                  </div>
                </td>

                {/* task success */}
                <td style={{ ...TD, minWidth: '180px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <span style={{ fontSize: '0.875rem', color: '#c8d3f0' }}>{row.taskSuccess}%</span>
                    <ProgressBar value={row.taskSuccess} max={100} color={row.color} height={4} />
                  </div>
                </td>

                {/* cost per output */}
                <td style={TD}>
                  <span style={{
                    fontSize: '0.875rem', fontWeight: 700,
                    padding: '0.2rem 0.625rem', borderRadius: '0.5rem',
                    background: row.color + '20', color: row.color, whiteSpace: 'nowrap',
                  }}>
                    ${row.costPerOutput.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
