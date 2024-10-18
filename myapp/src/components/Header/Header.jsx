import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>csowne</div>
      <nav className="navbar">
        <a href="/features">Features</a>
        <a href="/docs">Docs</a>
        <a href="/blog">Blog</a>
        <a href="/study">Study</a>
      </nav>
      <div className="cta">
        <a href="/login" className="login-btn">Login</a>
        <button className="signup-btn">Contact</button>
      </div>
    </header>
  );
}

export default Header;
