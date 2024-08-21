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
    <div className="w-full mt-20 pt-6 pl-6 ">
      <div className="flex w-full ">
        <div className="">
          <iframe
            className=" rounded-lg"
            width="700"
            height="394"
            src={'https://www.youtube.com/embed/' + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full mx-6 mt-0">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
