import React from 'react'

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="p-4 bg-white/6 rounded-lg shadow-sm border border-muted/10">
      <div className="text-sm text-muted/80">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card title="Active users" value="1,254" />
        <Card title="New signups" value="312" />
        <Card title="Errors" value="2" />
      </section>

      <section className="bg-white/3 rounded-lg p-4 border border-muted/10">
        <h2 className="text-lg font-medium mb-4">Recent activity</h2>
        <div className="text-sm text-muted/80">(table placeholder)</div>
      </section>
    </div>
  )
}
