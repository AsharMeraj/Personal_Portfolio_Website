'use client'
import React from 'react'

const MarginWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-7xl m-auto px-6 md:px-8 py-30'>{children}</div>
  )
}

export default MarginWrapper