import React from 'react';
import './Cover.css';
const Cover = () => {
  return (
    <div className="cover-page-wrapper">
      
      {/* Black Background Area */}
      <div className="cover-black-area">
        
        {/* White Inner Card */}
        <div className="cover-white-card">
          
          {/* Top Section */}
          <div className="cover-top-section">
            <span className="cover-label">
              Portfolio.
            </span>
            <h1 className="cover-title">
              Aya Zaki
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="cover-bottom-section">
            <span>Selected Works</span>
            <span>2025</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Cover;