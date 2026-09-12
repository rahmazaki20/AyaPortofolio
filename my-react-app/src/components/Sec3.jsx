import React from 'react'
import Sec3Image from '/sec3(1).png'; // Placeholder image for technical plans and sections
import Sec4Image from '/sec3(2).png';
import './Sec3.css';
export default function Sec3() {
  return (
    <>
  <div className="tech-page-container">
      
      {/* Top Header */}
      <div className="tech-header">
        <span>Aya Zaki</span>
        <span>Selected Works</span>
      </div>

      {/* Main Title */}
     
      {/* Main 2-Column Layout */}
      <div className="tech-grid">
        
        {/* LEFT COLUMN: Sections Image */}
        <div className="tech-col-left">
             <h2 className="tech-main-title"> Materiality &amp; Contextual Response 
<p>Option A: Dark Textured Engineering Brick</p>
             </h2>
         
          <div className="tech-image-container">
            {/* Replace src with {sectionsImage} when ready */}
            <img 
              src={Sec3Image}
              alt="Technical Sections AA and BB" 
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Floor Plans Image */}
        <div className="tech-col-right">
           <h2 className="tech-main-title"> Materiality &amp; Contextual Response

            <p>Option B: Warm London Stock Brick (Alternative Option)</p>
           </h2>
            

          <div className="tech-image-container">
            {/* Replace src with {floorPlansImage} when ready */}
            <img 
              src={Sec4Image}
              alt="Floor Plans" 
            />
          </div>
        </div>

      </div>

      {/* Bottom Footer / Page Numbers */}
      <div className="tech-footer">
        <span>8</span>
        <span>9</span>
      </div>

    </div>
    </>
  )
}
