import React, { useState } from 'react'

export default function InputTesting() {
  const [ value, setvalue]=useState("")
  function handleChange(event){
    setvalue(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div>
      <input type="text" value={value} onChange={handleChange}/>
      <h1>{value}</h1>
    </div>
  )
}
