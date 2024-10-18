import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import archLogo from '../../assets/icon/logo2.svg'; 

const Architecture = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Computer Architecture</h1>
              <p>
                Computer architecture is the organization and structure of the hardware and system components that work together to perform tasks and execute programs.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Understand the design and function of computer hardware, including CPU architecture, memory hierarchies, and instruction sets.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in Computer Architecture</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>Central Processing Unit (CPU)</h3>
              <img src={archLogo} alt="CPU" />
              <p>The CPU, also known as the processor, is the brain of the computer. It executes instructions from programs by performing basic arithmetic, logic, control, and I/O operations.</p>
            </div>
            <div className="product-card">
              <h3>Memory Hierarchy</h3>
              <img src={archLogo} alt="Memory Hierarchy" />
              <p>The memory hierarchy consists of registers, cache, RAM, and disk storage, organized to minimize access time and increase system efficiency.</p>
            </div>
            <div className="product-card">
              <h3>Instruction Set Architecture (ISA)</h3>
              <img src={archLogo} alt="Instruction Set Architecture" />
              <p>The ISA defines the supported machine language instructions that the CPU can execute, enabling software compatibility with hardware.</p>
            </div>
            <div className="product-card">
              <h3>Input/Output (I/O)</h3>
              <img src={archLogo} alt="Input/Output" />
              <p>I/O systems enable communication between the computer and external devices, like keyboards, monitors, and printers.</p>
            </div>
            <div className="product-card">
              <h3>Pipelining</h3>
              <img src={archLogo} alt="Pipelining" />
              <p>Pipelining is a technique used to improve CPU performance by executing multiple instruction stages simultaneously in a streamlined process.</p>
            </div>
            <div className="product-card">
              <h3>Multiprocessing</h3>
              <img src={archLogo} alt="Multiprocessing" />
              <p>Multiprocessing involves using two or more processors to work together on a single task, increasing computing power and efficiency.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
