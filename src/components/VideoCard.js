import React from 'react';

// Utility function to format numbers
const formatNumber = (num) => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}k`;
  }
  return num.toString();
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const viewCount = formatNumber(statistics.viewCount);

  return (
    <div className="w-72 shadow-md rounded-md m-2 p-2">
      <img
        className="rounded-md"
        alt="video thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="py-1 font-medium line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
