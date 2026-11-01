// ─── Project 1: Token Analytics ──────────────────────────────────────────────

export const TEAMS = ['All teams', 'Engineering', 'Support', 'Marketing', 'Sales', 'Operations']

export const MONTHS = [
  'September 2026',
  'August 2026',
  'July 2026',
  'June 2026',
  'May 2026',
  'April 2026',
]

export const teamData = {
  'September 2026': [
    { team: 'Engineering', tokens: 195_000_000, cost: 9750,  hoursSaved: 455, ticketsResolved: 348, revenueImpact: 31000 },
    { team: 'Support',     tokens: 130_000_000, cost: 6500,  hoursSaved: 390, ticketsResolved: 625, revenueImpact: 19500 },
    { team: 'Marketing',   tokens:  88_000_000, cost: 4400,  hoursSaved: 240, ticketsResolved: 152, revenueImpact: 13200 },
    { team: 'Sales',       tokens:  66_000_000, cost: 3300,  hoursSaved: 175, ticketsResolved: 104, revenueImpact: 24000 },
    { team: 'Operations',  tokens:  44_000_000, cost: 2200,  hoursSaved:  87, ticketsResolved: 228, revenueImpact:  8800 },
  ],
  'August 2026': [
    { team: 'Engineering', tokens: 180_000_000, cost: 9000,  hoursSaved: 420, ticketsResolved: 320, revenueImpact: 28000 },
    { team: 'Support',     tokens: 120_000_000, cost: 6000,  hoursSaved: 360, ticketsResolved: 580, revenueImpact: 18000 },
    { team: 'Marketing',   tokens:  80_000_000, cost: 4000,  hoursSaved: 220, ticketsResolved: 140, revenueImpact: 12000 },
    { team: 'Sales',       tokens:  60_000_000, cost: 3000,  hoursSaved: 160, ticketsResolved:  95, revenueImpact: 22000 },
    { team: 'Operations',  tokens:  40_000_000, cost: 2000,  hoursSaved:  80, ticketsResolved: 210, revenueImpact:  8000 },
  ],
  'July 2026': [
    { team: 'Engineering', tokens: 160_000_000, cost: 8000,  hoursSaved: 390, ticketsResolved: 290, revenueImpact: 25000 },
    { team: 'Support',     tokens: 105_000_000, cost: 5250,  hoursSaved: 320, ticketsResolved: 510, revenueImpact: 15800 },
    { team: 'Marketing',   tokens:  72_000_000, cost: 3600,  hoursSaved: 195, ticketsResolved: 120, revenueImpact: 10500 },
    { team: 'Sales',       tokens:  55_000_000, cost: 2750,  hoursSaved: 140, ticketsResolved:  88, revenueImpact: 19500 },
    { team: 'Operations',  tokens:  38_000_000, cost: 1900,  hoursSaved:  72, ticketsResolved: 185, revenueImpact:  7200 },
  ],
  'June 2026': [
    { team: 'Engineering', tokens: 145_000_000, cost: 7250,  hoursSaved: 355, ticketsResolved: 260, revenueImpact: 22000 },
    { team: 'Support',     tokens:  95_000_000, cost: 4750,  hoursSaved: 290, ticketsResolved: 465, revenueImpact: 14200 },
    { team: 'Marketing',   tokens:  65_000_000, cost: 3250,  hoursSaved: 175, ticketsResolved: 108, revenueImpact:  9400 },
    { team: 'Sales',       tokens:  50_000_000, cost: 2500,  hoursSaved: 125, ticketsResolved:  80, revenueImpact: 17800 },
    { team: 'Operations',  tokens:  34_000_000, cost: 1700,  hoursSaved:  65, ticketsResolved: 168, revenueImpact:  6500 },
  ],
  'May 2026': [
    { team: 'Engineering', tokens: 132_000_000, cost: 6600,  hoursSaved: 320, ticketsResolved: 238, revenueImpact: 20000 },
    { team: 'Support',     tokens:  88_000_000, cost: 4400,  hoursSaved: 265, ticketsResolved: 430, revenueImpact: 13200 },
    { team: 'Marketing',   tokens:  58_000_000, cost: 2900,  hoursSaved: 158, ticketsResolved:  98, revenueImpact:  8600 },
    { team: 'Sales',       tokens:  46_000_000, cost: 2300,  hoursSaved: 112, ticketsResolved:  74, revenueImpact: 16200 },
    { team: 'Operations',  tokens:  30_000_000, cost: 1500,  hoursSaved:  58, ticketsResolved: 155, revenueImpact:  5900 },
  ],
  'April 2026': [
    { team: 'Engineering', tokens: 120_000_000, cost: 6000,  hoursSaved: 295, ticketsResolved: 215, revenueImpact: 18000 },
    { team: 'Support',     tokens:  80_000_000, cost: 4000,  hoursSaved: 240, ticketsResolved: 395, revenueImpact: 12000 },
    { team: 'Marketing',   tokens:  52_000_000, cost: 2600,  hoursSaved: 142, ticketsResolved:  88, revenueImpact:  7800 },
    { team: 'Sales',       tokens:  42_000_000, cost: 2100,  hoursSaved: 100, ticketsResolved:  68, revenueImpact: 14800 },
    { team: 'Operations',  tokens:  27_000_000, cost: 1350,  hoursSaved:  52, ticketsResolved: 140, revenueImpact:  5400 },
  ],
}

export function getPrevMonth(month) {
  const idx = MONTHS.indexOf(month)
  return idx < MONTHS.length - 1 ? MONTHS[idx + 1] : null
}

export const HOURLY_RATE = 30

export function getFilteredData(month, teamFilter) {
  const rows = teamData[month] ?? []
  if (teamFilter === 'All teams') return rows
  return rows.filter(r => r.team === teamFilter)
}

export function getKPIs(month, teamFilter) {
  const rows     = getFilteredData(month, teamFilter)
  const prevMonth = getPrevMonth(month)
  const prevRows  = prevMonth ? getFilteredData(prevMonth, teamFilter) : null

  const sum = (arr, key) => arr.reduce((s, r) => s + r[key], 0)

  const totalCost         = sum(rows, 'cost')
  const totalHours        = sum(rows, 'hoursSaved')
  const totalRevenue      = sum(rows, 'revenueImpact')
  const timeValueSaved    = totalHours * HOURLY_RATE
  const avoidedCosts      = totalCost * 1.8
  const incrementalProfit = totalRevenue * 0.28
  const netValue          = timeValueSaved + avoidedCosts + incrementalProfit
  const roi               = totalCost > 0 ? Math.round((netValue / totalCost) * 100) : 0

  const calcNet = (rs) => {
    const h = sum(rs, 'hoursSaved'), c = sum(rs, 'cost'), r = sum(rs, 'revenueImpact')
    return h * HOURLY_RATE + c * 1.8 + r * 0.28
  }
  const calcROI = (rs) => {
    const c = sum(rs, 'cost')
    return c > 0 ? Math.round((calcNet(rs) / c) * 100) : 0
  }

  const delta = (curr, prev) =>
    prev != null && prev !== 0 ? Math.round(((curr - prev) / prev) * 100) : null

  const prevCost  = prevRows ? sum(prevRows, 'cost')       : null
  const prevHours = prevRows ? sum(prevRows, 'hoursSaved') : null
  const prevNet   = prevRows ? calcNet(prevRows)            : null
  const prevROI   = prevRows ? calcROI(prevRows)            : null

  return {
    aiSpend:          { value: totalCost,   pct: delta(totalCost, prevCost)   },
    hoursSaved:       { value: totalHours,  pct: delta(totalHours, prevHours) },
    netValue:         { value: netValue,    pct: delta(netValue, prevNet)     },
    roi:              { value: roi,         pct: delta(roi, prevROI)          },
    timeValueSaved,
    avoidedCosts,
    incrementalProfit,
  }
}

// Bar chart data: cost vs estimated value per team for current month
export function getBarChartData(month) {
  const rows = teamData[month] ?? []
  return rows.map(r => ({
    team:  r.team,
    cost:  r.cost,
    value: Math.round(r.hoursSaved * HOURLY_RATE + r.revenueImpact * 0.28),
  }))
}
