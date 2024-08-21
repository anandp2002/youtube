import React from 'react';

const CommentItem = ({ authorImageUrl, authorName, text }) => {
  return (
    <div className="mt-4 mb-4 mr-6 bg-gray-200 rounded-lg">
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
