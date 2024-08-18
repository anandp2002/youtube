import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col py-3 my-2 shadow-md">
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 cursor-pointer"
          alt="menu"
          src="https://w7.pngwing.com/pngs/78/540/png-transparent-computer-icons-hamburger-button-menu-menu-desktop-wallpaper-menu-line.png"
        />
        <a href="/">
          <img
            className="h-5"
            alt="youtube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="h-7 border border-gray-900 w-9/12 rounded-l-full p-2"
        ></input>
        <button className="h-7 border border-gray-900 rounded-r-full px-2">
          ⌕
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <img
          className="h-8 items-center"
          alt="user logo"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Header;
