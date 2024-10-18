import React from 'react';
import './docs.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import reactIcon from '../../assets/icon/react-icon.svg'; 
import vueIcon from '../../assets/icon/vuejs-icon.svg'; 
import tsIcon from '../../assets/icon/typescript-icon.svg'; 
import jsIcon from '../../assets/icon/javascript-icon.svg'; 
import nextIcon from '../../assets/icon/nextjs-icon.svg'; 
import svelteIcon from '../../assets/icon/svelte-icon.svg';

const Docs = () => {
  return (
    <div className="docs-container">
      {/* 상단 타이틀 섹션 */}
      <section className="docs-header">
        <div className="docs-header-content">
          <img src={logoImg} alt="Supabase Logo" className="docs-logo" />
          <div>
            <h1>Frontend Development Documentation</h1>
            <p>
              Learn about the core technologies used in modern frontend development such as JavaScript, TypeScript, React, and more.
            </p>
          </div>
        </div>
      </section>
      <div className="media">
        <p>
            Learn about the core technologies used in modern frontend development such as JavaScript, TypeScript, React, and more.
        </p>
      </div>

      {/* Getting Started 섹션 */}
      <section className="getting-started">
        <h2>Getting Started</h2>
        <p>
          Discover the essential tools and frameworks for building modern web applications with ease.
        </p>
        <div className="getting-started-icons">
          <img src={reactIcon} alt="React" />
          <img src={vueIcon} alt="Vue" />
          {/* 여기에 더 많은 아이콘을 추가 가능 */}
        </div>
      </section>

      {/* Technologies 섹션 */}
      <section className="products">
        <h2>Frontend Technologies</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>JavaScript</h3>
            <img src={jsIcon} alt="JavaScript" />
            <p>JavaScript is the core language of the web. It enables you to create dynamic and interactive user interfaces.</p>
          </div>
          <div className="product-card">
            <h3>TypeScript</h3>
            <img src={tsIcon} alt="TypeScript" />
            <p>TypeScript is a statically typed superset of JavaScript that adds static types, enhancing code quality and development efficiency.</p>
          </div>
          <div className="product-card">
            <h3>React</h3>
            <img src={reactIcon} alt="React" />
            <p>React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs).</p>
          </div>
          <div className="product-card">
            <h3>Vue.js</h3>
            <img src={vueIcon} alt="Vue.js" />
            <p>Vue.js is a progressive framework for building user interfaces, known for its simplicity and flexibility.</p>
          </div>
          <div className="product-card">
            <h3>Next.js</h3>
            <img src={nextIcon} alt="Next.js" />
            <p>Next.js is a powerful React framework that enables server-side rendering, static site generation, and API routes.</p>
          </div>
          <div className="product-card">
            <h3>Svelte</h3>
            <img src={svelteIcon} alt="Svelte" />
            <p>Svelte is a compiler that generates minimal and efficient JavaScript for building fast and lightweight web applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;
