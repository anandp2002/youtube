import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link
            key={video.id}
            to={`/watch?v=${video.id}`}
            className="p-2 md:p-3"
          >
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <div>
          <Shimmer />
        </div>
      )}
    </div>
  );
}

export default VideoContainer;
