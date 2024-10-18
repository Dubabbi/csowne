import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 사용하여 라우팅
import './blog.css'; // CSS 파일을 따로 분리

const Blog = () => {
  const navigate = useNavigate(); // navigate 훅 선언

  // 예시 게시글 목록 데이터
  const blogPosts = [
    { id: 1, title: 'Post 1', description: 'This is the first post.' },
    { id: 2, title: 'Post 2', description: 'This is the second post.' },
    { id: 3, title: 'Post 3', description: 'This is the third post.' },
    { id: 4, title: 'Post 4', description: 'This is the fourth post.' },
    { id: 5, title: 'Post 5', description: 'This is the fifth post.' },
    { id: 6, title: 'Post 6', description: 'This is the sixth post.' },
    { id: 7, title: 'Post 7', description: 'This is the seventh post.' },
    { id: 8, title: 'Post 8', description: 'This is the eighth post.' },
  ];

  // 카드 클릭 시 특정 게시글로 이동
  const handlePostClick = (id) => {
    navigate(`/blog/${id}`); // 해당 id의 블로그 포스트 상세 페이지로 이동
  };

  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="blog-card" 
            onClick={() => handlePostClick(post.id)} // 클릭 시 해당 포스트로 이동
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
