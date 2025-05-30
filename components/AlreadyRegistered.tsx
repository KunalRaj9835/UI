'use client';
import React, { useEffect } from 'react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    for (let i = 0; i < 25; i++) {
      createSparkle();
    }

    function createSparkle() {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      const size = 6 + Math.random() * 8; // 6px to 14px
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      const x = Math.random() * (window.innerWidth - size);
      const y = Math.random() * (window.innerHeight - size);
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3; // 2s to 5s
      sparkle.style.animationDelay = `${delay}s`;
      sparkle.style.animationDuration = `${duration}s`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
        createSparkle();
      }, (duration + delay) * 1000);
    }
  }, []);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <img 
          src="./logo.png" 
          alt="TradeVed Logo" 
          className="thank-you-logo"
        />
        <h1 className="thank-you-title">Already On The Waitlist</h1>
        <p className="thank-you-message">
          This email address is already registered on our waitlist.We'll notify you as soon as TradeVed launches. 
          Thank you for your continued interest!
        </p>
        <a href="/" className="continue-btn">
          Go to Site
        </a>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

        .thank-you-container {
          color: #fff;
          font-family: 'Open Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background: #000;
        }

        .thank-you-content {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          z-index: 1;
        }

        .thank-you-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(2.5rem, 8vw, 4rem);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .thank-you-message {
          font-size: clamp(1rem, 3vw, 1.2rem);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .continue-btn {
          position: relative;
          display: inline-block;
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #ffffff;
          background: #0f1209;
          padding: 14px 32px;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          z-index: 1;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }

        .continue-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1.6px;
          border-radius: 6px;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
        }

        .continue-btn:hover,
        .continue-btn:focus {
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
          outline: none;
        }

        .continue-btn:active {
          transform: translateY(1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .thank-you-logo {
          margin-bottom: 3rem;
          max-width: 160px;
        }

        .sparkle {
          position: fixed;
          border-radius: 50%;
          background-color: #caff00;
          box-shadow:
            0 0 10px 2px rgba(202, 255, 0, 0.8),
            0 0 20px 5px rgba(202, 255, 0, 0.5),
            0 0 30px 10px rgba(202, 255, 0, 0.3);
          opacity: 0;
          z-index: -1;
          pointer-events: none;
          animation-name: sparkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;

