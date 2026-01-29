/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import './FeedbackModal.scss';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (feedback: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, onSave }) => {
    const [comment, setComment] = useState<string>("");

    useEffect(() => {
        if (!isOpen) {
            setComment("");
        }
    }, [isOpen]);

    const handleSave = () => {
        if (comment.trim()) {
            onSave(comment.trim());
            setComment("");
            onClose();
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="feedback-modal" onClick={onClose} onKeyDown={handleKeyPress}>
            <div className="feedback-modal__content" onClick={(event) => event.stopPropagation()}>
                <div className="feedback-modal__header">
                    <h2 className="feedback-modal__title">Leave a Review</h2>
                    <button
                        className="feedback-modal__close"
                        onClick={onClose}
                        aria-label="Close modal"
                        >
                        x
                    </button>
                </div>

                <textarea
                    className="feedback-modal__textarea"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Enter your feedback here"
                    rows={6}
                    autoFocus
                    />

                <div>
                    <button
                        className="feedback-modal__button feedback-modal__button--cancel"
                        onClick={onClose}
                        >
                            Cancel
                    </button>
                    <button 
                        className="feedback-modal__button feedback-modal__button-save"
                        onClick={handleSave}
                        disabled={!comment.trim()}
                        >
                            Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;