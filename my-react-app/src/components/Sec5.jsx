import React from 'react';
import './Sec5.css';

// TODO: Import your actual images here
// import render1 from '../assets/render-1.png';
// import render2 from '../assets/render-2.png';
// import render3 from '../assets/render-3.png';
// import section3D from '../assets/section-3d.png';
import render1 from '../../public/sec5(1).png';
import render2 from '../../public/sec5(2).png';
import render3 from '../../public/sec5(3).png';
import section3D from '../../public/sec5(4).png';
export default function Sec5() {
  return (
    <div className="render-page-container">
      
      {/* Top Header */}
      <div className="render-header">
        <span>Aya Zaki</span>
        <span>Selected Works</span>
      </div>

      {/* Section Titles Grid */}
      <div className="render-titles-grid">
        <h1 className="render-title">Final Exterior Renders (Selected Scheme)</h1>
        <h1 className="render-title"> 3D section &amp; Detail View</h1>
      </div>

      {/* Main Content Grid */}
      <div className="render-grid">
        
        {/* LEFT COLUMN: Render Images & Captions */}
        <div className="render-col-left">
          <div className="render-left-grid">
            
            {/* Top Left Image & Caption */}
            <img 
              src={render2}
              alt="Perspective view showing primary access" 
              className="render-img top-left-img"
            />
            <p className="caption-top-left">
Perspective view showing the primary access <br></br>
alleyway, defined by boundary masonry and dark <br></br>
timber fencing leading toward the main threshold.
            </p>

            {/* Top Right Image & Caption */}
            <img 
              src={render3}
              alt="Direct front elevation" 
              className="render-img top-right-img"
            />
            <p className="caption-top-right">
Direct front elevation highlighting the symmetrical <br></br>
upper window arrangement, textured brick banding, <br></br>
and stepped upper story.
            </p>

            {/* Bottom Left Image */}
            <div className="bottom-left-img-container">
              <img 
                src={section3D}
                alt="Contextual corner perspective" 
                className="render-img"
              />
            </div>

            {/* Bottom Right Text */}
            <p className="bottom-right-text">
Contextual corner perspective illustrating the <br></br>
stepped roofline and interaction with surrounding <br></br>
boundary walls.

            </p>

          </div>
        </div>

        {/* RIGHT COLUMN: Large 3D Section View */}
        <div className="render-col-right">
          <div className="section-img-container">
            <img 
              src={render1}
              alt="3D Section and Detail View" 
            />
          </div>
        </div>

      </div>

      {/* Bottom Footer / Page Numbers */}
      <div className="render-footer">
        <span>12</span>
        <span>13</span>
      </div>

    </div>
  );
}