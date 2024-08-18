import React from 'react';

const Button = ({ name }) => {
  return (
    <div className="px-4 mr-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg">
      <button>{name}</button>
    </div>
  );
};

export default Button;
