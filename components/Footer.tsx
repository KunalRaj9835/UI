"use client";

import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section (Logo & Description) */}
          <div className="footer-left">
            <div className="logo-container">
              <div className="logo">
                <img className="logo-icon" src="./logo.png" alt="Logo Icon" />
              </div>
            </div>
            <p>Streamlined learning to algo trading for retail traders</p>
            <div className="social-icons">
              <a href="https://web.whatsapp.com/" className="social-link whatsapp">
                <img className="logo-icon" src="./whatsapp.png" alt="" />
              </a>
              <a href="https://www.instagram.com/" className="social-link instagram">
                <img className="logo-icon" src="./instagram.svg.png" alt="" />
              </a>
              <a href="https://twitter.com/" className="social-link twitter">
                <img className="logo-icon" src="./twitter.png" alt="" />
              </a>
              <a href="https://www.facebook.com/" className="social-link facebook">
                <img className="logo-icon" src="./facebook.svg.webp" alt="" />
              </a>
            </div>
          </div>

          {/* Right Section (Links) */}
          <div className="footer-links">
            <div className="footer-column">
              <h3>Products</h3>
              <p className="subtitle">(Users)</p>
              <ul>
                <li><a href="#">Quest</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Build</a></li>
                <li><a href="#">Code</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Products</h3>
              <p className="subtitle">(Businesses)</p>
              <ul>
                <li><a href="#">Quest Creators</a></li>
                <li><a href="#">Lead Traders</a></li>
                <li><a href="#">For experts</a></li>
                <li><a href="#">For beginners</a></li>
                <li><a href="#">For Intermediates</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Brand Kit</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press and Media</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Documents</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Tickets</a></li>
                <li><a href="#">Request Feature</a></li>
                <li><a href="#">Bug Bounty</a></li>
                <li><a href="/Contact_us">Contact Us</a></li>
                <li><a href="#">Download and Resources</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Cookies Policies</a></li>
                <li><a href="#">Rewards Program</a></li>
                <li><a href="#">API License</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>©2025 TradeVed. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <span className="arrow-up">↑</span>
        </button>
      )}
    </>
  );
};

export default Footer;