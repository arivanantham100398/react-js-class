import { useState } from "react"

function Calc() {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [result, setResult] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)

    function add() {
       setIsSubmitted(true)
       input1 > 0 && input2 > 0 && setResult(parseInt(input1) + parseInt(input2))
    }
    function sub() {
        setIsSubmitted(true)
        setResult(parseInt(input1) - parseInt(input2))
    }
    function multiply() {
        setIsSubmitted(true)
        setResult(parseInt(input1) * parseInt(input2))
    }
    function division() {
        setIsSubmitted(true)
        const value = parseInt(input1) / parseInt(input2)
        setResult(value.toFixed(2))
    }
    return (
        <div
            style={{
                height: '100vh',
            }}
            className="flex flex-col items-center w-full p-10">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Input 1
                </label>
                <input
                    onChange={(e) => setInput1(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Input 1"
                />
            </div>
            {(!input1 > 0) && isSubmitted ? <h1 className="text-red-700 my-3">Please fill Input1</h1> : ""}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Input 2
                </label>
                <input
                    onChange={(e) => setInput2(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Input 2"
                />
            </div>
            {(!input2 > 0) && isSubmitted ? <h1 className="text-red-700 my-3">Please fill Input2</h1> : ""}
            <div className="mt-5">
                <button onClick={add} className="border py-2 px-6">Add</button>
                <button onClick={sub} className="ml-3 border py-2 px-6">Sub</button>
                <button onClick={multiply} className="ml-3 border py-2 px-6">Multiply</button>
                <button onClick={division} className="ml-3 border py-2 px-6">Division</button>
            </div>
            <div>
                <h1 className="mt-5 2-xl font-bold">Result : {result}</h1>
            </div>
        </div>
    )
}

export default Calc