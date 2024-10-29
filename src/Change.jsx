import React from 'react'
import { useState } from 'react'

function Change() {
    const [name, setName] = useState('Alfred');
    const handleClick = () => {
    setName('Otonbara');
  }
  return (
    <div>
      <p>I'm { name }</p>
      <button onClick={handleClick}>Name</button>
    </div>
  )
}

export default Change
