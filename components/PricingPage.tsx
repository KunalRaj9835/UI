'use client';

import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div>
      <style jsx>{`
        .pricing-container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background-color: #0f1209;
          color: white;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }

        .pricing-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 16px;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 64px;
        }

        :global(.pricing-container) .pricing-header-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.2;
          color: #FFFFFF;
        }

        :global(.pricing-container) .pricing-header-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #e5e7eb;
        }

        .pricing-cards-container {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
        }

        .pricing-card {
          background: white;
          color: black;
          border-radius: 12px;
          padding: 32px 24px;
          width: 320px;
          border: 2px solid #d1d5db;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .featured-card {
          background: #1f2937;
          color: white;
          border: 2px solid #9bec00;
          transform: scale(1.05);
          z-index: 2;
        }

        .plan-badge {
          background: #9bec00;
          color: #0f1209;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: bold;
          font-size: 1.125rem;
          display: inline-block;
          margin-bottom: 16px;
        }

        :global(.pricing-container) .plan-description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 16px;
        }

        :global(.pricing-container) .featured-description {
          font-size: 0.875rem;
          color: #d1d5db;
          margin-bottom: 16px;
        }

        :global(.pricing-container) .price {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 32px;
          color: inherit;
        }

        :global(.pricing-container) .price-small {
          font-size: 0.875rem;
          font-weight: normal;
          color: #6b7280;
        }

        :global(.pricing-container) .featured-price-small {
          font-size: 0.875rem;
          font-weight: normal;
          color: #d1d5db;
        }

        .features-list {
          list-style: none;
          margin-bottom: 32px;
          padding: 0;
        }

        :global(.pricing-container) .feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.875rem;
          color: inherit;
        }

        :global(.pricing-container) .feature-disabled {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.875rem;
          color: #9ca3af;
        }

        :global(.pricing-container) .featured-feature-disabled {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .feature-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .included-icon {
          background: #10b981;
        }

        .excluded-icon {
          background: #ef4444;
        }

        .partial-icon {
          background: #6b7280;
        }

        .cta-button {
          width: 100%;
          padding: 16px;
          border: 2px solid #000;
          border-radius: 8px;
          background: white;
          color: #000;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
        }

        .featured-button {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(to right, #9bec00, #588600);
          color: white;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .featured-button:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 12px rgba(155, 236, 0, 0.4);
        }

        .featured-button-inner {
          position: relative;
          z-index: 2;
        }

        /* Light Mode Styles */
        :global(.light-mode) .pricing-container {
          background-color: #ffffff;
          color: #000000;
        }

        :global(.light-mode) :global(.pricing-container) .pricing-header-title {
          color: #000000;
        }

        :global(.light-mode) :global(.pricing-container) .pricing-header-subtitle {
          color: #4b5563;
        }

        :global(.light-mode) .pricing-card {
          background: #f9f9f9;
          color: #000000;
          border: 2px solid #e5e7eb;
        }

        :global(.light-mode) .featured-card {
          background: #f3f4f6;
          color: #000000;
          border: 2px solid #9bec00;
        }

        :global(.light-mode) :global(.pricing-container) .plan-description {
          color: #6b7280;
        }

        :global(.light-mode) :global(.pricing-container) .featured-description {
          color: #4b5563;
        }

        :global(.light-mode) :global(.pricing-container) .price-small {
          color: #6b7280;
        }

        :global(.light-mode) :global(.pricing-container) .featured-price-small {
          color: #4b5563;
        }

        :global(.light-mode) :global(.pricing-container) .feature-disabled {
          color: #9ca3af;
        }

        :global(.light-mode) :global(.pricing-container) .featured-feature-disabled {
          color: #6b7280;
        }

        :global(.light-mode) .cta-button {
          background: #ffffff;
          color: #000000;
          border: 2px solid #e5e7eb;
        }

        :global(.light-mode) .cta-button:hover {
          background: #f9f9f9;
          border-color: #9bec00;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .pricing-wrapper {
            padding: 24px 16px;
          }

          .pricing-header {
            margin-bottom: 32px;
          }

          .pricing-header-title {
            font-size: 2rem;
          }

          .pricing-header-subtitle {
            font-size: 1.25rem;
          }

          .pricing-cards-container {
            flex-direction: column;
            align-items: center;
          }

          .pricing-card {
            width: 100%;
            max-width: 400px;
          }

          .featured-card {
            transform: none;
          }
        }
      `}</style>

      <div className="pricing-container">
        <div className="pricing-wrapper">
          <div className="pricing-header">
            <h1 className="pricing-header-title">
              <strong>Powerful features</strong> for <strong>Powerful Traders</strong>
            </h1>
            <p className="pricing-header-subtitle">Choose a plan that's right for you</p>
          </div>

          <div className="pricing-cards-container">
            {/* Freebie Plan */}
            <div className="pricing-card">
              <div className="plan-badge">Freebie</div>
              <p className="plan-description">
                Ideal for individuals who need quick access to basic features.
              </p>
              <div className="price">
                Rs.0 <span className="price-small">/ Month</span>
              </div>
              
              <ul className="features-list">
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  20,000+ PNG & SVG graphics
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Access to 100 million stock images
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Upload custom icons and fonts
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Unlimited Sharing
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Upload graphics & video in up to 4k
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Unlimited Projects
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Instant Access to our design system
                </li>
                <li className="feature-disabled">
                  <span className="feature-icon excluded-icon"></span>
                  Create teams to collaborate on designs
                </li>
              </ul>

              <button className="cta-button">Get Started Now</button>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card featured-card">
              <div className="plan-badge">Professional</div>
              <p className="featured-description">
                Ideal for individuals who need advanced features and tools for client work.
              </p>
              <div className="price">
                Rs.4000 <span className="featured-price-small">/ Month</span>
              </div>
              
              <ul className="features-list">
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  20,000+ PNG & SVG graphics
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Access to 100 million stock images
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Upload custom icons and fonts
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Unlimited Sharing
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Upload graphics & video in up to 4k
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Unlimited Projects
                </li>
                <li className="featured-feature-disabled">
                  <span className="feature-icon partial-icon"></span>
                  Instant Access to our design system
                </li>
                <li className="featured-feature-disabled">
                  <span className="feature-icon partial-icon"></span>
                  Create teams to collaborate on designs
                </li>
              </ul>

              <button className="featured-button">
                <span className="featured-button-inner">Get Started Now</span>
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="plan-badge">Enterprise</div>
              <p className="plan-description">
                Ideal for businesses who need personalized services and security for large teams.
              </p>
              <div className="price">
                Rs.2500 <span className="price-small">/ Month</span>
              </div>
              
              <ul className="features-list">
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  20,000+ PNG & SVG graphics
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Access to 100 million stock images
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Upload custom icons and fonts
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Unlimited Sharing
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Upload graphics & video in up to 4k
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Unlimited Projects
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Instant Access to our design system
                </li>
                <li className="feature">
                  <span className="feature-icon included-icon"></span>
                  Create teams to collaborate on designs
                </li>
              </ul>

              <button className="cta-button">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;