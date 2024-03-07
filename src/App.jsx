import React from 'react'
import Buttons from './components/Buttons'

const App = () => {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ]
  return (
    <>
    <div className="main w-full h-screen bg-zinc-900 flex justify-center items-center">

    <div className="p-5 border rounded-md flex flex-col justify-center calculator w-96 bg-[#626262] h-auto">
    <input type="text" id="inp" className='h-12 p-3 text-lg rounded outline-none' />
    <div className="buttons flex justify-center flex-wrap gap-3 w-3/4 mx-auto mt-8 h-full">
      {
        btns.map((i,index) => <Buttons num={i}></Buttons>)
      }
    </div>
    </div>
    
    </div>
    </>
  )
}

export default App