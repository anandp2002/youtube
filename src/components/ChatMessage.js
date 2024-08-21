import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center rounded-lg my-2 shadow-sm p-2 bg-gray-200">
      <img
        className="h-5 "
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <h1 className="font-bold mr-2 ml-1">{name}</h1>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
