import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ythome from '../images/ythome.png';
import ytshorts from '../images/ytshorts.png';
import ytsubscriptions from '../images/ytsubscriptions.png';
import your_channel from '../images/your_channel.svg';
import ythistory from '../images/ythistory.png';
import ytplaylists from '../images/ytplaylists.png';
import ytyourvideos from '../images/ytyourvideos.png';
import ytwatchlater from '../images/ytwatchlater.png';
import ytlikedvideos from '../images/ytlikedvideos.png';
import yttrending from '../images/yttrending.png';
import ytshopping from '../images/ytshopping.png';
import ytmovies from '../images/ytmovies.png';
import ytlive from '../images/ytlive.png';
import ytgaming from '../images/ytgaming.png';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuItems = [
    { src: ythome, label: 'Home', path: '/' },
    { src: ytshorts, label: 'Shorts', path: '/' },
    { src: ytsubscriptions, label: 'Subscriptions', path: '/' },
    { src: your_channel, label: 'Your channel', path: '/' },
    { src: ythistory, label: 'History', path: '/' },
    { src: ytplaylists, label: 'Playlists', path: '/' },
    { src: ytyourvideos, label: 'Your videos', path: '/' },
    { src: ytwatchlater, label: 'Watch later', path: '/' },
    { src: ytlikedvideos, label: 'Liked', path: '/' },
    { src: yttrending, label: 'Trending', path: '/' },
    { src: ytshopping, label: 'Shopping', path: '/' },
    { src: ytmovies, label: 'Movies', path: '/' },
    { src: ytlive, label: 'Live', path: '/' },
    { src: ytgaming, label: 'Gaming', path: '/' },
  ];

  return (
    <div className="bg-slate-50 px-6 py-4 w-52 mt-16 fixed top-0 left-0 h-full overflow-y-auto scrollbar-hidden">
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 border rounded-lg"
          >
            <div className="">
              <img alt={item.label} className="h-6 mr-2" src={item.src} />
            </div>
            <div>
              <Link
                to={item.path}
                className="text-gray-700 font-semibold text-lg transition-colors"
              >
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
