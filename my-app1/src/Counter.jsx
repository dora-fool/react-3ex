import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount (count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount (count - 1)
    }
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
