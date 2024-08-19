import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-wrap justify-center">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={'/watch?v=' + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      ) : (
        <div>Loading videos...</div> // Display loading message while data is being fetched
      )}
    </div>
  );
}

export default VideoContainer;
