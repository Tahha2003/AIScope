// ─── Project 3: AI Product Analysis ──────────────────────────────────────────

export const PRODUCT_MONTHS = ['September 2026', 'August 2026', 'July 2026', 'June 2026']

export const FEATURES = ['All features', 'Writing Assistant', 'Document Summary', 'Data Q&A', 'Code Helper']

export const productData = {
  'September 2026': {
    outputCorrectionRate:  18,   // % of outputs users edited
    positiveFeedbackRate:  76,   // % thumbs-up
    taskSuccessRate:       72,   // % tasks completed without re-prompt
    aiUsageCost:        2400,    // $ total
    totalOutputs:      10000,
    ratedOutputs:       2000,
    totalTasks:        10000,
    positiveFeedback:   1520,
    negativeFeedback:    480,
    feedbackResponseRate: 20,    // % of outputs that received any feedback
    avgRegenPerSession:  1.4,    // avg regenerations per session
    avgCostPerOutput:    0.24,   // $
    prevMonth: {
      outputCorrectionRate: 22,
      positiveFeedbackRate: 70,
      taskSuccessRate:       65,
      aiUsageCost:         2650,
    },
  },
  'August 2026': {
    outputCorrectionRate:  22,
    positiveFeedbackRate:  70,
    taskSuccessRate:       65,
    aiUsageCost:         2650,
    totalOutputs:        8800,
    ratedOutputs:        1760,
    totalTasks:          8800,
    positiveFeedback:    1232,
    negativeFeedback:     528,
    feedbackResponseRate: 20,
    avgRegenPerSession:   1.7,
    avgCostPerOutput:     0.30,
    prevMonth: {
      outputCorrectionRate: 27,
      positiveFeedbackRate: 64,
      taskSuccessRate:       59,
      aiUsageCost:         2900,
    },
  },
  'July 2026': {
    outputCorrectionRate:  27,
    positiveFeedbackRate:  64,
    taskSuccessRate:       59,
    aiUsageCost:         2900,
    totalOutputs:        7600,
    ratedOutputs:        1520,
    totalTasks:          7600,
    positiveFeedback:     973,
    negativeFeedback:     547,
    feedbackResponseRate: 20,
    avgRegenPerSession:   2.1,
    avgCostPerOutput:     0.38,
    prevMonth: {
      outputCorrectionRate: 33,
      positiveFeedbackRate: 57,
      taskSuccessRate:       52,
      aiUsageCost:         3100,
    },
  },
  'June 2026': {
    outputCorrectionRate:  33,
    positiveFeedbackRate:  57,
    taskSuccessRate:       52,
    aiUsageCost:         3100,
    totalOutputs:        6400,
    ratedOutputs:        1280,
    totalTasks:          6400,
    positiveFeedback:     730,
    negativeFeedback:     550,
    feedbackResponseRate: 20,
    avgRegenPerSession:   2.6,
    avgCostPerOutput:     0.48,
    prevMonth: null,
  },
}

// Per-feature breakdown for current month
export const featureData = [
  {
    feature: 'Writing Assistant',
    correctionRate:  14,
    positiveFeedback: 81,
    taskSuccess:      78,
    costPerOutput:   0.18,
    outputs:         4200,
    color: '#00e5c8',
  },
  {
    feature: 'Document Summary',
    correctionRate:  11,
    positiveFeedback: 84,
    taskSuccess:      82,
    costPerOutput:   0.22,
    outputs:         2800,
    color: '#2de28a',
  },
  {
    feature: 'Data Q&A',
    correctionRate:  24,
    positiveFeedback: 68,
    taskSuccess:      61,
    costPerOutput:   0.31,
    outputs:         1800,
    color: '#5b8dee',
  },
  {
    feature: 'Code Helper',
    correctionRate:  29,
    positiveFeedback: 62,
    taskSuccess:      58,
    costPerOutput:   0.28,
    outputs:         1200,
    color: '#f5a623',
  },
]

// Edit type breakdown — what do users change?
export const editTypes = [
  { type: 'Tone / style',      pct: 38, color: '#00e5c8' },
  { type: 'Added detail',      pct: 26, color: '#2de28a' },
  { type: 'Factual correction',pct: 21, color: '#5b8dee' },
  { type: 'Shortened output',  pct: 15, color: '#f5a623' },
]

// Regeneration reasons
export const regenReasons = [
  { reason: 'Output too short',   pct: 31 },
  { reason: 'Wrong tone',         pct: 24 },
  { reason: 'Missed context',     pct: 22 },
  { reason: 'Factual error',      pct: 14 },
  { reason: 'Other',              pct:  9 },
]

// Cost trend: AI usage cost per output over 6 months
export const costTrend = [
  { month: 'Aug',  costPerOutput: 0.52 },
  { month: 'Sep',  costPerOutput: 0.48 },
  { month: 'Oct',  costPerOutput: 0.48 },
  { month: 'Nov',  costPerOutput: 0.38 },
  { month: 'Dec',  costPerOutput: 0.30 },
  { month: 'Jan',  costPerOutput: 0.24 },
]
