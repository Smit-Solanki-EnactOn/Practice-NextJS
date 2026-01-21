import React from 'react'
import Employee from "@/components/employee"
import User from "@/components/user";
import HookCounter from "@/components/UseEffect/HookCounter";
import HookMouse from "@/components/UseEffect/HookMouse";
import MouseContainer from "@/components/UseEffect/MouseContainer";
import DataFetching from "@/components/UseEffect/DataFetching";

const UseEffect = () => {
  return (
    <div>
      {/* <p>UseEffect</p>
            <HookCounter /> */}

      {/* <HookMouse /> */}

      {/* <MouseContainer /> */}

      {/* Data Fetching using useEffect */}
      <DataFetching />
    </div>
  )
}

export default UseEffect