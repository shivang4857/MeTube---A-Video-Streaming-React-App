import React, { useEffect, useState } from "react";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEO_API,
} from "../utils/constant";
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";


const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);

  const { videos, category } = useSelector((store) => store.app);

  // we are making usestate to trigger reconcilation process so every time api is called the state is updated.

  const dispatch = useDispatch();
  useEffect(() => {
    if (category == "All") {
      getVideos();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  const fetchVideoByCategory = async () => {
    try {
      const catdata = await fetch(YOUTUBE_SEARCH_VIDEO_API + category);
      const jsondata = await catdata.json();
      //console.log(jsondata)
      dispatch(setHomeVideo(jsondata.items));
    } catch (error) {
      console.log(error);
    }
  };

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();

    dispatch(setHomeVideo(json.items));
  };
  //passing the prop info as videos data in the video card
  // now mapping the videos inside the videos.map
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${typeof video.id === "object" ? video.id.videoId : video.id }`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
