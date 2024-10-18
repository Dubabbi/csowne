import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import osLogo from '../../assets/icon/logo2.svg'; 

const OsDetail = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Operating Systems</h1>
              <p>
                Operating systems (OS) are the backbone of computer systems, managing hardware and software resources and providing services for programs.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Understand the core principles behind modern operating systems and how they manage resources, provide services, and enable applications to run efficiently.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in Operating Systems</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Process Management</h3>
              <img src={osLogo} alt="Process Management" />
              <p>Processes are the running instances of programs. The OS manages processes, including process scheduling, creation, and termination.</p>
            </div>
            <div className="product-card">
              <h3>Memory Management</h3>
              <img src={osLogo} alt="Memory Management" />
              <p>The OS manages the memory hierarchy, from RAM to disk storage, allocating space to processes and handling memory leaks or overflows.</p>
            </div>
            <div className="product-card">
              <h3>File Systems</h3>
              <img src={osLogo} alt="File Systems" />
              <p>File systems organize and store data on storage devices, allowing users and programs to read and write data efficiently.</p>
            </div>
            <div className="product-card">
              <h3>Device Management</h3>
              <img src={osLogo} alt="Device Management" />
              <p>Operating systems manage input/output devices (such as keyboards, printers, and drives) through device drivers.</p>
            </div>
            <div className="product-card">
              <h3>Security & Protection</h3>
              <img src={osLogo} alt="Security & Protection" />
              <p>The OS ensures the security of system resources through mechanisms like user authentication, access control, and encryption.</p>
            </div>
            <div className="product-card">
              <h3>Concurrency & Synchronization</h3>
              <img src={osLogo} alt="Concurrency & Synchronization" />
              <p>Concurrency occurs when multiple processes execute at the same time. The OS manages synchronization to avoid deadlocks and race conditions.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OsDetail;
