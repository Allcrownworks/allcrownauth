import React from 'react'

const Input = ({icon:Icon,button:Button, ...props}) => {
  return (
    <div className='mb-6 relative'>
      <div className="absolute inset-y-0 flex left-0 items-center justfy-center pl-3 pointer-events-none">
        <Icon className="size-6 text-slate-50" />
      </div>
      <input
        {...props}
        className='w-full pl-12 pr-3 py-2 bg-transparent hover:backdrop-blur-3xl hover:bg-gradient-tr from-red-800 to-red-600 bg-opacity-80 rounded-lg  text-slate-50 placeholder-gray-300 duration-200 hover:border-b-4 cursor-pointer outline-none border-b-2'
      /> 
      {/* <Button
        className='w-full pl-12 pr-3 py-2 bg-transparent hover:backdrop-blur-3xl hover:bg-gradient-tr from-red-800 to-red-600 bg-opacity-80 rounded-lg  text-slate-50 placeholder-gray-300 duration-200 hover:border-b-4 cursor-pointer outline-none'     
      />     */}
    </div>
  )
}

export default Input
