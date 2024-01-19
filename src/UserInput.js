import React, { useState } from 'react'

const UserInput = () => {
    const [input,setInput]=useState("")
  return (
    <>
    <label>Enter Input</label>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
    <hr />
    <h2>Your Input data is :<span>{input}</span></h2>
    </>
  )
}

export default UserInput