"use client";

import { Trash2, Save, Edit3Icon } from "lucide-react";
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  content: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [editCommentId, setEditCommentId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState<string>("");

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

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

  const handleEditComment = (id: number, content: string) => {
    setEditCommentId(id);
    setEditContent(content);
  };

  const handleSaveComment = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editCommentId
          ? { ...comment, content: editContent.trim() }
          : comment
      )
    );
    setEditCommentId(null);
    setEditContent("");
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
              {editCommentId === comment.id ? (
                <textarea
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
              ) : (
                <p className="text-gray-800">{comment.content}</p>
              )}
              <div className="ml-4 flex space-x-4">
                {editCommentId === comment.id ? (
                  <button
                    onClick={handleSaveComment}
                    className="text-black hover:text-gray-800 "
                  >
                    <Save size={22} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditComment(comment.id, comment.content)}
                    className="text-black hover:text-gray-800"
                  >
                    <Edit3Icon size={22} />
                  </button>
                )}
                <button
                  onClick={() => handleCommentDelete(comment.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mt-6">
        <textarea
          className="w-full p-4 border rounded-md"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 border-none"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
