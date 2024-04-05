import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import ChatBox from "./ChatBox";

const WatchPage = () => {
  const location = useLocation(); //useLocation from react-router-dom:
  //Imports the useLocation hook from react-router-dom, 
  //used to access information about the current URL path and search parameters.
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v"); // Assuming the video ID parameter is named "v"

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // Error handling and video ID validation (optional)
  if (!videoId || videoId.length !== 11) {
    console.error("Invalid video ID. Please provide a valid YouTube video ID.");
    // Optionally, redirect to an error page or display a placeholder message
    return <div>Error: Invalid video ID.</div>;
  }

  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className=" m-8 ml-36 ">
      <iframe
        width="1040"
        height="585"
        src={youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentContainer/>
      <ChatBox/>
    </div>
  );
};

export default WatchPage;
