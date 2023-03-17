// import React, { useState } from 'react'

// function Form() {
//   const [userName,setUserName]=useState("")
//   const [mobileNo,setMobileNo]=useState("")
//   const [isSubmitted,setIsSubmitted]=useState(false)

//   function handleInput(event){
// console.log(event.target.value);
//   }
//   console.log(userName,mobileNo);
//   console.log(isSubmitted);
//   return (
//     <div
//       style={{
//         height: '100vh',
//       }}
//       className="flex flex-col items-center w-full p-10">      
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//           Name
//         </label>
//         <input onChange={(event)=>setUserName(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//           Mobile
//         </label>
//         <input onChange={(event)=>setMobileNo(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
//       </div>
//       <button onClick={()=>setIsSubmitted(true)} className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//         Sign In
//       </button>
//       <h1 className='text-red mt-5'>
//       {(!userName || !mobileNo) && isSubmitted ? "Please fill required fields" : ""}

//       </h1>
//     </div>
//   )
// }

// export default Form

import React, { useState } from 'react'

function Form() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    mobile: "",
    location: "",
    password: ""
  })
  cont [isSubmitted,setIsSubmitted]=useState(false)

  function handleInput(e) {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value
    })
  }

  console.log(formDetails);

  function callAPI(){
    fetch("https://google.com",formDetails)
  }

  callAPI()

  return (
    <>
      <div>
        Name
        <input name='name' onChange={handleInput} className='border m-10' type="text" />
      </div>
      {!formDetails.name && isSubmitted ? "Fill Name Field" : ''}
      <div>
        Mobile
        <input name='mobile' onChange={handleInput} className='border m-10' type="text" />
      </div>
      <div>
        Location
        <input name='location' onChange={handleInput} className='border m-10' type="text" />
      </div>
      <div>
        Password
        <input name='password' onChange={handleInput} className='border m-10' type="text" />
      </div>
    </>
  )
}

export default Form