import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (searchQuery === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    const getSearchSuggestions = async () => {
      try {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
        setShowSuggestions(true);
      } catch (error) {
        console.error('Failed to fetch suggestions:', error);
      }
    };
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white shadow-md">
      <div className="grid grid-flow-col py-2 my-1">
        {/* Menu and Logo */}
        <div className="col-span-1 flex items-center">
          <img
            onClick={toggleMenuHandler}
            className="h-5 cursor-pointer"
            alt="Toggle Menu"
            src="https://w7.pngwing.com/pngs/78/540/png-transparent-computer-icons-hamburger-button-menu-menu-desktop-wallpaper-menu-line.png"
          />
          <a href="/" className="ml-2">
            <img
              className="h-5"
              alt="YouTube Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="col-span-10">
          <div className="">
            <input
              type="text"
              className="h-10 border border-gray-400 w-9/12 rounded-l-full p-2"
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="h-10 border border-gray-400 rounded-r-full px-4 bg-gray-200">
              🔍
            </button>
          </div>

          {/* Suggestions Box */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-9/12 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
              <ul>
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="col-span-1 flex items-center justify-center">
          <img
            className="h-6"
            alt="User Avatar"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
