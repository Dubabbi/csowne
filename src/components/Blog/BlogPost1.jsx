import React from 'react';
import './BlogPost.css'; // 각 포스트에 공통으로 적용되는 스타일

const BlogPost1 = () => {
  return (
    <div className="blog-post">
      <h1>[React] ScrollToTop으로 페이지 이동 시 화면 상단이 나타나게 구현하기</h1>
      <hr />
      <p>프로젝트의 배포를 진행하면서 페이지를 개발하였는데...</p>

      <h2>💡 ScrollTop 기능이 중요한 이유</h2>
      <p>
        리액트 기반의 애플리케이션은 <strong>SPA(Single Page Application)</strong> 구조를 사용합니다. SPA 구조에서는 페이지 전체를 새로고침하지 않고 컴포넌트만 교체되기 때문에, 페이지 이동 시 스크롤 위치가 유지되는 경우가 많습니다.
      </p>

      <h3>ScrollToTop 컴포넌트 구현하기</h3>
      <p>ScrollToTop 컴포넌트를 구현하는 방법은 매우 간단합니다...</p>

      {/* 나머지 콘텐츠 */}
    </div>
  );
};

export default BlogPost1;
