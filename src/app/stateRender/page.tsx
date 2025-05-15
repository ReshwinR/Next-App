'use client'
import React, { useState } from 'react'

const StateRender = () => {
const [name] = useState('Hii')
  return (
    <div>StateRender {name}</div>
  )
}

export default StateRender