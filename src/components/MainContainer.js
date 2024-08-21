import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="pt-3 ml-4 overflow-y-auto mt-20">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
