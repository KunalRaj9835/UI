'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductCard {
  id: number;
  title: string;
  description: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  image: string;
}

const productData: ProductCard[] = [
  {
    id: 1,
    title: 'Strategy Visualizer',
    description: 'Visualize your trading strategies with advanced charting and analytical tools to optimize performance.',
    category: 'advanced',
    image: '/card.png'
  },
  {
    id: 2,
    title: 'Backtest',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    category: 'advanced',
    image: '/card.png'
  },
  {
    id: 3,
    title: 'Screener',
    description: 'Filter and find the best trading opportunities that match your criteria with our powerful screening tools.',
    category: 'advanced',
    image: '/card.png'
  },
  {
    id: 4,
    title: 'Algo Trading',
    description: 'Create, test and deploy automated trading algorithms without writing complex code.',
    category: 'advanced',
    image: '/card.png'
  },
  {
    id: 5,
    title: 'Journal',
    description: 'Track your trades, analyze patterns, and improve your performance with our comprehensive journal system.',
    category: 'intermediate',
    image: '/card.png'
  },
  {
    id: 6,
    title: 'Quest',
    description: 'Learn trading concepts through interactive lessons and practical challenges to build your skills.',
    category: 'beginner',
    image: '/card.png'
  }
];

type FilterType = 'all' | 'beginner' | 'intermediate' | 'advanced';

const TradingToolsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [fadeInKey, setFadeInKey] = useState<number>(0);

  const handleTabClick = (filter: FilterType) => {
    setActiveFilter(filter);
    // Trigger fade-in animation by changing key
    setFadeInKey(prev => prev + 1);
  };

  const handleExploreClick = (productTitle: string) => {
    // Convert title to URL-friendly format
    const slug = productTitle.toLowerCase().replace(/\s+/g, '-');
    // Navigate to the product page (will show 404 if doesn't exist)
    window.location.href = `/${slug}`;
  };

  const filteredProducts = productData.filter(product => 
    activeFilter === 'all' || product.category === activeFilter
  );

  const tabs: { filter: FilterType; label: string }[] = [
    { filter: 'all', label: 'All Products' },
    { filter: 'beginner', label: 'Beginner' },
    { filter: 'intermediate', label: 'Intermediate' },
    { filter: 'advanced', label: 'Advanced' }
  ];

  return (
    <section className="tools">
      <div className="tools-align">
      <h2>Tools to Trade Smarter</h2>
      <div className="tools-content">
        <div className="tabs">
          {tabs.map(({ filter, label }) => (
            <button
              key={filter}
              className={`tab ${activeFilter === filter ? 'active fade-in' : ''}`}
              onClick={() => handleTabClick(filter)}
              data-filter={filter}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
        <p>
          Unify your trading workflow.
          <br />
          strategies, go live, analyze performance, and automate—all in one place.
          <br />
          Built to support traders at every level.
        </p>
      </div>
      </div>
      <div className="product-grid" key={fadeInKey}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            data-category={product.category}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={360}
              className="product-image"
            />
            <div className="product-card-content">
              <h3>{product.title}</h3>
              <p className="product-description">
                {product.description}
              </p>
              <button 
                className="btn-explore"
                onClick={() => handleExploreClick(product.title)}
              >
                <span>Explore</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tools {
          margin-top: 5.5rem;
          z-index: 100;
        }

        .tools-align {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: left;
        }

        .tools h2 {
          font-family: Raleway, sans-serif;
          font-weight: 600;
          font-size: 40px;
          line-height: 100%;
          color: white;
        }

        .tools p {
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          margin-top: 2rem;
          line-height: 120%;
          color: white;
        }

        /* Light Mode Styles */
        :global(.light-mode) .tools h2 {
          color: #000 !important;
        }

        :global(.light-mode) .tools p {
          color: #000 !important;
        }

        .tabs {
          display: flex;
          gap: 30px;
          justify-content: flex-start;
          margin-top: 20px;
        }

        .tab {
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          padding: 1.5px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-block;
          border: none;
          outline: none;
          box-shadow: none;
          transition: transform 0.3s ease;
        }

        .tab:hover {
          transform: translateY(-2px);
        }

        .tab span {
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
          transition: box-shadow 0.3s ease;
        }

        :global(.light-mode) .tab span {
          background-color: #FFFFFF !important;
          color: #0F1209 !important;
        }

        .tab.active span {
          box-shadow: 0 4px 12px rgba(88, 134, 0, 0.8);
        }

        .tab.fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin: 40px auto;
          max-width: 1200px;
          padding: 0 6.5rem;
          z-index: 100;
        }

        .product-card {
          position: relative;
          height: 360px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
          background: #0f1209;
          transition: transform 0.3s ease;
          z-index: 101;
        }

        :global(.light-mode) .product-card {
          background: #FFFFFF !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-card :global(.product-image) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(0.95);
          transition: transform 0.3s;
        }

        .product-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          padding: 20px 24px;
          color: #fff;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          transition: height 0.3s ease-in-out;
          height: 70px;
          overflow: hidden;
        }

        :global(.light-mode) .product-card-content {
          background: rgba(255, 255, 255, 0.95) !important;
          color: #000 !important;
          border-top: 1px solid rgba(0, 0, 0, 0.08) !important;
        }

        .product-card:hover .product-card-content {
          height: 65%;
        }

        .product-card-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
          color: #fff;
          transition: margin 0.3s ease;
        }

        :global(.light-mode) .product-card-content h3 {
          color: #000 !important;
        }

        .product-card:hover .product-card-content h3 {
          margin-bottom: 12px;
        }

        .product-description {
          opacity: 0;
          height: 0;
          overflow: hidden;
          transition: opacity 0.3s ease, height 0.3s ease;
          font-size: 13px;
          line-height: 1.4;
          color: #ccc;
          margin-bottom: 15px;
        }

        :global(.light-mode) .product-description {
          color: #666 !important;
        }

        .product-card:hover .product-description {
          opacity: 1;
          height: auto;
        }

        .btn-explore {
          background-color: #0F1209;
          color: #FFFFFF;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-family: Raleway, sans-serif;
          font-weight: 700;
          background: radial-gradient(179.26% 179.26% at 16.76% 0%, #9BEC00 0%, #588600 100%);
          padding: 2px;
          display: inline-block;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .btn-explore span {
          font-family: Raleway, sans-serif;
          font-weight: 700;
          font-size: 16px;
          display: block;
          background: #0F1209;
          color: #fff;
          border-radius: 4px;
          padding: 10px 50px;
        }

        :global(.light-mode) .btn-explore span {
          background: #FFFFFF !important;
          color: #0F1209 !important;
        }

        .product-card:hover .btn-explore {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
        }

        .btn-explore:hover {
          transform: translateY(-2px);
          box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
        }

        :global(.light-mode) .btn-explore:hover {
          box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1) !important;
        }

        @media (max-width: 992px) {
          .product-grid {
            padding: 0 3rem;
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr;
            padding: 0 2rem;
          }
          
          .tools-content {
            margin-left: 2rem;
          }
          
          .tools h2 {
            margin-left: 2rem;
            font-size: 32px;
          }
          
          .tabs {
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .tab span {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default TradingToolsSection;