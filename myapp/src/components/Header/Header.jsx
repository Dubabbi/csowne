import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logoImg from '../../assets/icon/logo.svg'; 
import menuIcon from '../../assets/icon/menu.svg'; 
import closeIcon from '../../assets/icon/close.svg'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 토글 상태 관리
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 토글 상태 변경
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logoImg} alt="Logo" className="logo-image" /> {/* 로고 이미지 추가 */}
          csowne
        </div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <a href="/features">Features</a>
          <a href="/docs">Docs</a>
          <a href="/blog">Blog</a>
          <a href="/subject">Subject</a>
        </nav>

        <div className="cta">
          <button className="signup-btn">Contact</button>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu" className="menu-icon" />
        </div>
        <div className="header-hr-container"> 
          <hr className="navbar-divider" />
        </div>
      </header>
    </>
  );
};

export default Header;
