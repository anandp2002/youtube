import React from 'react';
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div
      className={`overflow-y-auto mt-24 bg-slate-50 transition-all duration-300 ${
        isMenuOpen ? 'lg:ml-28' : 'lg:ml-0'
      }`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
