import React, {useState, useEffect} from 'react'

const HookMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e: MouseEvent) => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // This will mimic has ComponentDidMount()
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('Remove the component')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  // This means it will not render continuously, and only will render at the initial time

  return (
    <div>
      Hooks X - {x} & Y - {y}
    </div>
  )
}

export default HookMouse