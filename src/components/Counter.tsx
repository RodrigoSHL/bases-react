import { useState } from "react"
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleCount = () => {
      setCount(count + 1)
    }

    const handleCountReset = () => {
      setCount(0)
    }
  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={handleCount}>Click me</button>
    <button style={{margin: '1rem'}} onClick={handleCountReset}>Reset</button>

    </>
    
  )
}

export default Counter