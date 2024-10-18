import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import logoImg from '../../assets/icon/logo.svg'; // 로고 이미지 경로

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logoImg} alt="Logo" className="logo-image" /> {/* 로고 이미지 추가 */}
        csowne
      </div>
      <nav className="navbar">
        <a href="/features">Features</a>
        <a href="/docs">Docs</a>
        <a href="/blog">Blog</a>
        <a href="/subject">Subject</a>
      </nav>
      <div className="cta">
        <button className="signup-btn">Contact</button>
      </div>
      <div className="header-hr-container"> 
          <hr className="navbar-divider" />
        </div>
    </header>
        </>
  );
}

export default Header;
