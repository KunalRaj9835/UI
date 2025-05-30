// components/Navbar.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface MenuSection {
  title: string
  items: MenuItem[]
}

interface MenuItem {
  title: string
  description: string
}

const Navbar: React.FC = () => {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const productsMenuRef = useRef<HTMLDivElement>(null)

  // Menu data structure
  const menuSections: MenuSection[] = [
    {
      title: "Beginner",
      items: [
        {
          title: "Quest",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        },
        {
          title: "Paper Trading",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
      ]
    },
    {
      title: "Intermediate",
      items: [
        {
          title: "Copy Trading",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
      ]
    },
    {
      title: "Advanced",
      items: [
        {
          title: "Strategy Visualizer",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        },
        {
          title: "Screener",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        },
        {
          title: "Backtest",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        },
        {
          title: "Algo trading",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        }
      ]
    }
  ]

  // Load theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      setIsDarkMode(true)
      document.documentElement.classList.add("light-mode")
      document.body.classList.add("light-mode")
    } else {
      // Ensure dark mode is properly set
      document.documentElement.classList.remove("light-mode")
      document.body.classList.remove("light-mode")
    }
  }, [])

  // Handle theme toggle
  const handleThemeToggle = (): void => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("light-mode")
    document.body.classList.toggle("light-mode")
    
    // Save theme preference
    if (document.documentElement.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light")
    } else {
      localStorage.setItem("theme", "dark")
    }
  }

  // Handle products dropdown toggle
  const handleProductsToggle = (): void => {
    setIsProductsMenuOpen(!isProductsMenuOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        productsMenuRef.current && 
        !productsMenuRef.current.contains(event.target as Node)
      ) {
        setIsProductsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        /* Global Theme Variables */
        :root {
          --bg-primary: #000000;
          --bg-secondary: rgba(20, 25, 15, 0.9);
          --text-primary: #ffffff;
          --text-secondary: rgba(245, 245, 245, 0.7);
          --accent-color: #a4ff00;
          --border-color: rgba(255, 255, 255, 0.1);
          --hover-bg: rgba(255, 255, 255, 0.05);
        }

        :root.light-mode {
          --bg-primary: #ffffff;
          --bg-secondary: rgba(255, 255, 255, 0.9);
          --text-primary: #333333;
          --text-secondary: rgba(51, 51, 51, 0.7);
          --accent-color: #a4ff00;
          --border-color: rgba(0, 0, 0, 0.1);
          --hover-bg: rgba(0, 0, 0, 0.05);
        }

        /* Global Styles */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        html {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        body {
          background-color: var(--bg-primary);
          color: var(--text-primary);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Apply theme to all common elements */
        h1, h2, h3, h4, h5, h6 {
          color: var(--text-primary);
        }

        p, span, div {
          color: var(--text-primary);
        }

        a {
          color: var(--text-primary);
        }

        button {
          color: var(--text-primary);
        }

        /* Navbar Styles */
        .navbar {
          max-width: 1200px;
          margin: 20px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: var(--bg-secondary);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          position: relative;
          z-index: 100;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-primary);
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 16px;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--accent-color);
        }

        /* Products Dropdown */
        .products-dropdown {
          position: relative;
        }

        .products-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          padding: 8px 12px;
          transition: color 0.3s;
        }

        .products-button:hover {
          color: var(--accent-color);
        }

        .products-button svg {
          transition: transform 0.3s ease;
        }

        .products-button.active svg {
          transform: rotate(180deg);
        }

        .products-menu {
          display: none;
          position: absolute;
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          background: var(--bg-secondary);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 24px;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          z-index: 1000;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        :root.light-mode .products-menu {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .products-menu.active {
          display: grid;
        }

        .menu-section {
          background: var(--hover-bg);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid var(--border-color);
        }

        .menu-section h3 {
          color: var(--text-primary);
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .menu-item {
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .menu-item:hover {
          transform: translateY(-2px);
        }

        .menu-item h4 {
          color: var(--text-primary);
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 8px;
          transition: color 0.3s;
        }

        .menu-item:hover h4 {
          color: var(--accent-color);
        }

        .menu-item p {
          color: var(--text-secondary);
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Auth Section */
        .auth {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* Theme Toggle */
        .theme-toggle-container {
          display: flex;
          align-items: center;
        }

        .theme-toggle {
          display: none;
        }

        .toggle-label {
          display: block;
          width: 50px;
          height: 26px;
          background: var(--hover-bg);
          border-radius: 50px;
          position: relative;
          cursor: pointer;
          border: 1px solid var(--border-color);
          transition: all 0.3s;
        }

        .toggle-slider {
          position: absolute;
          top: 50%;
          left: 3px;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          background: var(--text-primary);
          border-radius: 50%;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .toggle-slider::before {
          content: "🌙";
        }

        .theme-toggle:checked + .toggle-label {
          background: rgba(164, 255, 0, 0.2);
        }

        :root.light-mode .theme-toggle:checked + .toggle-label {
          background: rgba(0, 123, 255, 0.2);
        }

        .theme-toggle:checked + .toggle-label .toggle-slider {
          left: 27px;
          background: var(--accent-color);
        }

        .theme-toggle:checked + .toggle-label .toggle-slider::before {
          content: "☀️";
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
            margin: 15px auto 0;
          }

          .nav-links {
            gap: 30px;
          }

          .products-menu {
            width: 90vw;
            grid-template-columns: 1fr;
            left: 0;
            transform: none;
          }
        }
      `}</style>
      
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TradeVed Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>
        
        <nav className="nav-links">
          <div className="products-dropdown" ref={productsMenuRef}>
            <button 
              className={`products-button ${isProductsMenuOpen ? 'active' : ''}`}
              onClick={handleProductsToggle}
              type="button"
              aria-expanded={isProductsMenuOpen}
              aria-haspopup="true"
            >
              Products
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            
            <div className={`products-menu ${isProductsMenuOpen ? 'active' : ''}`}>
              {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="menu-section">
                  <h3>{section.title}</h3>
                  <div className="menu-items">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="menu-item">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Link href="/pricing">Pricing</Link>
        </nav>
        
        <nav className="auth">
          <div className="theme-toggle-container">
            <input 
              type="checkbox" 
              id="theme-toggle" 
              className="theme-toggle"
              checked={isDarkMode}
              onChange={handleThemeToggle}
            />
            <label htmlFor="theme-toggle" className="toggle-label">
              <span className="toggle-slider" />
            </label>
          </div>
        </nav>
      </nav>
    </>
  )
}

export default Navbar