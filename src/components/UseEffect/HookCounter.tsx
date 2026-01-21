import React, { useState, useEffect } from 'react'

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')


  // useEffect is placed inside the component so it can access the state and props without the additional code.
  // will execute/run after every render of the component
  useEffect(() => {
    console.log('updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

    </div>
  )
}

export default HookCounter