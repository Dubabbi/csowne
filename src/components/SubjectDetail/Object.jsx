import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import oopLogo from '../../assets/icon/logo2.svg'; 

const Object = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Object-Oriented Programming (OOP)</h1>
              <p>
                Object-Oriented Programming (OOP) is a programming paradigm that relies on the concept of classes and objects to organize and structure software applications.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Explore the fundamental principles of OOP, including encapsulation, inheritance, polymorphism, and abstraction, which are essential for building scalable and modular software systems.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in OOP</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Classes & Objects</h3>
              <img src={oopLogo} alt="Classes & Objects" />
              <p>Classes are blueprints for creating objects. Objects are instances of classes and represent real-world entities with attributes and behaviors.</p>
            </div>
            <div className="product-card">
              <h3>Encapsulation</h3>
              <img src={oopLogo} alt="Encapsulation" />
              <p>Encapsulation refers to the bundling of data and methods that operate on the data, and restricting direct access to some of the object's components.</p>
            </div>
            <div className="product-card">
              <h3>Inheritance</h3>
              <img src={oopLogo} alt="Inheritance" />
              <p>Inheritance allows a class to inherit properties and methods from another class, enabling code reuse and a hierarchical class structure.</p>
            </div>
            <div className="product-card">
              <h3>Polymorphism</h3>
              <img src={oopLogo} alt="Polymorphism" />
              <p>Polymorphism allows objects of different classes to be treated as objects of a common superclass, facilitating flexibility and scalability in code design.</p>
            </div>
            <div className="product-card">
              <h3>Abstraction</h3>
              <img src={oopLogo} alt="Abstraction" />
              <p>Abstraction simplifies complex systems by hiding unnecessary details and exposing only the essential features, improving the maintainability of code.</p>
            </div>
            <div className="product-card">
              <h3>Design Patterns</h3>
              <img src={oopLogo} alt="Design Patterns" />
              <p>Design patterns are best practices for solving common design problems in OOP, such as Singleton, Factory, and Observer patterns.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Object;
