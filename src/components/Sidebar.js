import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="px-5 py-3 shadow-md w-34">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li className="pt-5">Music</li>
        <li>Your channel</li>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Liked videos</li>
        <li className="mt-5">Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
