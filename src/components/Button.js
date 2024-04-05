import React from 'react'

const Button = ({names}) => {
  return (
    <div >
      <button className=' p-2 m-2 bg-slate-300 rounded-md w-24 h- 5'>{names}</button>
    </div>
  )
}

export default Button;
