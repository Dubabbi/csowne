import React from 'react';
import './features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Why Csowne?</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>title1</h3>
          <p>about title1</p>
        </div>
        <div className="feature-item">
          <h3>title2</h3>
          <p>about title2</p>
        </div>
        <div className="feature-item">
          <h3>title3</h3>
          <p>about title3</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
