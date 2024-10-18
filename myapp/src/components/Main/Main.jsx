import React from 'react';
import './main.css';
import IMG from '../../assets/icon/logo.svg';

const Main = () => {
  return (
    <>
    <section className="hero">
    <div class="App"></div>
    <img class="App-logo" src={IMG} alt="logo"></img>
      <h1>Welcome to my app!</h1>
      <p>my CS study note~!</p>
      <div>
      <button className="hero-btn">Get Started</button>
      </div>
    </section>
    </>
  );
}

export default Main;
