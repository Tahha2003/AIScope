import SectionHeader from '../../components/ui/SectionHeader'

function SplitBar({ leftLabel, leftValue, leftColor, rightLabel, rightValue, rightColor, leftCount, rightCount }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      <div style={{ width: '100%', height: '2rem', borderRadius: '0.625rem', overflow: 'hidden', display: 'flex', background: '#162460' }}>
        <div style={{ width: `${leftValue}%`, background: leftColor, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '0.75rem', transition: 'width 0.7s ease' }}>
          {leftValue > 12 && <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{leftValue}%</span>}
        </div>
        <div style={{ width: `${rightValue}%`, background: rightColor, display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', transition: 'width 0.7s ease' }}>
          {rightValue > 8 && <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{rightValue}%</span>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: leftColor, flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8eeff' }}>{leftValue}%</span>
            <span style={{ fontSize: '12px', color: '#6b7db3', marginLeft: '0.375rem' }}>{leftLabel}</span>
            {leftCount && <p style={{ fontSize: '11px', color: '#4d6391', margin: '0.125rem 0 0' }}>{leftCount}</p>}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'right' }}>
          <div>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e8eeff' }}>{rightValue}%</span>
            <span style={{ fontSize: '12px', color: '#6b7db3', marginLeft: '0.375rem' }}>{rightLabel}</span>
            {rightCount && <p style={{ fontSize: '11px', color: '#4d6391', margin: '0.125rem 0 0' }}>{rightCount}</p>}
          </div>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: rightColor, flexShrink: 0 }} />
        </div>
      </div>
    </div>
  )
}

export default function P3EditFeedback({ data }) {
  const editedPct   = data.outputCorrectionRate
  const uneditedPct = 100 - editedPct
  const posFeedback = data.positiveFeedbackRate
  const negFeedback = 100 - posFeedback

  return (
    <div style={{ background: '#111f52', border: '1px solid #1e2f6a', borderRadius: '1rem', overflow: 'hidden' }}>
      <SectionHeader title="How are users interacting with AI outputs?" subtitle="Edit rate · feedback split · this period" />

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4d6391', margin: '0 0 0.75rem' }}>
            How often do users correct AI?
          </p>
          <SplitBar leftLabel="Unedited" leftValue={uneditedPct} leftColor="#2a3f7a"
            leftCount="Unedited does not necessarily mean correct."
            rightLabel="Edited" rightValue={editedPct} rightColor="#f5a623"
            rightCount={`${(data.totalOutputs * editedPct / 100).toLocaleString()} outputs edited`} />
        </div>

        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#4d6391', margin: '0 0 0.75rem' }}>
            What feedback are users giving?
          </p>
          <SplitBar leftLabel="Positive" leftValue={posFeedback} leftColor="#00e5c8"
            leftCount={`${data.positiveFeedback.toLocaleString()} · ${data.feedbackResponseRate}% feedback response rate`}
            rightLabel="Negative" rightValue={Math.round(negFeedback)} rightColor="#ff6b6b"
            rightCount={`${data.negativeFeedback.toLocaleString()} negative`} />
        </div>

        <div style={{ background: '#0f1a3e', border: '1px solid #1a2858', borderRadius: '0.75rem', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#6b7db3', margin: '0 0 0.25rem' }}>Avg regenerations per session</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#e8eeff', margin: 0 }}>{data.avgRegenPerSession}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#6b7db3', margin: '0 0 0.25rem' }}>Cost per successful output</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00e5c8', margin: 0 }}>
              ${(data.avgCostPerOutput * data.avgRegenPerSession).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
