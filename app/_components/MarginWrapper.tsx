'use client'
import React from 'react'

const MarginWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-20 px-6 md:px-8'>
      <main className='max-w-4xl m-auto'>
        {children}
      </main>
    </div>
  )
}

export default MarginWrapper