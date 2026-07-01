import { useState } from 'react';
import './Gallary.css';

import img1  from '../../assets/gallary/diamond cut.jpg';
import img2  from '../../assets/gallary/dome 2mdia.jpg';
import img3  from '../../assets/gallary/Dome 3mdia.jpg';
import img4  from '../../assets/gallary/dome-fountain-713.jpg';
import img5  from '../../assets/gallary/IMG20210622200308_00.jpg';
import img6  from '../../assets/gallary/IMG20230502185406_01.jpg';
import img7  from '../../assets/gallary/IMG20230502185411_01.jpg';
import img8  from '../../assets/gallary/IMG20230502185444_01.jpg';
import img9  from '../../assets/gallary/IMG20230502185505_01.jpg';
import img10 from '../../assets/gallary/IMG20230502190007_01.jpg';
import img11 from '../../assets/gallary/IMG20230502190151_01.jpg';
import img12 from '../../assets/gallary/IMG20230502190330_01.jpg';
import img13 from '../../assets/gallary/IMG20230502190518_01.jpg';
import img14 from '../../assets/gallary/IMG20230502190559_01.jpg';
import img15 from '../../assets/gallary/IMG20230823230802.jpg';
import img16 from '../../assets/gallary/IMG20230823230903.jpg';
import img17 from '../../assets/gallary/IMG20240305192520.jpg';
import img18 from '../../assets/gallary/IMG20240305193004.jpg';
import img19 from '../../assets/gallary/IMG20250925003759.jpg';
import vid1  from '../../assets/gallary/VID20220311203413.mp4';
import vid2  from '../../assets/gallary/VID-20241016-WA0012.mp4';

const mediaItems = [
  { type: 'image', src: img1  },
  { type: 'image', src: img2  },
  { type: 'image', src: img3  },
  { type: 'image', src: img4  },
  { type: 'image', src: img5  },
  { type: 'image', src: img6  },
  { type: 'image', src: img7  },
  { type: 'image', src: img8  },
  { type: 'image', src: img9  },
  { type: 'image', src: img10 },
  { type: 'image', src: img11 },
  { type: 'image', src: img12 },
  { type: 'image', src: img13 },
  { type: 'image', src: img14 },
  { type: 'image', src: img15 },
  { type: 'image', src: img16 },
  { type: 'image', src: img17 },
  { type: 'image', src: img18 },
  { type: 'image', src: img19 },
  { type: 'video', src: vid1  },
  { type: 'video', src: vid2  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev + 1) % mediaItems.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') setLightbox((prev) => (prev + 1) % mediaItems.length);
    if (e.key === 'ArrowLeft')  setLightbox((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <span className="gallery-badge">Our Work</span>
          <h2 className="gallery-heading">Project Gallery</h2>
          <p className="gallery-subtext">
            A visual showcase of our musical fountains, lighting systems, and water displays
            crafted across various installations.
          </p>
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {mediaItems.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View item ${index + 1}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt="" className="gallery-media" />
              ) : (
                <video
                  src={item.src}
                  className="gallery-media gallery-video-thumb"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {/* play icon badge for videos */}
              {item.type === 'video' && (
                <span className="gallery-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              )}

              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Media lightbox"
          tabIndex={-1}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>

          <button className="lightbox-arrow lightbox-prev" onClick={goPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {mediaItems[lightbox].type === 'image' ? (
              <img
                src={mediaItems[lightbox].src}
                alt=""
                className="lightbox-media"
              />
            ) : (
              <video
                src={mediaItems[lightbox].src}
                className="lightbox-media"
                controls
                autoPlay
                loop
              />
            )}
            <span className="lightbox-counter">{lightbox + 1} / {mediaItems.length}</span>
          </div>

          <button className="lightbox-arrow lightbox-next" onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
