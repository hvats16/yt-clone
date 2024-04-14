import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { VideoCard } from "./VideoCard";

export const VideoConatiner = () => {
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
      {videos && videos.map((video) => (
        <VideoCard key={video.id} videosInfo={video} />
      ))}
    </div>
  );
};
