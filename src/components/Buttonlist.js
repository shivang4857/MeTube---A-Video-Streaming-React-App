import React, { useState } from 'react'


const Btnlist = [ "trending","games","movies","comedy","tech","news","motivation","sports","new to me","old songs"]



const Buttonlist = () => {

  const [active , setActive] = useState(null)
  const getVideoByTag = (tag) => {
    alert(tag)
  }
  return (
    <div className='flex'>
      {
      
     Btnlist.map((btn , index) => {

      return (
        <div key={index}>
      <button onClick={() => {getVideoByTag(btn)}}  className=' p-2 m-2 bg-slate-300 rounded-md w-24 h- 5' >{btn}</button>
      </div>
      )
     })

    }

     
      
      

    </div>
  )
}

export default Buttonlist
