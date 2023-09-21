"use client";

import { useState, useRef } from "react"
import { useGreeting } from "../hooks/useGreeting"

const Greeting = () => {
    const [newGreeting, setNewGreeting] = useState<string>()
    const newGreetingInputRef = useRef<HTMLInputElement>(null)
 
  const {
    address,
    greeting,
    getGreetingLoading,
    getGreetingError,
    setGreeting,
    setGreetingLoading,
    setGreetingError,
  } = useGreeting({ newGreeting })

    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-4">
                <p className="text-sm text-gray-500 text-center">Greeting from the blockchain:</p>
              { getGreetingLoading ? (
                <p className="text-lg text-center text-gray-500 italic">Loading...</p>
              ) : (
                <p className="text-lg text-center">{ greeting }</p>
              )}
             
            </div>
            <div className="space-y-8">
              <div className="flex flex-col space-y-4">
                <input
                  className="border p-4 text-center"
                  onChange={ e => setNewGreeting(e.target.value)}
                  placeholder="Write a new greeting"
                  ref={newGreetingInputRef}
                  disabled={!address}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-8 rounded-md"
                  onClick={setGreeting}
                  disabled={!address || !newGreeting || setGreetingLoading}
                >
                  { !setGreetingLoading ? `Set new greeting on the blockchain` : `Setting...` }
                </button>
                { !address && <p className="text-sm text-gray-500 text-center">Connect your wallet to set a new greeting</p>}
                { address && !newGreeting && <p className="text-sm text-gray-500 text-center">Type something to set a new greeting</p>}
              </div>
            </div>
        </div>
    )
}

export { Greeting }