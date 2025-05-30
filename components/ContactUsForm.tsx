'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface ContactUsFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  companyEmail: string;
  details: string;
  agree: boolean;
}

export default function ContactUsForm() {
  const [formData, setFormData] = useState<ContactUsFormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    details: '',
    agree: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev: ContactUsFormData) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
      <style jsx>{`
        .contact-container {
          min-height: 100vh;
          background: transparent; /* Changed from var(--background-dark) to transparent */
          color: var(--text-light);
          position: relative;
          z-index: 1; /* Reduced from z-index: 10 to z-index: 1 */
          padding-top: 120px;
          transition: color 0.3s ease;
          opacity: 1; /* Reduced opacity for a more subtle effect */
          background:transparent; /* Keep background transparent */
        }

        /* Light mode overrides */
        :global(.light-mode) .contact-container {
          background: transparent; /* Keep transparent in light mode too */
          color: #000000;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 1024px) {
          .main-content {
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: 4rem;
          }
        }

        .left-section {
          flex: 1;
          max-width: 500px;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.2;
          color: var(--text-light);
          font-family: 'Inter', sans-serif;
          transition: color 0.3s ease;
        }

        :global(.light-mode) .main-heading {
          color: #000000;
        }

        @media (min-width: 1024px) {
          .main-heading {
            font-size: 3rem;
          }
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-left: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .check-icon {
          width: 1.5rem;
          height: 1.5rem;
          background: var(--accent-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-text {
          font-size: 1rem;
          color: #e5e5e5;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        :global(.light-mode) .feature-text {
          color: #4a5568;
        }

        .form-container {
          width: 100%;
          max-width: 450px;
          flex-shrink: 0;
        }

        .form-card {
          background: var(--section-bg-dark);
          border: 1px solid var(--border-dark);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        :global(.light-mode) .form-card {
          background: #f8f9fa;
          border: 1px solid #e5e5e5;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .form-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #e5e5e5;
          margin-bottom: 0.5rem;
          font-family: 'Inter', sans-serif;
          transition: color 0.3s ease;
        }

        :global(.light-mode) .input-label {
          color: #4a5568;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 6px;
          background: white;
          color: black;
          font-size: 0.875rem;
          border: 1px solid #d1d5db;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--accent-green);
          box-shadow: 0 0 0 3px rgba(164, 255, 0, 0.1);
        }

        :global(.light-mode) .form-input:focus {
          box-shadow: 0 0 0 3px rgba(164, 255, 0, 0.1);
        }

        .textarea-input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 6px;
          background: white;
          color: black;
          font-size: 0.875rem;
          border: 1px solid #d1d5db;
          outline: none;
          transition: all 0.2s ease;
          resize: vertical;
          min-height: 100px;
          max-height: 200px;
          font-family: 'Inter', sans-serif;
        }

        .textarea-input:focus {
          border-color: var(--accent-green);
          box-shadow: 0 0 0 3px rgba(164, 255, 0, 0.1);
        }

        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }

        .checkbox-input {
          width: 1rem;
          height: 1rem;
          margin-top: 0.125rem;
          accent-color: var(--accent-green);
          cursor: pointer;
        }

        .checkbox-label {
          font-size: 0.875rem;
          color: #e5e5e5;
          line-height: 1.4;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        :global(.light-mode) .checkbox-label {
          color: #4a5568;
        }

        .submit-container {
          padding-top: 0.5rem;
        }

        .submit-button {
          width: 100%;
          padding: 1px;
          border-radius: 8px;
          background: linear-gradient(to right, var(--accent-green), #22c55e);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          transform: scale(1);
          box-shadow: 0 4px 15px rgba(164, 255, 0, 0.2);
        }

        .submit-button:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(164, 255, 0, 0.3);
        }

        .submit-button-inner {
          display: block;
          background: var(--section-bg-dark);
          padding: 0.875rem 1.5rem;
          border-radius: 7px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
          text-align: center;
          transition: background-color 0.2s ease;
        }

        :global(.light-mode) .submit-button-inner {
          background: #f8f9fa;
          color: #000000;
        }

        .submit-button:hover .submit-button-inner {
          background: var(--background-dark);
        }

        :global(.light-mode) .submit-button:hover .submit-button-inner {
          background: #e9ecef;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding-top: 100px;
          }
          
          .main-heading {
            font-size: 2rem;
            text-align: center;
          }
          
          .form-card {
            padding: 1.5rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="contact-container">
        <main className="main-content">
          {/* Left Section */}
          <section className="left-section">
            <h1 className="main-heading">
              Unified platform for<br />
              systematic trading and<br />
              learning
            </h1>
            
            <div className="feature-list">
              {[
                "Advanced trading algorithms and strategies",
                "Real-time market data and analytics",
                "Comprehensive learning resources",
                "Professional portfolio management tools"
              ].map((text, index) => (
                <div key={index} className="feature-item">
                  <div className="check-icon">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="feature-text">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Right Section - Contact Form */}
          <div className="form-container">
            <div className="form-card">
              <div className="form-content">
                {/* First and Last Name Row */}
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="firstName" className="input-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName" className="input-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                {/* Company Name and Email Row */}
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="companyName" className="input-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="companyEmail" className="input-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="companyEmail"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Details Textarea */}
                <div className="input-group">
                  <label htmlFor="details" className="input-label">
                    Share more details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={4}
                    className="textarea-input"
                    placeholder="Tell us about your trading goals and how we can help..."
                  />
                </div>

                {/* Checkbox */}
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    required
                    className="checkbox-input"
                  />
                  <label htmlFor="agree" className="checkbox-label">
                    I agree to receive communication emails from TradeVed *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="submit-container">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    <span className="submit-button-inner">
                      Get Started
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}