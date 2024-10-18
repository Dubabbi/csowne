import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import dataStructureLogo from '../../assets/icon/logo2.svg'; 

const DataStructures = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Data Structures</h1>
              <p>
                Data structures are fundamental for organizing and storing data efficiently, enabling fast access, modification, and management of information.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Learn the essential data structures that are used in computer science to solve problems efficiently, such as arrays, linked lists, stacks, queues, trees, and graphs.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in Data Structures</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Arrays</h3>
              <img src={dataStructureLogo} alt="Arrays" />
              <p>Arrays store elements in contiguous memory locations, allowing fast access by index but may require shifting elements during insertion or deletion.</p>
            </div>
            <div className="product-card">
              <h3>Linked Lists</h3>
              <img src={dataStructureLogo} alt="Linked Lists" />
              <p>Linked lists store elements in nodes, with each node pointing to the next. They provide dynamic memory allocation but slower access by position.</p>
            </div>
            <div className="product-card">
              <h3>Stacks</h3>
              <img src={dataStructureLogo} alt="Stacks" />
              <p>Stacks follow the Last-In-First-Out (LIFO) principle. They are used for function call management, expression evaluation, and backtracking algorithms.</p>
            </div>
            <div className="product-card">
              <h3>Queues</h3>
              <img src={dataStructureLogo} alt="Queues" />
              <p>Queues follow the First-In-First-Out (FIFO) principle. They are used in scheduling algorithms, buffering, and managing tasks in real-time systems.</p>
            </div>
            <div className="product-card">
              <h3>Trees</h3>
              <img src={dataStructureLogo} alt="Trees" />
              <p>Trees are hierarchical data structures where each node has a parent and zero or more children. Common types include binary trees, AVL trees, and B-trees.</p>
            </div>
            <div className="product-card">
              <h3>Graphs</h3>
              <img src={dataStructureLogo} alt="Graphs" />
              <p>Graphs consist of nodes (vertices) connected by edges. They are used in network routing, social networks, and solving shortest path problems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataStructures;