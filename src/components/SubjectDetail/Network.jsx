import React from 'react';
import './subjectdetail.css'; 
import logoImg from '../../assets/icon/logo.svg'; 
import networkLogo from '../../assets/icon/logo2.svg'; 

const Network = () => {
  return (
    <div id="feat">
      <div className="docs-container">
        {/* 상단 타이틀 섹션 */}
        <section className="docs-header">
          <div className="docs-header-content">
            <img src={logoImg} alt="CS Logo" className="docs-logo" />
            <div>
              <h1>Computer Networks</h1>
              <p>
                Computer networks enable devices to communicate with each other by transferring data over wired or wireless connections.
              </p>
            </div>
          </div>
        </section>

        <div className="media">
          <p>
            Understand how data is transmitted between devices in a network, the different types of networks, and the protocols that enable communication.
          </p>
        </div>

        {/* 주요 주제 섹션 */}
        <section className="products">
          <h2>Key Concepts in Computer Networks</h2>
          <div className="product-grid">
            <div className="product-card">
              <h3>OSI Model</h3>
              <img src={networkLogo} alt="OSI Model" />
              <p>The OSI model defines the seven layers through which data passes in a network, including physical, data link, network, transport, and more.</p>
            </div>
            <div className="product-card">
              <h3>TCP/IP Protocol</h3>
              <img src={networkLogo} alt="TCP/IP" />
              <p>TCP/IP is the suite of communication protocols used to interconnect devices on the internet, ensuring reliable data transmission and addressing.</p>
            </div>
            <div className="product-card">
              <h3>Switching & Routing</h3>
              <img src={networkLogo} alt="Switching and Routing" />
              <p>Switching transfers data within a local network, while routing directs data packets between different networks using routers.</p>
            </div>
            <div className="product-card">
              <h3>Wireless Networks</h3>
              <img src={networkLogo} alt="Wireless Networks" />
              <p>Wireless networks enable devices to communicate without physical connections using Wi-Fi, Bluetooth, and other technologies.</p>
            </div>
            <div className="product-card">
              <h3>Network Security</h3>
              <img src={networkLogo} alt="Network Security" />
              <p>Network security includes strategies to protect data during transmission, including firewalls, encryption, and secure protocols.</p>
            </div>
            <div className="product-card">
              <h3>LAN, WAN, & VPN</h3>
              <img src={networkLogo} alt="LAN, WAN, VPN" />
              <p>Local Area Networks (LAN), Wide Area Networks (WAN), and Virtual Private Networks (VPN) are used for different types of connectivity needs.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Network;
