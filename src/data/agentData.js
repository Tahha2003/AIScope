// ─── Project 2: Data Analyst AI Agent ────────────────────────────────────────

export const AGENT_MONTHS = ['September 2026', 'August 2026', 'July 2026', 'June 2026']

// Context layers fed to the agent
export const contextLayers = [
  {
    id: 'business-rules',
    label: 'Business Rules',
    icon: '📋',
    description: 'Revenue recognition logic, fiscal calendar, KPI definitions',
    status: 'active',
    tokens: 4200,
    impact: '+31% accuracy',
  },
  {
    id: 'table-definitions',
    label: 'Table Definitions',
    icon: '🗄️',
    description: 'Schema docs for 47 tables: column meanings, joins, nullability',
    status: 'active',
    tokens: 11800,
    impact: '+28% accuracy',
  },
  {
    id: 'data-access',
    label: 'Information Access',
    icon: '🔑',
    description: 'Which teams own which datasets, PII flags, freshness SLAs',
    status: 'active',
    tokens: 2600,
    impact: '+12% accuracy',
  },
  {
    id: 'sample-queries',
    label: 'Sample Queries',
    icon: '💡',
    description: '200 curated Q&A pairs covering common analyst questions',
    status: 'active',
    tokens: 38000,
    impact: '+19% accuracy',
  },
]

// Eval benchmark: accuracy before vs after context improvements
export const evalData = {
  'September 2026': {
    categories: [
      { category: 'Revenue queries',     before: 42, after: 91, questions: 38 },
      { category: 'Cohort analysis',     before: 35, after: 82, questions: 24 },
      { category: 'Funnel metrics',      before: 61, after: 94, questions: 31 },
      { category: 'Cost attribution',    before: 29, after: 78, questions: 19 },
      { category: 'Segment breakdowns',  before: 55, after: 88, questions: 42 },
      { category: 'Forecasting',         before: 22, after: 71, questions: 16 },
    ],
    totalQuestions: 170,
    overallBefore: 41,
    overallAfter:  84,
    iterationsToTarget: 4,
    avgLatencyMs: 1840,
    costPerQuery: 0.014,
  },
  'August 2026': {
    categories: [
      { category: 'Revenue queries',     before: 38, after: 85, questions: 35 },
      { category: 'Cohort analysis',     before: 30, after: 76, questions: 22 },
      { category: 'Funnel metrics',      before: 55, after: 88, questions: 28 },
      { category: 'Cost attribution',    before: 24, after: 71, questions: 17 },
      { category: 'Segment breakdowns',  before: 49, after: 82, questions: 38 },
      { category: 'Forecasting',         before: 18, after: 64, questions: 14 },
    ],
    totalQuestions: 154,
    overallBefore: 36,
    overallAfter:  78,
    iterationsToTarget: 6,
    avgLatencyMs: 2100,
    costPerQuery: 0.018,
  },
  'July 2026': {
    categories: [
      { category: 'Revenue queries',     before: 31, after: 79, questions: 30 },
      { category: 'Cohort analysis',     before: 26, after: 70, questions: 20 },
      { category: 'Funnel metrics',      before: 48, after: 83, questions: 25 },
      { category: 'Cost attribution',    before: 19, after: 65, questions: 15 },
      { category: 'Segment breakdowns',  before: 42, after: 76, questions: 32 },
      { category: 'Forecasting',         before: 14, after: 58, questions: 12 },
    ],
    totalQuestions: 134,
    overallBefore: 30,
    overallAfter:  72,
    iterationsToTarget: 8,
    avgLatencyMs: 2380,
    costPerQuery: 0.021,
  },
  'June 2026': {
    categories: [
      { category: 'Revenue queries',     before: 25, after: 71, questions: 28 },
      { category: 'Cohort analysis',     before: 20, after: 63, questions: 18 },
      { category: 'Funnel metrics',      before: 40, after: 77, questions: 22 },
      { category: 'Cost attribution',    before: 14, after: 58, questions: 13 },
      { category: 'Segment breakdowns',  before: 35, after: 69, questions: 28 },
      { category: 'Forecasting',         before: 11, after: 51, questions: 10 },
    ],
    totalQuestions: 119,
    overallBefore: 24,
    overallAfter:  65,
    iterationsToTarget: 11,
    avgLatencyMs: 2650,
    costPerQuery: 0.024,
  },
}

// Prompt engineering iteration log
export const iterationLog = [
  { iteration: 1, accuracy: 41, change: 'Baseline — no context', delta: null },
  { iteration: 2, accuracy: 54, change: 'Added table definitions',        delta: +13 },
  { iteration: 3, accuracy: 67, change: 'Added business rules',           delta: +13 },
  { iteration: 4, accuracy: 74, change: 'Added sample Q&A pairs',         delta:  +7 },
  { iteration: 5, accuracy: 79, change: 'Refined column descriptions',    delta:  +5 },
  { iteration: 6, accuracy: 84, change: 'Added information access layer', delta:  +5 },
]

// Tool bindings the agent uses
export const toolBindings = [
  { tool: 'run_sql',          description: 'Executes read-only SQL against the warehouse',  calls: 1240, successRate: 94 },
  { tool: 'get_schema',       description: 'Fetches live schema for a table or view',       calls:  870, successRate: 99 },
  { tool: 'semantic_search',  description: 'Searches business glossary via embeddings',     calls:  620, successRate: 97 },
  { tool: 'create_chart',     description: 'Renders a Recharts chart from query results',   calls:  480, successRate: 88 },
  { tool: 'send_to_slack',    description: 'Posts formatted answer to team Slack channel',  calls:  310, successRate: 96 },
]
