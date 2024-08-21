import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get('v');

  return (
    <div className="w-full mt-20 pt-6 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/4">
          <iframe
            className="rounded-lg w-full h-56 sm:h-72 md:h-96 lg:h-[394px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-2/4 md:ml-6 mt-4 md:mt-0">
          <LiveChat />
        </div>
      </div>
      <h1 className="font-bold text-xl">Comments</h1>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
