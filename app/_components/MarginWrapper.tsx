'use client'
import React from 'react'

const MarginWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='2xl:max-w-7xl max-w-6xl m-auto'>{children}</div>
  )
}

export default MarginWrapper