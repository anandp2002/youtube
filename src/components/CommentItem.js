import React from 'react';

const CommentItem = ({ authorImageUrl, authorName, text }) => {
  return (
    <div className="m-4 bg-gray-200">
      <div className="flex">
        <img
          className="w-5 h-5 m-2 rounded-full"
          alt="author"
          src={authorImageUrl}
        />
        <h1 className="ml-2 font-semibold">{authorName}</h1>
      </div>
      <p className="ml-10">{text}</p>
    </div>
  );
};

export default CommentItem;
