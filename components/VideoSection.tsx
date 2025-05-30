'use client';

import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <>
      <style>
        {`
          .video-section {
            margin-top: 2rem;
            position: relative;
            width: 100vw;
            z-index: 100;
          }

          .video-wrapper {
            display: flex;
            justify-content: center;
          }

          .video-iframe {
            width: 980px;
            height: 500px;
            border: none;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div className="video-section">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/uYq9INqpaOQ"
            allowFullScreen
            loading="lazy"
            title="8K HDR OLED Video Demo"
            className="video-iframe"
          />
        </div>
      </div>
    </>
  );
};

export default VideoSection;
