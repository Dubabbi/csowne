import React from 'react';
import './features.css';

const Features = () => {
  return (
    <div id="feat">
    <section id="features" className="features">
      <h2><span style={{color: '#fff'}}>Why Choose</span> csowne?</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Comprehensive CS Knowledge</h3>
          <p>Gain access to a wealth of computer science resources covering topics like OS, data structures, algorithms, and more, helping you build a solid foundation.</p>
        </div>
        <div className="feature-item">
          <h3>Interactive Learning</h3>
          <p>Engage with interactive tutorials and quizzes designed to make learning CS concepts fun and effective. Immediate feedback helps you track your progress.</p>
        </div>
        <div className="feature-item">
          <h3>Up-to-date Content</h3>
          <p>Stay ahead of the curve with the latest industry trends and technologies. Our content is regularly updated to ensure you learn the most relevant skills.</p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Features;
