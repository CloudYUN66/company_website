'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Logo() {
  const [hasError, setHasError] = useState(false)

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-12 w-48">
        <Image
          src="/images/logo.png"
          alt="企业Logo"
          fill
          className={`object-contain ${hasError ? 'bg-white/5' : ''}`}
          onError={() => setHasError(true)}
          priority
          sizes="(max-width: 768px) 100vw, 192px"
        />
      </div>
    </Link>
  )
} 