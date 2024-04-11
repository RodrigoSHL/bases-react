import { useState } from "react"
import './Counter.css'
import styled from "@emotion/styled"

const BtnDiminish = styled.button`
  color: tomato;
  background-color: black;
  
  &:hover {
    background-color: tomato;
    color: black;
    font-weight: bold;
  }`

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleMin = () => {
    setCount(count - 1)
  }

  const handleCountReset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <BtnDiminish onClick={handleCount}>+</BtnDiminish>
      <button style={{ margin: '1rem', backgroundColor: 'tomato' }} onClick={handleCountReset}>Reset</button>
      <BtnDiminish onClick={handleMin}>-</BtnDiminish>

    </div>

  )
}

export default Counter