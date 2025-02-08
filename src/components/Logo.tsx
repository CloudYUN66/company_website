'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Logo() {
  const [hasError, setHasError] = useState(false)

  return (
    <Link href="/" className="flex items-center">
      <img
        src="/images/logo.png"
        alt="企业Logo"
        className={`h-12 w-auto object-contain ${hasError ? 'bg-white/5' : ''}`}
        onError={() => setHasError(true)}
      />
    </Link>
  )
} 