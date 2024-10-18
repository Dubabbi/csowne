import React from 'react';
import '../Docs/docs.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import logoImg2 from '../../assets/icon/logo2.svg'; 

const Subject = () => {
  return (
    <div id="feat">
    <div className="docs-container">
      {/* 상단 타이틀 섹션 */}
      <section className="docs-header">
        <div className="docs-header-content">
          <img src={logoImg} alt="CS Logo" className="docs-logo" />
          <div>
            <h1>CS Knowledge Base</h1>
            <p>
              Explore the core computer science concepts essential for becoming a proficient developer, including OS, algorithms, and more.
            </p>
          </div>
        </div>
      </section>
      <div className="media">
        <p>
          Get started with the essential CS topics to build your foundation in computer science and software development.
        </p>
      </div>

      {/* Getting Started 섹션 */}
      <section className="getting-started">
        <h2>Getting Started</h2>
        <p>
          Learn the core subjects that every developer needs to master to be successful in the tech industry.
        </p>
      </section>

      {/* Technologies 섹션 */}
      <section className="products">
        <h2>CS Essential Topics</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Operating Systems (OS)</h3>
            <img src={logoImg2} alt="Operating Systems" />
            <p>Operating systems manage the hardware and software resources of a computer, providing services for application programs.</p>
          </div>
          <div className="product-card">
            <h3>Computer Architecture</h3>
            <img src={logoImg2} alt="Computer Architecture" />
            <p>Computer architecture refers to the structure and organization of a computer's components, including the CPU, memory, and input/output devices.</p>
          </div>
          <div className="product-card">
            <h3>Computer Networks</h3>
            <img src={logoImg2} alt="Computer Networks" />
            <p>Computer networks enable devices to communicate with each other by transferring data over wired or wireless connections.</p>
          </div>
          <div className="product-card">
            <h3>Data Structures</h3>
            <img src={logoImg2} alt="Data Structures" />
            <p>Data structures provide a way to organize and store data efficiently, allowing for faster access, modification, and management of large datasets.</p>
          </div>
          <div className="product-card">
            <h3>Algorithms</h3>
            <img src={logoImg2} alt="Algorithms" />
            <p>Algorithms are step-by-step procedures for solving problems and performing tasks efficiently using data structures and logical operations.</p>
          </div>
          <div className="product-card">
            <h3>Object-Oriented Programming (OOP)</h3>
            <img src={logoImg2} alt="Object-Oriented Programming" />
            <p>OOP is a programming paradigm that uses objects to represent data and methods, encouraging modularity, reusability, and scalability in software development.</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Subject;
