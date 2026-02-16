import { useState } from 'react'
import './App.css'
function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='counter'>
        <h1>Count {count}</h1>

        <div id='btn'>
          <button onClick={()=> setCount(count+1)}>Increase</button>
          <button onClick={()=> setCount(0)}>Reset</button>
          <button  onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App

