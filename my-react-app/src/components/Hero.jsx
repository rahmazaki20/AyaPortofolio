import React from 'react'
import './Hero.css'
import profileImage from '../../public/profile.png'
export default function Hero() {
  return (
    <div className="resume-container">
      {/* COLUMN 1: Profile & Bio */}
      <div className="col-1">
        <h1>AYA ZAKI</h1>

        <div className="profile-img-container">
          <img src={profileImage} alt="Profile Picture" />
        </div>

        <div className="job-title-badge">
          Architecture Designer &amp; LEED® Green Associate™
        </div>

        <p className="bio-text">
          I am an Egyptian Architectural Designer with over 9 years of experience delivering luxury residential and commercial projects across the UK, UAE, and Egypt. I specialize in bridging the gap between high-end visual concepts and technical BIM precision. With a LEED Green Associate credential, I focus on creating designs that are as environmentally responsible as they are aesthetically striking. My goal is to transform complex briefs into approved, buildable, and sustainable architectural solutions.
        </p>
      </div>

      {/* COLUMN 2: Certifications, Education & Skills */}
      <div className="col-2">
        <section>
          <h2>Certifications</h2>
          <p>LEED Green Associate | U.S. Green Building Council (USGBC) | 2025</p>
          <p style={{ marginTop: '8px' }}>Professional BIM Course | SAE School of Architecture Egypt | 2025</p>
          <div className="sub-title">(Course Focus: Advanced Revit workflows, Navisworks clash detection, BIM project setup)</div>
          <p style={{ marginTop: '8px' }}>Architectural Design Workshops (Levels 02 &amp; 03) | SAE School of Architecture, Egypt | 2023, 2024</p>
        </section>

        <section>
          <h2>Education</h2>
          <p>Bachelor of Engineering in Architecture | Helwan University, Cairo, Egypt</p>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skill-category">Technical Skills</div>
          <div className="skill-list">
            <span style={{ color: '#000' }}>Design &amp; Sustainability: </span>
            Concept Design Development, Sustainable Design Principles (LEED v4.1), Solar &amp; Daylight Analysis (Insight 360), Site Orientation Optimization, and Environmental Performance Simulation.
          </div>
          <div className="skill-list">
            <span style={{ color: '#000' }}>3D Modelling &amp; Visualization: </span> 
            3ds Max, Sketch Up, Rhino, V-Ray, Corona
          </div>
          <div className="skill-list">
            <span style={{ color: '#000' }}>Parametric Design: </span> 
            Grasshopper
          </div>
          <div className="skill-list">
            <span style={{ color: '#000' }}>BIM &amp; CAD: </span> 
            Autodesk Revit (Modelling, Families, Documentation), Navisworks Manage (Clash Detection), BIM 360, AutoCAD
          </div>

          <div className="skill-category" style={{ marginTop: '10px' }}>Professional Knowledge</div>
          <div className="skill-list">
            BIM Standards &amp; Workflows | Integrated Project Delivery | Sustainable Design Principles | Architectural Design Development | Construction Documentation.
          </div>
        </section>
      </div>

      {/* COLUMN 3: Professional Experience */}
      <div className="col-3">
        <section>
          <h2>Professional Experience</h2>

          <div>
            <h3 style={{ fontWeight: '900' }}>Architectural Designer | Taha &amp; Co Architectural | London, UK</h3>
            <div className="date-range">Jul 2025 – Present</div>
            <p>
              Design Leadership: I translated complex project requirements into high-end visual concepts. By adapting specific regional styles to meet client expectations, I successfully secured approvals for luxury housing projects.
            </p>
            <p>
              Technical Documentation: I managed the full architectural drawing set, including plans and elevations. I also performed detailed spatial and shadow analyses to ensure every design met strict environmental and daylighting regulations.
            </p>
          </div>

          <div style={{ marginTop: '15px' }}>
            <h3 style={{ fontWeight: '900' }}>Architecture Designer (Freelance) | UAE (Remote/Project based)</h3>
            <div className="date-range">Sep 2024 – 2025</div>
            <p>
              Residential Design: Led the architectural design for a 10-villa complex in Ajman and luxury twin villas in Dubai, managing the full process from initial massing to final 3D visualization.
            </p>
            <p>
              Concept to Delivery: Developed comprehensive design sets and photorealistic renderings, ensuring all architectural details and material selections aligned with the regional GCC luxury market.
            </p>
          </div>

          <div style={{ marginTop: '15px' }}>
            <h3 style={{ fontWeight: '900' }}>Architectural &amp; Interior Designer | Makan | Cairo, Egypt</h3>
            <div className="date-range">Aug 2015 – 2022</div>
            <p>
              Managed the complete design lifecycle for over 10 commercial and residential projects, evolving initial concepts into comprehensive architectural solutions. Directed the selection of materials and FF&amp;E, creating detailed mood boards and material schedules that balanced luxury aesthetics with client budget constraints. Produced detailed construction documentation and 3D models, ensuring rigorous quality control and technical accuracy throughout the design development phase.
            </p>
          </div>
        </section>
      </div>

      {/* COLUMN 4: Languages & Contact Information */}
      <div className="col-4">
        <section>
          <h2>Languages</h2>
          <p style={{ margin: '2px 0' }}>English: B2</p>
          <p>Arabic: Mother tongue</p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Contact Information</h2>
          <p style={{ margin: '2px 0' }}>+201066509371</p>
          <p>aya297zaki@gmail.com</p>
        </section>
      </div>
    </div>
  )
}