'use client';

import React, { useState, useEffect } from 'react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'category1', label: 'Category 1' },
    { id: 'category2', label: 'Category 2' },
    { id: 'category3', label: 'Category 3' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'category1',
      question: 'What is Algo Trading?',
      answer: 'Algo trading, or algorithmic trading, is the use of computer programs and algorithms to execute financial market trades at high speed and volume.'
    },
    {
      id: 2,
      category: 'category2',
      question: 'How does Algo Trading work?',
      answer: 'Algo trading helps traders execute predefined strategies efficiently by using automated systems that follow specific rules and conditions.'
    },
    {
      id: 3,
      category: 'category3',
      question: 'What are the benefits of Algo Trading?',
      answer: 'It reduces manual trading efforts, improves accuracy, and eliminates emotional decision-making in trading processes.'
    },
    {
      id: 4,
      category: 'category1',
      question: 'Is Algo Trading suitable for beginners?',
      answer: 'Traders can automate buying and selling based on market conditions, but beginners should start with proper education and risk management.'
    },
    {
      id: 5,
      category: 'category2',
      question: 'What tools are needed for Algo Trading?',
      answer: 'It eliminates emotional decision-making in trading and requires programming knowledge, market data, and a reliable trading platform.'
    }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

interface Category {
    id: string;
    label: string;
}

interface FAQ {
    id: number;
    category: string;
    question: string;
    answer: string;
}

const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveFAQ(null); // Close any open FAQ when switching categories
};

interface ToggleFAQ {
    (faqId: number): void;
}

const toggleFAQ: ToggleFAQ = (faqId) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
};

  return (
    <div>
      <style jsx>{`

        .faq-container {
          max-width: 1050px;
          width: 100%;
          margin: 6rem auto;
          padding: 0 20px;
          z-index: 100;
        }

        :global(.faq-container) h2 {
          font-family: 'Raleway', sans-serif;
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 10px;
          margin-left: 2rem;
          color: #FFFFFF;
        }

        :global(.faq-container) p {
          font-family: 'Raleway', sans-serif;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 20px;
          margin-left: 2rem;
          color: #FFFFFF;
        }

        .cabs {
          display: flex;
          gap: 30px;
          justify-content: flex-start;
          margin-top: 20px;
          margin-bottom: 30px;
          margin-left: 2rem;
          flex-wrap: wrap;
        }

        .cab {
          position: relative;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          padding: 1.5px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-block;
          border: none;
          outline: none;
          box-shadow: none;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .cab::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 8px;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          background-size: 400% 400%;
          z-index: -1;
          animation: pulse 3s ease infinite;
        }

        .cab span {
          display: block;
          background-color: #0F1209;
          color: #FFFFFF;
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 16px;
          padding: 12px 40px;
          border-radius: 6px;
          line-height: 1;
          box-shadow: none;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .cab:hover {
          transform: translateY(-2px);
        }

        .cab.active span {
          box-shadow: 0 4px 12px rgba(88, 134, 0, 0.8);
        }

        @keyframes pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        :global(.arrow) {
          transition: transform 0.3s ease-in-out;
          font-size: 18px;
          color: #9BEC00;
        }

        :global(.support) {
          margin: 5em auto;
          text-align: center;
          width: 60%;
          max-width: 800px;
          position: relative;
          padding: 0 20px;
          z-index: 100;
        }

        :global(.faq-box) {
          margin-left: 2rem;
          max-width: 995px;
          background: #313131;
          padding: 20px;
          border-radius: 10px;
          z-index:101;
        }

        :global(.faq) {
          background: #181916;
          padding: 15px;
          margin: 10px 0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          opacity: 1;
          transform: translateY(0);
          z-index: 102;
        }

        :global(.faq):hover {
          background: #202020;
        }

        :global(.faq-question) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          color: #FFFFFF;
          font-family: 'Raleway', sans-serif;
          font-weight: 600;
        }

        :global(.faq-answer) {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
          font-size: 14px;
          color: #bdbdbd;
          font-family: 'Open Sans', sans-serif;
        }

        :global(.faq.active) :global(.faq-answer) {
          max-height: 200px;
          padding-top: 15px;
        }

        :global(.faq.active) :global(.arrow) {
          transform: rotate(180deg);
        }

        :global(.support-container) #heading {
          font-family: "Raleway", sans-serif;
          font-weight: 600;
          line-height: 57px;
          font-size: 40px;
          color: #FFFFFF;
          margin-bottom: 20px;
          z-index: 101;
        }

        :global(.support-container) #desc {
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
          color: #FFFFFF;
          margin-bottom: 30px;
        }

        .btn {
          position: relative;
          margin-top: 20px;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          padding: 1.5px;
          border-radius: 6px;
          display: inline-block;
          z-index: 1;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 6px;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          background-size: 400% 400%;
          z-index: -1;
          animation: pulse 3s ease infinite;
        }

        .btn span {
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          font-size: 16px;
          display: block;
          background: #0F1209;
          color: #FFFFFF;
          border-radius: 4px;
          padding: 12px 30px;
          position: relative;
          z-index: 1;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
        }

        /* Light Mode Styles - Using :global() for your global theme system */
        :global(.light-mode) :global(.faq-container) h2 {
          color: #000000;
        }

        :global(.light-mode) :global(.faq-container) p {
          color: #000000;
        }

        :global(.light-mode) :global(.faq-box) {
          background: #F5F5F5;
        }

        :global(.light-mode) :global(.faq) {
          background: #FFFFFF;
          border: 1px solid #E0E0E0;
        }

        :global(.light-mode) :global(.faq):hover {
          background: #F9F9F9;
        }

        :global(.light-mode) :global(.faq-question) {
          color: #000000;
        }

        :global(.light-mode) :global(.faq-answer) {
          color: #666666;
        }

        :global(.light-mode) :global(.support-container) #heading {
          color: #000000;
        }

        :global(.light-mode) :global(.support-container) #desc {
          color: #000000;
        }

        @media (max-width: 768px) {
          .faq-container {
            margin: 3rem auto;
          }
          
          .faq-container h2 {
            font-size: 24px;
            margin-left: 1rem;
          }
          
          .faq-container p {
            margin-left: 1rem;
          }
          
          .cabs {
            margin-left: 1rem;
            gap: 15px;
          }
          
          .cab span {
            padding: 10px 20px;
            font-size: 14px;
          }
          
          .faq-box {
            margin-left: 1rem;
            margin-right: 1rem;
            max-width: none;
          }
          
          .support {
            width: 90%;
          }
          
          .support-container #heading {
            font-size: 28px;
            line-height: 1.2;
          }
        }
      `}</style>

      {/* FAQ Container */}
      <div className="faq-container">
        <h2>How can we help you?</h2>
        <p>Please enter your question and we will find a right answer for you</p>
        
        <div className="cabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`cab ${activeCategory === category.id ? 'active fade-in' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="faq-box">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className={`faq fade-in ${activeFAQ === faq.id ? 'active' : ''}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="arrow">▾</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <div className="support">
        <div className="support-container">
          <div id="heading">Get in touch for more information</div>
          <div id="desc">
            For more information kindly email us on{' '}
            <strong>support@tradeved.com</strong>
          </div>
        </div>
        <button className="btn">
          <span>Connect with us</span>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;