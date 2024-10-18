import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <hr className="footer-divider" /> {/* 푸터 위에 수평선 추가 */}
      <footer className="footer">
        <p>&copy; 2024 Sonne. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
