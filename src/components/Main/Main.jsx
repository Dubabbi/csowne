import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';
import IMG from '../../assets/icon/logo.svg';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
    <section className="hero">
    <div className="App"></div>
    <img className="App-logo" src={IMG} alt="logo"></img>
      <h1>Your Gateway to CS Mastery</h1>
      <p>Empowering your journey through computer science with cutting-edge knowledge.</p>
      <div>
      <button className="hero-btn" onClick={() => navigate('/features')}>Get Started</button>
      </div>
    </section>
    </>
  );
}

export default Main;
