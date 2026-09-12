import React from 'react';
import './Sec6.css';

// TODO: Import your actual images here
import interiorImg1 from '/sec6(1).png';
import interiorImg2 from '/sec6(2).png';
import interiorImg3 from '/sec6(3).png';
import interiorImg4 from '/sec6(4).png';
import interiorImg5 from '/sec6(5).png';
import interiorHero from '/sec6(6).png';

export default function Sec6() {
  return (
    <div className="interiors-page-container">
      
      {/* Top Header */}
      <div className="interiors-header">
        <span>Aya Zaki</span>
        <span>Selected Works</span>
      </div>

      {/* Main 2-Column Layout */}
      <div className="interiors-main-grid">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="interiors-col-left">
          
          {/* Title & Meta Block */}
          <div className="interiors-title-block">
            <h1 className="interiors-main-title">Interiors</h1>
            <div className="interiors-meta-list">
              <div>Several Projects</div>
              <div><span>Location</span>: Egypt</div>
              <div><span>Year</span>: from 2015 to 2022</div>
              <div><span>Type</span>: Residential-commercial</div>
            </div>
          </div>

          {/* Row 1: Kitchen */}
          <div className="interior-row">
            <div className="interior-img-container">
              <img 
                src={interiorImg1} 
                alt="Kitchen Interior" 
              />
            </div>
            <div className="interior-text-container">
              <p>
This contemporary twin-bedded hotel <br></br>
room for the Seagull Hotel in Hurghada<br></br>
features a warm slatted wood <br></br>
headboard panel and light tiled floors, <br></br>
complemented by a comfortable side <br></br>
seating area with charcoal grey chairs <br></br>
and a small white table.


              </p>
            </div>
          </div>

          {/* Row 2: Dressing Room */}
          <div className="interior-row">
            <div className="interior-img-container">
              <img 
                src={interiorImg2} 
                alt="Dressing Room Interior" 
              />
            </div>
            <div className="interior-text-container">
              <p>
This dressing room design seamlessly <br></br>
integrates a warm, wood-lined walk-in closet <br></br>
with an elegant central vanity nook defined<br></br>
by a striking floral mosaic feature wall and <br></br>
sleek brass-framed furniture, all anchored by a <br></br>
polished terrazzo floor.
              </p>
            </div>
          </div>

          {/* Row 3: Bathroom */}
          <div className="interior-row">
            <div className="interior-img-container">
              <img 
                src={interiorImg3} 
                alt="Bathroom Interior" 
              />
            </div>
            <div className="interior-text-container">
              <p>
This modern-industrial bathroom design <br></br>
seamlessly integrates cool grey marble-<br></br>
patterned tile with circular mirror, to fulfill<br></br>
the client’s desire for a unique, natural, and <br></br>
texture-driven urban oasis.
              </p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="interiors-col-right">
          
          {/* Full Width Top Image (Office Meeting Room) */}
          <div className="interior-full-img-container">
            <img 
              src={interiorImg4} 
              alt="Office Meeting Area" 
            />
          </div>

          {/* Row 1: Office Lounge */}
          <div className="interior-row">
            <div className="interior-img-container">
              <img 
                src={interiorImg5} 
                alt="Office Lounge" 
              />
            </div>
            <div className="interior-text-container">
              <p>
The client wanted an office that instantly <br></br>
conveys competence, quality, and a premium <br></br>
market position ,so the sophisticated modern<br></br>
executive office seamlessly blends a professional <br></br>
boardroom and private desk area with a <br></br>
comfortable lounge, defined by contrasting <br></br>
textured walls, natural wood flooring, and<br></br>
extensive integrated lighting.
              </p>
            </div>
          </div>

          {/* Row 2: Office Corridor */}
          <div className="interior-row">
            <div className="interior-img-container">
              <img 
                src={interiorHero} 
                alt="Office Corridor" 
              />
            </div>
            <div className="interior-text-container">
              <p>
A contemporary office design features a <br></br>
spacious open-plan layout defined by wood <br></br>
plank flooring and expansive glass partitions <br></br>
with black frames, creating distinct light-filled <br></br>
private offices that seamlessly integrate with a<br></br>
main common area.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Footer / Page Numbers */}
      <div className="interiors-footer">
        <span>14</span>
        <span>15</span>
      </div>

    </div>
  );
}