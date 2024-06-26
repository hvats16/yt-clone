import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    setVideos(response.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard videosInfo={video} />
          </Link>
        ))}
    </div>
  );
};


export default VideoConatiner;
