import React from 'react';
import './BlogPost.css'; // 각 포스트에 공통으로 적용되는 스타일

const BlogPost2 = () => {
  return (
    <div className="blog-post">
      <h1>React Hooks의 useEffect 이해하기</h1>
      <hr />
      <p>useEffect는 리액트의 핵심 훅으로, 부수 효과를 처리하는 데 사용됩니다...</p>

      <h2>💡 useEffect의 기본 개념</h2>
      <p>useEffect는 컴포넌트가 렌더링된 후에 특정 작업을 수행하기 위한 훅입니다.</p>

      {/* 나머지 콘텐츠 */}
    </div>
  );
};

export default BlogPost2;
