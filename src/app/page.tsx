'use client'
import React, { useRef } from "react";
import Employee from "@/components/employee"
import User from "@/components/user";
import HookCounter from "@/components/UseEffect/HookCounter";
import HookMouse from "@/components/UseEffect/HookMouse";
import MouseContainer from "@/components/UseEffect/MouseContainer";
import DataFetching from "@/components/UseEffect/DataFetching";

export default function Home() {
    const showEmployee = true;

    const inputRef = useRef<HTMLInputElement>(null);



    function updateInput() {
        if (inputRef.current) {
            inputRef.current.value = "1000";
            inputRef.current.style.color = "red"
            inputRef.current.focus()
        }
    }
    return (
        <div>
            <h1 className="text-xl">Home</h1>

            {/* Parents to child */}
            {/* {showEmployee ? (
                <>
                    <Employee />
                    <Employee name="Jane" />
                    <Employee name="Bob" />
                </>
            ) : (
                <p>No Employee</p>
            )} */}

            {/* Child to Parent - forwardRef */}
            {/* <h1>ForwardRef</h1>
            <User ref={inputRef} />
            <button onClick={updateInput}>Update input box</button> */}


            {/* <p>UseEffect</p>
            <HookCounter /> */}

            {/* <HookMouse /> */}

            {/* <MouseContainer /> */}

            {/* Data Fetching using useEffect */}
            <DataFetching />
        </div>
    )
}