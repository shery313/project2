import React, { useState, useEffect } from 'react';
import apiInstance from '../utils/axios';
import Reply from './Replay';

function Comment({ postId,userId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    apiInstance.get(`/posts/${postId}/comments/`)
      .then(res => setComments(res.data))
      .catch(err => console.error(err));
  }, [postId]);

  const handleCommentSubmit = () => {
    apiInstance.post(`/posts/${postId}/comments/${userId}`, { content: newComment })
      .then(res => {
        setComments([...comments, res.data]);
        setNewComment("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.user}: {comment.content}</p>
          <Reply commentId={comment.id} />
        </div>
      ))}
      <textarea className='border block md:w-[500px] my-1 rounded-lg p-2 w-full ' value={newComment} onChange={(e) => setNewComment(e.target.value)} />
      <button onClick={handleCommentSubmit}>Add Comment</button>
    </div>
  );
}

export default Comment;
