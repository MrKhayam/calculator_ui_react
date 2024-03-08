import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'

const App = () => {
  const [todo, setTodo] = useState("");
  const [chk, setChk] = useState("");


  return (
    <>
    <div className='bg-zinc-900 w-full h-screen text-white'>
    <Header></Header>
    <div className="main w-full h-auto p-5 flex items-center justify-center flex-col">
      <h1 className='text-xl font-semibold text-center'>Add Your Todos</h1>
      <input type="text" onChange={(e) => setTodo(e.target.value)} className='bg-[#dadada] mt-8 text-black w-full h-10 rounded p-3 outline-none' />
      <button className="w-full h-10 bg-slate-800 rounded mt-3 text-white border border-slate-800 transition-all active:border-slate-100" onClick={(e => setChk(e.type))}>Add</button>
    </div>
    <div className='w-full h-auto p-5 mt-8 flex flex-col gap-3'>
    {chk=== "click" ? (
      <Todos todoText = {todo}></Todos>
    ) : null}
    </div>
    </div>
    </>
  )
}

export default App