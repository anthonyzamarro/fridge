import { useState } from 'react'

export const ClickCounter = () => {
  const name = 'bob'
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setCount((c) => c + 1)}>Count {count} </button>
    </div>
  )
}
