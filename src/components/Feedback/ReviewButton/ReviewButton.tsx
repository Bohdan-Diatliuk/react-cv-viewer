import React from "react";
import './ReviewButton.scss';

interface ReviewButtonProps {
    onClick?: () => void;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({ onClick }) => {
    return (
        <button className="review-button" onClick={onClick}>
            <svg 
                className="review-button__icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                />
            </svg>
            <span className="review-button__text">Review</span>            
        </button>
    );
};

export default ReviewButton;