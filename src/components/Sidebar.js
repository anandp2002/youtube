import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="bg-green-200 px-6 py-4 shadow-lg w-40 mt-16 fixed top-0 left-0 h-full">
      <ul className="space-y-4">
        <li>
          <Link
            to={'/'}
            className="text-green-800 hover:text-green-600 font-semibold transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Shorts
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Subscriptions
        </li>
        <li className="pt-5 text-green-900 font-semibold">Library</li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Music
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Your channel
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          History
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Playlists
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Your videos
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Watch later
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Liked videos
        </li>
        <li className="mt-5 text-green-900 font-semibold">Explore</li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Sports
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Gaming
        </li>
        <li className="text-green-700 hover:text-green-500 cursor-pointer transition-colors">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
