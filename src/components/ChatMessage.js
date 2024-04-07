import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className=' p-2 flex border-rose-400'>
       <img className='w-6 h-4 rounded-3xl'
      alt='hk'
      src='https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' />
      <span className='font-bold'>{name}</span> :
      <span>{message}</span>
    </div>
    
  )
}

export default ChatMessage
