import { useState } from "react"
import './Counter.css'
import styled from "@emotion/styled"
import { handleClick } from "../helpers/handleClick"

export const BtnDiminish = styled.button`
  color: tomato;
  background-color: black;
  
  &:hover {
    background-color: tomato;
    color: black;
    font-weight: bold;
  }`

const Counter = () => {

  const [count, setCount] = useState(0)

  const handleCountReset = () => {
    setCount(0)
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <BtnDiminish onClick={() => {
        setCount(handleClick(count, 1))
      }}>+</BtnDiminish>
      <button style={{ margin: '1rem', backgroundColor: 'tomato' }} onClick={handleCountReset}>Reset</button>
      <BtnDiminish onClick={() => {
        setCount(handleClick(count, -1))
      }}>-</BtnDiminish>
    </div>

  )
}

export default Counter