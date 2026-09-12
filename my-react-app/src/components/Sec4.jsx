import React from 'react';
import './Sec4.css';

// TODO: Import your actual images here
import Sec4Image from '../assets/sec4(1).png'; // Placeholder image for technical plans and sections
import Sec5Image from '../assets/sec4(2).png'; // Placeholder image for technical plans and sections
import Sec6Image from '../assets/sec4(3).png'; // Placeholder image for technical plans and sections
import Sec7Image from '../assets/sec4(4).png'; // Placeholder image for technical plans and sections

export default function MaterialityPage() {
  return (
    <div className="mat-page-container">
      
      {/* Top Header */}
      <div className="mat-header">
        <span>Aya Zaki</span>
        <span>Selected Works</span>
      </div>

      {/* Main Title Section */}
      <h2 className="mat-main-title">Materiality  &amp; Contextual Response</h2>
      <h3 className="mat-subtitle">Option C: White London Stock Brick (Alternative Option)</h3>

      {/* Main 2-Column Layout */}
      <div className="mat-grid">
        
        {/* LEFT COLUMN: Diagrams & Captions */}
        <div className="mat-col-left">
          
          {/* Top Diagram Block */}
          <div className="mat-diagram-block">
            {/* Replace src with {axonometricImg} when ready */}
            <img 
              src={Sec5Image}
              alt="Axonometric Massing Study" 
            />
            <p className="mat-caption">
Testing massing relationships and light well setbacks <br></br>against adjacent rear boundaries on a constrained <br></br>backhand plot.
            </p>
          </div>

          {/* Bottom Diagram Block (Contains the two elevations side by side) */}
          <div className="mat-diagram-block">
            {/* Note: You can either export the two elevations as ONE image, 
                or wrap them in a flex container like I did here. */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <img 
                src={Sec6Image}
                alt="Street-Facing Elevation Study" 
                style={{ flex: 1 }}
              />
              <img 
                src={Sec7Image} 
                alt="Back Elevation Study" 
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
              <p className="mat-caption" style={{ flex: 1 }}>Street-Facing Elevation Study</p>
              <p className="mat-caption" style={{ flex: 1 }}>Back Elevation Study</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Main Render & Caption */}
        <div className="mat-col-right">
          <div className="mat-render-container">
            {/* Replace src with {heroRenderImg} when ready */}
            <img 
              src={Sec4Image}
              alt="Main Courtyard Render" 
            />
          </div>
          <p className="mat-caption">
Testing facade proportions, decorative brick banding <br></br> rhythm, and courtyard light reflection prior to final <br></br>material selection.
          </p>
        </div>

      </div>

      {/* Bottom Footer / Page Numbers */}
      <div className="mat-footer">
        <span>10</span>
        <span>11</span>
      </div>

    </div>
  );
}