'use client';
import React from 'react';

const ThankYouPage: React.FC = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <img 
          src="./logo.png" 
          alt="TradeVed Logo" 
          className="thank-you-logo"
        />
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-message">
          Your submission has been received. We'll be in touch soon with more information about our launch. 
          We appreciate your interest in TradeVed.
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
          background: transparent;
          z-index: 100;
        }

        .thank-you-content {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          z-index: 101;
          position: relative;
        }

        .thank-you-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(2.5rem, 8vw, 4rem);
          margin-bottom: 1.5rem;
          font-weight: 700;
          z-index: 101;
        }

        .thank-you-message {
          font-size: clamp(1rem, 3vw, 1.2rem);
          margin-bottom: 3rem;
          line-height: 1.6;
          z-index: 101;
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
          z-index: 101;
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
          z-index: 101;
        }

        /* Light mode support */
        :global(.light-mode) .thank-you-container {
          background: transparent;
          color: #333;
          z-index: 100;
        }

        :global(.light-mode) .thank-you-title {
          color: #333;
          z-index: 101;
        }

        :global(.light-mode) .thank-you-message {
          color: #666;
          z-index: 101;
        }

        :global(.light-mode) .continue-btn {
          background: #f8f9fa;
          color: #333;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          z-index: 101;
        }

        :global(.light-mode) .continue-btn::before {
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #A4E400 0%, #7CB342 100%);
        }

        :global(.light-mode) .continue-btn:hover,
        :global(.light-mode) .continue-btn:focus {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        :global(.light-mode) .continue-btn:active {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;