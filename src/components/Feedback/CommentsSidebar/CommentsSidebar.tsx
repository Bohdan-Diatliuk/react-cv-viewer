import React from 'react';
import CommentItem from './CommentItem/CommentItem';
import './CommentsSidebar.scss';

interface Comment {
  id: string;
  text: string;
  timestamp: number;
}

interface CommentsSidebarProps {
  comments: Comment[];
  onDeleteComment: (id: string) => void;
}

const CommentsSidebar: React.FC<CommentsSidebarProps> = ({ comments, onDeleteComment }) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <aside className="comments-sidebar comments-sidebar--visible">
      <div className="comments-sidebar__header">
        <h3 className="comments-sidebar__title">Comments</h3>
        <span className="comments-sidebar__count">{comments.length}</span>
      </div>

      <div className="comments-sidebar__list">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onDelete={onDeleteComment}
          />
        ))}
      </div>
    </aside>
  );
};

export default CommentsSidebar;