'use client'

import { useEffect } from 'react'

type Props = {
  id: string
  price: number
}

export default function FbViewContent({ id, price }: Props) {
  useEffect(() => {
    // @ts-ignore
    if (typeof window!== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'ViewContent', {
        content_ids: [id],
        content_type: 'product',
        value: price,
        currency: 'BRL',
      })
      console.log(`[FB Pixel] ViewContent disparado: ${id}`)
    }
  }, [id, price])

  return null
}