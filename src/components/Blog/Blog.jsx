import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './blog.css';
import '../Community/community.css';
import image from './image.svg'; // 이미지 파일 import, 각 포스트마다 다른 이미지를 사용할 경우 변경 필요

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    { id: 1, title: '[React] ScrollToTop으로 페이지 이동 시 화면 상단이 나타나게 구현하기', description: '프로젝트의 배포를 진행하면서 페이지를 개발하였는데...', imageUrl: image },
    { id: 2, title: 'React Hooks의 useEffect 이해하기', description: 'useEffect는 리액트의 핵심 훅으로, 부수 효과를 처리하는 데 사용됩니다...', imageUrl: image },
    { id: 3, title: 'Post 3', description: 'This is the third post.', imageUrl: image },
    { id: 4, title: 'Post 4', description: 'This is the fourth post.', imageUrl: image },
    { id: 5, title: 'Post 5', description: 'This is the fifth post.', imageUrl: image },
    { id: 6, title: 'Post 6', description: 'This is the sixth post.', imageUrl: image },
    { id: 7, title: 'Post 7', description: 'This is the seventh post.', imageUrl: image },
    { id: 8, title: 'Post 8', description: 'This is the eighth post.', imageUrl: image },
  ];

  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // 한 페이지에 표시될 게시물 수
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="blog-card" 
            onClick={() => handlePostClick(post.id)}
          >
          <div className="blog-image-container">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
          </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination-wrapper">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            이전
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            다음
          </button>
        </div>
    </div>
  );
};

export default Blog;
