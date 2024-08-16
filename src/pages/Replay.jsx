import React, { useState, useEffect } from 'react';
import apiInstance from '../utils/axios';

function Reply({ commentId, parentId = null }) {
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState("");

  useEffect(() => {
    apiInstance.get(`/comments/${commentId}/replies/`)
      .then(res => setReplies(res.data))
      .catch(err => console.error(err));
  }, [commentId]);

  const handleReplySubmit = () => {
    const payload = { content: newReply };
    if (parentId) payload.parent = parentId;

    apiInstance.post(`/comments/${commentId}/replies/`, payload)
      .then(res => {
        setReplies([...replies, res.data]);
        setNewReply("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ marginLeft: parentId ? '20px' : '0px' }}>
      {replies.map(reply => (
        <div key={reply.id}>
          <p>{reply.user}: {reply.content}</p>
          <Reply commentId={commentId} parentId={reply.id} />
        </div>
      ))}
      <textarea  className='border block md:w-[500px] my-1 rounded-lg p-2 w-full ' value={newReply} onChange={(e) => setNewReply(e.target.value)} />
      <button onClick={handleReplySubmit}>Add Reply</button>
    </div>
  );
}

export default Reply;
