import React from 'react'
import { useParams } from 'react-router-dom'

export default function AppEmbed() {
  const { app } = useParams<{ app: string }>()
  const src = `/apps/${encodeURIComponent(app || '')}/index.html`

  return (
    <div className="h-[calc(100vh-4rem)] bg-surface rounded-md overflow-hidden border border-muted/10">
      <iframe
        src={src}
        className="w-full h-full border-0"
        sandbox="allow-scripts allow-forms allow-same-origin"
        title={app}
        loading="lazy"
      />
    </div>
  )
}
