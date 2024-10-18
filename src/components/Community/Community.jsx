import React from 'react';
import './community.css';
const Community = () => {

  return (
    <>
<div class="community-container">
<div class="community-inner">
  <h1 class="community-title">함께 성장하는 새싹들</h1>

  <div class="study-list">
    <div class="study-item">
      <div class="study-header">
        <span class="study-status 모집중">모집중</span>
        <h3>스터디 총원합니다</h3>
      </div>
      <p class="study-description">스터디원 구합니다!</p>
      <div class="study-footer">
        <span class="study-author">작성자</span>
        <span class="study-time">12시간 전</span>
        <div class="study-stats">
          <span class="study-likes">💖 0</span>
          <span class="study-views">👁 29</span>
        </div>
      </div>
    </div>

    <div class="study-item">
      <div class="study-header">
        <span class="study-status 모집완료">모집완료</span>
        <h3>LeetCode 온라인 스터디 - 북미 취업 및 이직 준비</h3>
      </div>
      <p class="study-description">모집 마감되었습니다. 추가로 연락주시는 분들은...</p>
      <div class="study-footer">
        <span class="study-author">작성자</span>
        <span class="study-time">14시간 전</span>
        <div class="study-stats">
          <span class="study-likes">💖 0</span>
          <span class="study-views">👁 70</span>
        </div>
      </div>
    </div>
</div>
  </div>
</div>


    </>
  );
};

export default Community;
