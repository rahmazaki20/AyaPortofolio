import React from 'react'
import './Sec1.css'
import axonometricImage from '/sec1(1).png'
import mapImage from '/sec1(2).png'
import elevationImage from '/sec1(3).png'
export default function Sec1() {
    const handlePrint = () => {
        window.print()
    }

    return (
        <>
            <div className="page-container">
                {/* Top Header */}
                <div className="header-bar">
                    <span>Aya Zaki</span>
                    <span>Selected Works</span>
                </div>

                {/* Main 2-Column Content Area */}
                <div className="main-grid">
                    {/* LEFT SPREAD */}
                    <div className="left-spread">
                        <div className="left-content-grid">
                            {/* Column 1: Titles & Map */}
                            <div className="left-meta-col">
                                <h1 className="project-title">HAI</h1>
                                <div className="project-subtitle">Infill House</div>

                                <div className="meta-list">
                                    <div><span>Location</span>: London, UK</div>
                                    <div><span>Year</span>: 2026</div>
                                    <div><span>Type</span>: Residential</div>
                                </div>

                                {/* Map Graphic Placeholder */}
                                <div className="hero-img-container">
                                    <img src={axonometricImage} alt="Context Elevation Render" />
                                </div>
                            </div>

                            {/* Column 2: Project Description */}

                            <div className="left-desc-col">
                                <div className="map-container">
                                    <img src={mapImage} alt="Location Map" />
                                </div>
                                <p className="body-text">
                                    In the heart of Clapton Street, within London’s historic context, this infill housing project represents a sophisticated response to the challenge of creating a 3-story modern home that harmonizes with its sensitive urban fabric. The design approach prioritises deeply empathetic, prioritizing the seamless integration of materiality and neighbourly privacy. The facade of dark, charcoal brick is a deliberate, refined reinterpretation of London’s characteristic brickwork, anchoring the structure and making it feel immediately appropriate to its place. Privacy is paramount; I developed a considered geometry of staggered volumes of staggered volumes and strategically recessed vertical window slots to eliminate direct overlooking and ensure seclusion for both the new residents and their neighbours. Rising across three distinctly useful levels—ground, first, and second—the internal architecture maximizes useful space, offering a functional floor plan designed for modern London living that caters equally to user comfort and investor viability. The composition is grounded by a textured stone-paved entry courtyard, flanked by an articulated wood-slat wall that defines a quiet and protected arrival sequence.
                                </p>
                            </div>
                        </div>

                        {/* Full-Width Elevation Render Image for Left Column */}


                    </div>

                    {/* RIGHT SPREAD */}

                    <div className="right-spread">

                        <h2 className="section-heading">Design Evolution &amp; Constraints</h2>

                        <div className="feature-list">
                            <div className="feature-item">
                                <strong>Site &amp; Typology:</strong>  High-density urban infill residence tailored to constrained backhand/infill plots in Greater London.
                            </div>
                            <div className="feature-item">
                                <strong>Planning &amp; Massing:</strong>  Stepped upper-volume massing designed to respect neighbour daylight envelope constraints, privacy sightliness, and boundary wall conditions.
                            </div>
                            <div className="feature-item">
                                <strong>Daylight Optimization:</strong>Integration of a private internal light well/courtyard and strategic fenestration to bring natural light deep into a narrow plot footprint.
                            </div>
                            <div className="feature-item">
                                <strong>Technical Detailing:</strong> Precise brickwork bonding, recessed lintels, shadow gaps, and high-performance building envelope considerations.
                            </div>

                            {/* Axonometric 3D Diagram Image */}
                            <div className="diagram-img-container">
                                <img src={elevationImage} alt="Axonometric 3D Model" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    {/* <div className="tech-footer">
                        <span>4</span>
                        <span>5</span>
                    </div> */}
                </div>

                {/* Print Button */}
                {/* <div className="controls">
        <button className="btn-print" onClick={handlePrint}>
          Print / Save PDF
        </button>
      </div> */}

            </div>
        </>
    )
}