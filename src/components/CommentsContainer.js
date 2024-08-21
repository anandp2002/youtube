import React, { useEffect, useState } from 'react';
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import CommentItem from './CommentItem';

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
      const json = await data.json();
      setComments(json.items);
    };
    getComments();
  }, [videoId]);

  return (
    <div className="">
      {comments.map((comment) => {
        const topLevelComment = comment.snippet.topLevelComment.snippet;

        return (
          <CommentItem
            key={comment.id}
            authorImageUrl={topLevelComment.authorProfileImageUrl}
            authorName={topLevelComment.authorDisplayName}
            text={topLevelComment.textDisplay}
          />
        );
      })}
    </div>
  );
};

export default CommentsContainer;
