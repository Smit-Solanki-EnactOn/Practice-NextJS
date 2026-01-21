import React from 'react'

interface EmployeeProps {
  name?: string;
}

const employee = ({name} : EmployeeProps) => {
  return (
    <>
    {name && (
      <p>Employee name - {name}</p>
    )}
    </>
  )
}

export default employee