import { useEffect, useState } from "react"
import ReadMore from "./ReadMore"

function CounterApp() {
    const [counter, setCounter] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [search, setSearch] = useState("")

    // ComponentDidUpdate
    // useEffect(() => {
    //     console.log(search,"API Call Working");
    // })

    // ComponentDidUpdate with conditional
    // useEffect(() => {
    //    console.log(search,"API Call Working");
    // },[search])

    // ComponentDidMount will run one time if component renders
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, [])

    // ComponentWillUnMount will run while component changing

    useEffect(() => {
        const id = setInterval(() => {
            setCounter(counter + 1)
            console.log(counter);
        }, 4000)
        return () => {
            clearInterval(id)
        } //cleanup function
    })


    const handleInput = (e) => {
        setSearch(e.target.value)
    }

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
                <input
                    type="text"
                    name="search"
                    onChange={handleInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Your Item"
                />
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