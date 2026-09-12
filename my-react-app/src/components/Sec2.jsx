import React from 'react';
import './Sec2.css';
import Sec2Image from '/sec2(1).png'; // Placeholder image for technical plans and sections
import Sec3Image from '/sec2(2).png';
// TODO: Import your actual images here
// import sectionsImage from '../assets/sections.png';
// import floorPlansImage from '../assets/floor-plans.png';

export default function Sec2() {
  return (
    <div className="tech-page-container">
      
      {/* Top Header */}
      <div className="tech-header">
        <span>Aya Zaki</span>
        <span>Selected Works</span>
      </div>

      {/* Main Title */}
      <h1 className="tech-main-title">Technical Plans &amp; Sections</h1>

      {/* Main 2-Column Layout */}
      <div className="tech-grid">
        
        {/* LEFT COLUMN: Sections Image */}
        <div className="tech-col-left">
          <div className="tech-image-container">
            {/* Replace src with {sectionsImage} when ready */}
            <img 
              src={Sec2Image}
              alt="Technical Sections AA and BB" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Floor Plans Image */}
        <div className="tech-col-right">
          <div className="tech-image-container">
            {/* Replace src with {floorPlansImage} when ready */}
            <img 
              src={Sec3Image}
              alt="Floor Plans" 
            />
          </div>
        </div>

      </div>

      {/* Bottom Footer / Page Numbers */}
      <div className="tech-footer">
        <span>6</span>
        <span>7</span>
      </div>

    </div>
  );
}