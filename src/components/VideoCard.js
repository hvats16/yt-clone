import React from "react";

export const VideoCard = ({ videosInfo }) => {
  const { snippet, statistics } = videosInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2">{channelTitle}</li>
        <li>{title}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
