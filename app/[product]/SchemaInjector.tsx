'use client'

import { useEffect } from 'react'

export default function SchemaInjector({ schema }: { schema: object }) {
  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(schema)
    document.head.appendChild(el)
    return () => { document.head.removeChild(el) }
  }, [schema])
  return null
}
