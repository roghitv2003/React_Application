import React, { useEffect, useState } from 'react'
import './page2.css'
function Page2() {
    const [count,setCount] =useState(0)
    useEffect (()=>{
        console.log("useEffect called")
    }, [count])
  return (
    <div className='Counter'>
        <h1>The count is: {count}</h1>
        <div className='Counter-buttons'>
          <button className='button' onClick={()=>setCount(count+1)}>Increment</button>
          <button className='button' onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    </div>
  )
}
export default Page2
