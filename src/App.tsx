import React, { useState } from 'react';
import CV from './components/CV/CV';
import A4Container from './components/Layout/A4Container/A4Container';
import ReviewButton from './components/Feedback/ReviewButton/ReviewButton';
import FeedbackModal from './components/Feedback/FeedbackModal/FeedbackModal';
import CommentsSidebar from './components/Feedback/CommentsSidebar/CommentsSidebar';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.scss';

interface Comment {
  id: string;
  text: string;
  timestamp: number;
}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useLocalStorage<Comment[]>('cv-comments', []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveComment = (commentText: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text: commentText,
      timestamp: Date.now()
    };
    
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="app">
      <div className="app__main">
        <A4Container>
          <CV />
        </A4Container>
        
        <ReviewButton onClick={handleOpenModal} />
      </div>

      <CommentsSidebar 
        comments={comments} 
        onDeleteComment={handleDeleteComment}
      />

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveComment}
      />
    </div>
  );
};

export default App;