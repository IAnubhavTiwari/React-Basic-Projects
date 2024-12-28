import { useState } from 'react'



function App() {

  
  const[Counter, setCount] = useState(0)
  
  const addValue = () => {
    setCount(Counter+1)
    console.log(Counter)
  }
  const removeValue = () => {
    setCount(Counter-1)
    console.log(Counter)
  }
 

  return (
    <>
      <h1>Counter By Anubhav</h1>
      <h1>Counter: {Counter}</h1>
      <button onClick= {addValue}>Add Value</button> {" "}
      <button onClick= {removeValue}>Remove Value</button>
      <p>Footer: {Counter}</p>
    </>
  )
}

export default App
