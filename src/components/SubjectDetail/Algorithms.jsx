import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import algorithmLogo from '../../assets/icon/logo2.svg'; 

const Algorithms = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Algorithms</h1>
              <p>
                Algorithms are step-by-step procedures used to solve problems efficiently. They form the backbone of computer programming.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Explore the most important algorithms used in computer science, from sorting and searching algorithms to graph traversal and dynamic programming.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in Algorithms</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Sorting Algorithms</h3>
              <img src={algorithmLogo} alt="Sorting Algorithms" />
              <p>Sorting algorithms arrange elements in a particular order. Examples include Quick Sort, Merge Sort, and Bubble Sort.</p>
            </div>
            <div className="product-card">
              <h3>Searching Algorithms</h3>
              <img src={algorithmLogo} alt="Searching Algorithms" />
              <p>Searching algorithms find an element in a data set. Binary Search and Linear Search are two of the most common searching techniques.</p>
            </div>
            <div className="product-card">
              <h3>Greedy Algorithms</h3>
              <img src={algorithmLogo} alt="Greedy Algorithms" />
              <p>Greedy algorithms make locally optimal choices at each step to find a global optimum. They are used in optimization problems like the Knapsack Problem.</p>
            </div>
            <div className="product-card">
              <h3>Dynamic Programming</h3>
              <img src={algorithmLogo} alt="Dynamic Programming" />
              <p>Dynamic programming breaks problems into subproblems, solving each subproblem only once and storing the results for future use.</p>
            </div>
            <div className="product-card">
              <h3>Graph Algorithms</h3>
              <img src={algorithmLogo} alt="Graph Algorithms" />
              <p>Graph algorithms are used to solve problems in networks. Examples include Dijkstra's shortest path algorithm and Depth-First Search (DFS).</p>
            </div>
            <div className="product-card">
              <h3>Backtracking</h3>
              <img src={algorithmLogo} alt="Backtracking" />
              <p>Backtracking solves problems by trying out all possible solutions and discarding those that fail to satisfy the conditions. It’s used in puzzles like Sudoku.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Algorithms;
