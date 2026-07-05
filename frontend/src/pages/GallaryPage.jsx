import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mediaItems } from '../assets/data.js';
import './GallaryPage.css';

const GallaryPage = () => {
  const [lightbox, setLightbox] = useState(null);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
    <div className="gp-page">

      {/* ── Top bar ── */}
      <div className="gp-topbar">
        <button className="gp-back-btn" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </button>
        <div className="gp-topbar-brand">Water Vision Fountains</div>
      </div>

      {/* ── Header ── */}
      <div className="gp-header">
        <span className="gp-badge">Our Work</span>
        <h1 className="gp-heading">Project Gallery</h1>
        <p className="gp-subtext">
          Explore our complete collection of musical fountains, lighting installations,
          and water displays delivered across India.
        </p>
        <span className="gp-count">{mediaItems.length} items</span>
      </div>

      {/* ── Masonry grid ── */}
      <div className="gp-container">
        <div className="gp-grid">
          {mediaItems.map((item, index) => (
            <div
              className="gp-item"
              key={index}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View item ${index + 1}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt="" className="gp-media" />
              ) : (
                <video
                  src={item.src}
                  className="gp-media gp-video-thumb"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              {item.type === 'video' && (
                <span className="gp-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              )}
              <div className="gp-overlay" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="gp-lightbox-backdrop"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <button className="gp-lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>

          <button className="gp-lightbox-arrow gp-lightbox-prev" onClick={goPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="gp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            {mediaItems[lightbox].type === 'image' ? (
              <img src={mediaItems[lightbox].src} alt="" className="gp-lightbox-media" />
            ) : (
              <video src={mediaItems[lightbox].src} className="gp-lightbox-media" controls autoPlay loop />
            )}
            <span className="gp-lightbox-counter">{lightbox + 1} / {mediaItems.length}</span>
          </div>

          <button className="gp-lightbox-arrow gp-lightbox-next" onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default GallaryPage;
