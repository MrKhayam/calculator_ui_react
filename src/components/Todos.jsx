import React from 'react'

const Todos = ({todoText}) => {
  return (
    <>
    <div className="w-full min-h-10 p-3 rounded text-black bg-[#dadada]">
    {todoText}
    </div>
    </>
  )
}

export default Todos