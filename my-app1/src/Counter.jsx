import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount (prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount))
  }

  return (
    <div>
      <h2>Счетчик</h2>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <button onClick={decrement}>-</button>
        <span style={{color: count === 0 ? 'red' : 'inherit'}}>
          {count}
        </span>
        <button onClick={increment}>+</button>
      </div>
      { count === 0 && (
        <p style={{color: 'red'}}>
          Пожалуйста, измените количество, оно не может быть равно 0
        </p>
      )}
    </div>
  )
}

export default Counter
