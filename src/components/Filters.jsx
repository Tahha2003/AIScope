// Filters — month picker + team selector, matching the dark-navy aesthetic
import { MONTHS, TEAMS } from '../data/mockData'

function Select({ value, onChange, options, icon }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm pointer-events-none">
        {icon}
      </span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="appearance-none pl-8 pr-8 py-2 rounded-xl text-sm font-medium outline-none cursor-pointer transition-colors"
        style={{
          background: '#162460',
          border: '1px solid #1e2f6a',
          color: '#e2e8f0',
        }}
      >
        {options.map(o => (
          <option key={o} value={o} style={{ background: '#0d1b45' }}>
            {o}
          </option>
        ))}
      </select>
      {/* chevron */}
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
        style={{ color: '#6b7db3' }}
      >
        ▾
      </span>
    </div>
  )
}

export default function Filters({ month, team, onMonthChange, onTeamChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select
        value={month}
        onChange={onMonthChange}
        options={MONTHS}
        icon="📅"
      />
      <Select
        value={team}
        onChange={onTeamChange}
        options={TEAMS}
        icon="👥"
      />
    </div>
  )
}
