 import React from 'react'
 
 // passing the info prop in the videocard
 const VideoCard = ({info}) => { 


//to make it work make sure to use error handling
  if (!info) {
    console.error('Video information is undefined or null');
    return null;
}
  
  const {snippet,statistics} = info ;
  const{ channelTitle,title,thumbnails} = snippet ;


   return (
     <div className=' bg-slate-200 shadow-md w-80 p-2 m-2 rounded-md ml-2 mt-6 cursor-pointer mb-3'>

        <img className='rounded-md' alt ="thumbnail" src={thumbnails.medium.url} />
        <ul>
         
         <li className='font-bold'>{title}</li>
         <li>{channelTitle}</li>
         <li className='font-serif'>view:{statistics.viewCount}</li>
        </ul> 

       
     </div>
   )
 }
 
 export default VideoCard ;
 