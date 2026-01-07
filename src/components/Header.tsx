import React from 'react'

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-muted/30 bg-surface/80">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-muted/50">☰</button>
        <h1 className="text-lg font-medium">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="px-3 py-1 rounded-md border border-muted/30 bg-transparent text-sm focus:outline-none"
        />
        <div className="w-8 h-8 rounded-full bg-muted/40 flex items-center justify-center text-sm">ME</div>
      </div>
    </header>
  )
}
