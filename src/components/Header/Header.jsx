import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import logoImg from '../../assets/icon/logo.svg'; 
import menuIcon from '../../assets/icon/menu.svg'; 
import closeIcon from '../../assets/icon/close.svg'; 
import blogMenuIcon from '../../assets/icon/blog-menu.svg'; // blog 전용 메뉴 아이콘
import blogCloseIcon from '../../assets/icon/blog-close.svg'; // blog 전용 닫기 아이콘

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 토글 상태 관리
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 확인하는 hook
  console.log('Current Pathname:', location.pathname); // 경로 확인을 위한 로그
  
  const isBlogPage = location.pathname.startsWith('/blog') || location.pathname.startsWith('/community');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 토글 상태 변경
  };

  return (
    <>
      <header className={`header ${isBlogPage ? 'blog-header' : ''}`}>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logoImg} alt="Logo" className="logo-image" /> {/* 로고 이미지 추가 */}
          csowne
        </div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <a href="/features">Features</a>
          <a href="/docs">Docs</a>
          <a href="/blog">Blog</a>
          <a href="/subject">Subject</a>
          <a href="/community">Community</a>
        </nav>

        <div className="cta">
          <button className="signup-btn">Contact</button>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {/* 경로가 /blog로 시작하면 다른 아이콘을 로드 */}
          <img 
            src={isMenuOpen 
              ? (isBlogPage ? blogCloseIcon : closeIcon) 
              : (isBlogPage ? blogMenuIcon : menuIcon)} 
            alt="Menu" 
            className="menu-icon" 
          />
        </div>
        <div className="header-hr-container"> 
          <hr className="navbar-divider" />
        </div>
      </header>
    </>
  );
};

export default Header;
