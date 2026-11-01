import { useState } from 'react'
import { MONTHS, TEAMS, getFilteredData, getKPIs } from '../../data/mockData'
import P1Filters        from './P1Filters'
import P1KpiRow         from './P1KpiRow'
import P1TeamTable      from './P1TeamTable'
import P1TrendChart     from './P1TrendChart'
import P1BarChart       from './P1BarChart'
import P1BusinessImpact from './P1BusinessImpact'

export default function Project1() {
  const [month, setMonth] = useState(MONTHS[0])
  const [team,  setTeam]  = useState(TEAMS[0])

  const rows = getFilteredData(month, team)
  const kpis = getKPIs(month, team)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

      {/* Page header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', paddingBottom: '0.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{
            display: 'inline-block', width: 'fit-content', fontSize: '11px', fontWeight: 700,
            padding: '0.2rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.08em',
            background: 'rgba(0,229,200,0.12)', color: '#00e5c8',
          }}>Project #1</span>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#e8eeff', letterSpacing: '-0.02em', margin: 0 }}>Token Analytics</h1>
          <p style={{ fontSize: '0.875rem', color: '#6b7db3', margin: 0 }}>
            AI spend · outcomes · ROI by team · {month} · {team}
          </p>
        </div>
        <P1Filters month={month} team={team} onMonthChange={setMonth} onTeamChange={setTeam} />
      </div>

      {/* KPIs */}
      <P1KpiRow kpis={kpis} />

      {/* Charts row — items-start prevents Business Impact from stretching */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
        <P1TrendChart />
        <P1BusinessImpact kpis={kpis} />
      </div>

      {/* Bar chart */}
      <P1BarChart month={month} />

      {/* Team table */}
      <P1TeamTable rows={rows} />

      <p style={{ fontSize: '11px', textAlign: 'center', color: '#2a3f80', paddingBottom: '1rem' }}>
        Illustrative mock data · Token Analytics · Portfolio Project #1
      </p>
    </div>
  )
}
