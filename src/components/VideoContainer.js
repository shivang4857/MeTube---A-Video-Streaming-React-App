import React, { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from "../utils/constant";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
   const [videos , setVideos] = useState([]) // we are making usestate to trigger reconcilation process so every time api is called the state is updated.
   useEffect(( )=>{
      getVideos();
    },[])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };
//passing the prop info as videos data in the video card
// now mapping the videos inside the videos.map
  return <div className='flex flex-wrap'> 
    {videos.map(video => 
    <Link to ={"/watch?v=" + video.id}>
    < VideoCard key={video.id} info ={video} /></Link>   ) }
    
  </div>
   
  
}

export default VideoContainer
