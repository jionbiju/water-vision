import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallary.css';
import { mediaItems } from '../../assets/data.js';

const PREVIEW_COUNT = 6;
const previewItems = mediaItems.slice(0, PREVIEW_COUNT);

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const navigate = useNavigate();

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev + 1) % previewItems.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev - 1 + previewItems.length) % previewItems.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') setLightbox((prev) => (prev + 1) % previewItems.length);
    if (e.key === 'ArrowLeft')  setLightbox((prev) => (prev - 1 + previewItems.length) % previewItems.length);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-header">
          <span className="gallery-badge">Our Work</span>
          <h2 className="gallery-heading">Project Gallery</h2>
          <p className="gallery-subtext">
            A visual showcase of our musical fountains, lighting systems, and water displays
            crafted across various installations.
          </p>
        </div>

        <div className="gallery-grid">
          {previewItems.map((item, index) => (
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

        {/* View Full Gallery button */}
        <div className="gallery-toggle-wrap">
          <button
            className="gallery-toggle-btn"
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox (preview only) */}
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
            {previewItems[lightbox].type === 'image' ? (
              <img src={previewItems[lightbox].src} alt="" className="lightbox-media" />
            ) : (
              <video src={previewItems[lightbox].src} className="lightbox-media" controls autoPlay loop />
            )}
            <span className="lightbox-counter">{lightbox + 1} / {previewItems.length}</span>
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
