import React from 'react';

const CommentItem = ({ authorImageUrl, authorName, text }) => {
  return (
    <div className="mt-3 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <img
          className="w-8 h-8 ml-2 mt-2 mr-2 rounded-full"
          alt="author"
          src={authorImageUrl}
        />
        <h1 className="ml-2 font-semibold">{authorName}</h1>
      </div>
      <p className="ml-14 -mt-2">{text}</p>
    </div>
  );
};

export default CommentItem;
