import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, openMenu, toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import menu from '../images/menu.png';
import closeMenuImage from '../images/closeMenuImage.png';
import searchLens from '../images/searchLens.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1); // New state variable
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleSearch = (searchQuery) => {
    console.log('Searching ' + searchQuery);
  };

  useEffect(() => {
    if (searchQuery === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1); // Reset selection
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        setShowSuggestions(true);
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

    // Reset selected suggestion when suggestions change
    setSelectedSuggestionIndex(-1);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, dispatch]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex((prevIndex) =>
          prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        if (
          selectedSuggestionIndex >= 0 &&
          selectedSuggestionIndex < suggestions.length
        ) {
          setSearchQuery(suggestions[selectedSuggestionIndex]);
          setShowSuggestions(false);
          // Optionally, you might want to perform a search here
        }
        break;
      default:
        break;
    }
  };

  //Check screen size and update iseMenuOpen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        dispatch(closeMenu());
      } else {
        dispatch(openMenu());
      }
    };
    window.addEventListener('resize', handleResize);
    // Call the function on initial render to set the initial state
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-slate-50 fixed top-0 left-0 right-0 z-50 ">
      <div className="grid grid-flow-col py-2 my-1">
        {/* Menu and Logo */}
        <div className="col-span-1 flex items-center">
          <img
            onClick={toggleMenuHandler}
            className="h-6 cursor-pointer"
            alt="Toggle Menu"
            src={isMenuOpen ? closeMenuImage : menu}
          />
          <a href="/" className="ml-1">
            <img
              className="h-5"
              alt="YouTube Logo"
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="col-span-1 md:col-span-10 lg:col-span-10 ml-2 relative">
          <div className="flex">
            <input
              type="text"
              className="h-10 bg-slate-50 border border-gray-400 w-full md:w-9/12 lg:w-9/12 rounded-l-full p-2 pl-3 focus:outline-none focus:border-gray-600"
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                // Delay hiding to allow click events to register
                setTimeout(() => setShowSuggestions(false), 100);
              }}
              onKeyDown={handleKeyDown} // Attach the keydown handler
            />
            <button
              onClick={() => handleSearch(searchQuery)}
              className="h-10 border border-gray-400 rounded-r-full px-3 bg-slate-50 hover:bg-slate-100"
            >
              <img className="h-8" src={searchLens} alt="search" />
            </button>
          </div>

          {/* Suggestions Box */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-full md:w-9/12 lg:w-9/12 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
              <ul>
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer hover:bg-gray-200 ${
                      index === selectedSuggestionIndex ? 'bg-gray-200' : ''
                    }`}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)} // Optional: highlight on hover
                    onMouseLeave={() => setSelectedSuggestionIndex(-1)} // Optional: remove highlight on mouse leave
                    onMouseDown={() => {
                      // Use onMouseDown instead of onClick to ensure it fires before onBlur
                      setSearchQuery(s);
                      setShowSuggestions(false);
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Icon */}
        <div className="lg:col-span-1 md:col-span-10 col-span-10 flex items-center justify-end pr-2 ml-2">
          <img
            className="h-6 pr-2"
            alt="User Avatar"
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
