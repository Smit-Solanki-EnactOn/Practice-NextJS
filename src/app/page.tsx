'use client'
import UseContext from "@/components/UseContext/UseContext";
import UseEffect from "@/components/UseEffect/UseEffect";
import React, { useRef } from "react";


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

            {/* UseEffect */}
            {/* <UseEffect /> */}

            {/* UseContext */}
            <UseContext />

        </div>
    )
}