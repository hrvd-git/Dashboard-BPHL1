import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/reports', label: 'Reports' },
  { to: '/settings', label: 'Settings' },
  { to: '/apps/bphl', label: 'Arsip Digital (BPHL)' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-muted/70 border-r border-muted/30 p-6 flex flex-col">
      <div className="mb-6">
        <div className="text-xl font-semibold text-foreground">My Dashboard</div>
        <div className="text-sm text-muted">Baseline • Clean & professional</div>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 mb-1 text-sm font-medium transition-colors ${
                isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted/50'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="text-xs text-muted/80 mt-4">© {new Date().getFullYear()}</div>
    </aside>
  )
}
