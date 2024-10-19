import React, {useState} from 'react';
import './community.css';

const Community = () => {
  const studies = [
    {
      status: '진행중',
      title: '스터디 모집합니다.',
      description: '스터디원 구합니다!',
      author: '작성자',
      time: '12시간 전',
      likes: 0,
      views: 29
    },
    {
      status: '완료',
      title: '온라인 스터디',
      description: '모집 마감되었습니다.',
      author: '작성자',
      time: '14시간 전',
      likes: 0,
      views: 70
    },
    {
      status: '진행중',
      title: '운영체제 질문합니다.',
      description: '개념을 잘 모르겠네요...',
      author: '작성자',
      time: '20시간 전',
      likes: 0,
      views: 35
    },
    {
      status: '완료',
      title: '자바 딥 다이브 스터디 모집합니다.',
      description: '노션 + 디스코드로 관리 예정',
      author: '작성자',
      time: '1일 전',
      likes: 0,
      views: 88
    },
    {
      status: '완료',
      title: '자료구조 이해가 안 됩니다...',
      description: '코드 설명해 주실 분 구합니다!',
      author: '작성자',
      time: '1일 전',
      likes: 0,
      views: 67
    },
    {
      status: '진행중',
      title: '다들 취준 어떻게 하고 있나요?',
      description: '자소서랑 면접 준비 같이 할 사람 있으면 좋을 것 같아서요!',
      author: '작성자',
      time: '1일 전',
      likes: 0,
      views: 99
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // 한 페이지에 표시될 게시물 수
  const totalPages = Math.ceil(studies.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = studies.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="community-container">
      <div className="community-inner">
        <h1 className="community-title">함께 성장하는 새싹들</h1>
        <div className="study-list">
          {studies.map((study, index) => (
            <div key={index} className="study-item">
              <div className="study-header">
                <span className={`study-status ${study.status === '진행중' ? '진행중' : study.status === '완료' ? '완료' : ''}`}>
                  {study.status}
                </span>
              </div>
              <h3>{study.title}</h3>
              <p className="study-description">{study.description}</p>
              <div className="study-footer">
                <span className="study-author">{study.author}</span>
                <span className="study-time">{study.time}</span>
                <div className="study-stats">
                  <span className="study-likes">💖 {study.likes}</span>
                  <span className="study-views">👁 {study.views}</span>
                </div>
              </div>
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
    </div>
  );
};
export default Community;
