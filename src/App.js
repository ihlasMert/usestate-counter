import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const onFirst = count === 0

  return (
    <div className='container'>
      <p>The count is: {count}</p>
      <button onClick={decrement} disabled={onFirst}>
        -
      </button>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default App
