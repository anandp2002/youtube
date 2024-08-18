import React from 'react';

const Header = () => {
  return (
    <div className="grid grid-flow-col py-3 m-2 shadow-lg">
      <div className="col-span-1 flex">
        <img
          className="h-5"
          alt="menu"
          src="https://w7.pngwing.com/pngs/78/540/png-transparent-computer-icons-hamburger-button-menu-menu-desktop-wallpaper-menu-line.png"
        />
        <img
          className="h-5"
          alt="youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="h-7 border border-gray-900 w-9/12 rounded-l-full"
        ></input>
        <button className="h-7 border border-gray-900 rounded-r-full px-2">
          Search
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
