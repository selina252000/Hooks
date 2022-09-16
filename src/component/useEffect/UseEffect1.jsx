import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
  const [count,setCount] = useState(0);

  useEffect(() =>{
    document.title = `Chat (${count})`

  } )
  return (
    <div>
      <h1>{count} </h1>
      <button className="btn" onClick ={
        () => setCount(count +1)
      }> Click😁</button>
    </div>
  )
}


export default UseEffect1