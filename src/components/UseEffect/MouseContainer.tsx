import React, { useState, Activity } from 'react'
import HookMouse from './HookMouse'
import ToggleButton from './ToggleButton'


const MouseContainer = () => {
  const [display, setdisplay] = useState(true)


  return (
    <div>
      <button onClick={() => setdisplay(!display)}>Toggle Display</button>
      <Activity mode={display ? "visible" : "hidden"}>
        <HookMouse />
        <ToggleButton />
      </Activity>
    </div>
  )
}

export default MouseContainer