import { useState } from 'react';
import './Gallary.css';

import img1 from '../../assets/gallary/diamond cut.jpg';
import img2 from '../../assets/gallary/dome 2mdia.jpg';
import img3 from '../../assets/gallary/Dome 3mdia.jpg';
import img4 from '../../assets/gallary/dome-fountain-713.jpg';
import img5 from '../../assets/gallary/IMG20210622200308_00.jpg';
import img6 from '../../assets/gallary/IMG20230502190518_01.jpg';
import img7 from '../../assets/gallary/IMG20230502190559_01.jpg';
import img8 from '../../assets/gallary/IMG20230823230802.jpg';
import img9 from '../../assets/gallary/IMG20230823230903.jpg';
import img10 from '../../assets/gallary/IMG20240305193004.jpg';
import vid1 from '../../assets/gallary/VID20220311203413.mp4';

const mediaItems = [
  { type: 'image', src: img1,  caption: 'Diamond Cut Fountain' },
  { type: 'image', src: img2,  caption: 'Dome Fountain 2m' },
  { type: 'image', src: img3,  caption: 'Dome Fountain 3m' },
  { type: 'image', src: img4,  caption: 'Dome Fountain Display' },
  { type: 'image', src: img5,  caption: 'Fountain Installation' },
  { type: 'image', src: img6,  caption: 'Evening Show' },
  { type: 'image', src: img7,  caption: 'Night Display' },
  { type: 'image', src: img8,  caption: 'Illuminated Fountain' },
  { type: 'image', src: img9,  caption: 'Water & Light Show' },
  { type: 'image', src: img10, caption: 'Fountain Project 2024' },
  { type: 'video', src: vid1,  caption: 'Live Fountain Show' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null

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
    if (e.key === 'ArrowLeft') setLightbox((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
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
              aria-label={`Open ${item.caption}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.caption} className="gallery-media" />
              ) : (
                <video src={item.src} className="gallery-media gallery-video-thumb" muted playsInline />
              )}

              <div className="gallery-overlay">
                {item.type === 'video' && (
                  <span className="gallery-play-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
                <span className="gallery-caption">{item.caption}</span>
              </div>
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
          aria-label="Image lightbox"
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
                alt={mediaItems[lightbox].caption}
                className="lightbox-media"
              />
            ) : (
              <video
                src={mediaItems[lightbox].src}
                className="lightbox-media"
                controls
                autoPlay
              />
            )}
            <p className="lightbox-caption">{mediaItems[lightbox].caption}</p>
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
