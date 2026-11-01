import Select from '../../components/ui/Select'
import { MONTHS, TEAMS } from '../../data/mockData'

export default function P1Filters({ month, team, onMonthChange, onTeamChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
      <Select value={month} onChange={onMonthChange} options={MONTHS} icon="📅" />
      <Select value={team}  onChange={onTeamChange}  options={TEAMS}  icon="👥" />
    </div>
  )
}
