"use client";

import { useState } from "react";

interface Comment {
  id: number;
  content: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        content: newComment.trim(),
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>

      <div className="mt-4 space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border rounded-md bg-gray-50 flex justify-between items-start"
            >
              <p className="text-gray-800">{comment.content}</p>
              <button
                onClick={() => handleCommentDelete(comment.id)}
                className="ml-4 text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-6">
        <textarea
          className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-600"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
