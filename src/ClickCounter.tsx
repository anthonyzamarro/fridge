import { useState } from 'react'

export const ClickCounter = () => {
  const blah = 'hi'
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{blah}</p>
      <button onClick={() => setCount((c) => c + 1)}>Count {count} </button>
    </div>
  )
}
