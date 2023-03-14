import { useState } from "react"
import ReadMore from "./ReadMore"

function CounterApp() {
    const [counter, setCounter] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <>
            <div
                style={{
                    height: '100vh',
                    backgroundColor: isDarkMode ? "black" : "white",
                    color: isDarkMode ? "white" : "black",
                }} className="flex flex-col items-center w-full p-10">
                <button
                    disabled={counter > 49}
                    onClick={() => setIsDarkMode(!isDarkMode)} className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Dark Mode
                </button>
                <h1 className="text-2xl font-bold">Counter App</h1>
                <h1 className="text-2xl font-bold mt-10">Value : {counter}</h1>
                <div className="mt-10">
                    <button
                        disabled={counter > 49}
                        onClick={() => setCounter(counter + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        +
                    </button>
                    <button
                        onClick={() => setCounter(0)} className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Reset
                    </button>
                    <button
                        disabled={counter <= 0}
                        onClick={() => setCounter(counter - 1)} className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        -
                    </button>
                </div>
                <ReadMore isDarkMode={isDarkMode} />
            </div>
        </>
    )
}

export default CounterApp