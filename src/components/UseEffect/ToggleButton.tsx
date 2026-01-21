import React from 'react'

const ToggleButton = () => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <button
      className={`${toggle ? "bg-black text-white" : "text-black bg-gray-300"}`}
      onClick={() => setToggle(!toggle)}>{toggle ? "True" : "False"}</button>
  )
}

export default ToggleButton