import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch , useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeid } from '../utils/helper';

const ChatBox = () => {


  const[liveMessage , setliveMessage] = useState("")
 
   const dispatch = useDispatch() ;

   const chatMessage = useSelector((store) =>  store.chat.messages) // subscribing to the store

   useEffect(() => {
    const i  = setInterval(()=> {

    
   dispatch(
    addMessage({
      name : generateRandomNames(30) ,
      message : makeid(30) ,
    })
    
   )
  },6000)

  return () => clearInterval(i)


   },[])



  return (
    <div>
    <div className= "w-[25rem] h-96 bg-slate-200 overflow-scroll flex flex-col-reverse p-2 scroll">
      {
      chatMessage.map((c,i)  =>  (
      <ChatMessage key={i} name ={c.name} message = {c.message}/>) )
}  
      
      
      
     
    </div>
    <form className="" onSubmit={(e) => {
      e.preventDefault();
      dispatch(addMessage(
        {
          name : "shivang" ,
          message : liveMessage
        }
      ))
    }}>
    <input type='text' className= "bg-slate-200 w-60" value={liveMessage} onChange={(e)=>{
      setliveMessage(e.target.value)
    }}></input>
    <button className="bg-purple-300 rounded-md">submit</button>
    </form>
    </div>
    
  )   
}

export default ChatBox
