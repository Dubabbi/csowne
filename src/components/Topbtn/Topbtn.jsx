import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // useLocation 훅을 추가합니다
import './topbtn.css';
import normal from '../../assets/icon/topbtn-normal.svg';
import dark from '../../assets/icon/topbtn-dark.svg';

const Topbtn = () => {
  const location = useLocation();  // 현재 위치 정보를 가져옵니다
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 현재 경로가 '/blog' 또는 '/community'로 시작하는지 확인
    const isSpecialPage = location.pathname.startsWith('/blog') || location.pathname.startsWith('/community');
    setIsDarkMode(!isSpecialPage);  // 특정 페이지가 아닌 경우에는 다크 모드로 설정
  }, [location]);  // location이 변경될 때마다 이 효과를 다시 실행합니다

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="top-btn-container" onClick={scrollToTop}>
      <img src={isDarkMode ? dark : normal} alt="Scroll to top" />
    </div>
  );
}

export default Topbtn;
