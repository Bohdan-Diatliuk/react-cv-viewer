import React from "react";
import './CommentItem.scss';

interface Comment {
    id: string;
    text: string;
    timestamp: string;
}

interface CommentItemProps {
    comment: Comment;
    onDelete : (id: string) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onDelete }) => {
    const formatDate = (timestamp: string): string => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInMinutes = Math.floor(diffInMs / 60000);
        const diffInHours = Math.floor(diffInMs / 3600000);
        const diffInDays = Math.floor(diffInMs / 86400000);

        if (diffInMinutes < 1) {
            return 'Just now';
        }

        if (diffInMinutes < 60) {
            return `${diffInMinutes}m ago`;
        }

        if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        }

        if (diffInDays < 7) {
            return `${diffInDays}d ago`;
        }

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric'});
    };

    return (
        <div className="comment-item">
            <div className="comment-item__header">
                <span className="comment-item__date">{formatDate(comment.timestamp)}</span>
                <button
                    className="comment-item__delete"
                    onClick={() => onDelete(comment.id)}
                    aria-label="Delete comment"
                    >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                />
                </svg>
                </button>
            </div>
            <p className="comment-item__text">{comment.text}</p>
        </div>
    );
};

export default CommentItem;