import React, {useState} from 'react';
import './BlogPost.css'; // 각 포스트에 공통으로 적용되는 스타일

const BlogPost2 = () => {
  const [comments, setComments] = useState([
    { id: 1, author: '🤍 Sonne 🤍', text: '안녕하세요!' },
  ]);
  const [newComment, setNewComment] = useState('');

  // 댓글 제출 처리
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, author: '🍀 소중한 방문자 🍀', text: newComment },
      ]);
      setNewComment(''); // 입력 필드 초기화
    }
  };
  return (
    <div className="blog-post">
      <h1>React Hooks의 useEffect 이해하기</h1>
      <hr />
      <p>useEffect는 리액트의 핵심 훅으로, 부수 효과를 처리하는 데 사용됩니다...</p>

      <h2>💡 useEffect의 기본 개념</h2>
      <p>useEffect는 컴포넌트가 렌더링된 후에 특정 작업을 수행하기 위한 훅입니다.</p>

     {/* 댓글 섹션 */}
     <hr />
      <div className="comment-section">
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            className="comment-input"
            placeholder="댓글을 입력해 주세요."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit" className="submit-button">➤</button>
        </form>
        <div className="comment-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="avatar"></div>
              <div className="comment-content">
                <div className="comment-header">{comment.author}</div>
                <p className="comment-text">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
