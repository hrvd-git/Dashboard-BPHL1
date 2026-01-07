import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/Dashboard'
import AppEmbed from './pages/AppEmbed'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-foreground flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Header />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/apps/:app" element={<AppEmbed />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
