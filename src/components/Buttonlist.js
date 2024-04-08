import React, { useState } from 'react'
import{useDispatch} from 'react-redux'
import { setCategory } from '../utils/appSlice'


const Btnlist = [ "All", "trending","games","movies","comedy","tech","news","motivation","sports","new to me","old songs"]



const Buttonlist = () => {

  const dispatch = useDispatch()
  const [active , setActive] = useState("All")
  const getVideoByTag = (tag) => {

    if (active!== tag){
      setActive(tag)
      dispatch(setCategory(tag));
    }

    

  }
  return (
    <div className='flex'>

    


      {
      
     Btnlist.map((btn , index) => {

      return (
        <div key={index}>
      <button onClick={() => {getVideoByTag(btn)}}  className={`${active == btn  ? " p-2 m-2 bg-black text-white rounded-md w-24 h- 5 " : "p-2 m-2 bg-slate-300 rounded-md w-24 h- 5"}`} >{btn}</button>
      </div>
      )
     })

    }

     
      
      

    </div>
  )
}

export default Buttonlist
