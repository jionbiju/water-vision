import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', scope: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMessageText = () =>
    `Hello Water Vision Fountains,\n\nMy name is ${formData.name || '[Name]'}.\n` +
    `I am inquiring about a fountain installation project scope.\n\n*Details:*\n` +
    `- Email: ${formData.email || 'N/A'}\n- Phone: ${formData.phone || 'N/A'}\n` +
    `- Requirements: ${formData.scope || 'No specifics provided.'}`;

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.scope) { alert("Please fill in your Name and Project Scope."); return; }
    const number = "919446287873";
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(generateMessageText())}`, '_blank');
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.scope) { alert("Please fill in your Name and Project Scope."); return; }
    const email = "watervisionfountains@gmail.com";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Fountain Project Inquiry – ${formData.name}`)}&body=${encodeURIComponent(generateMessageText())}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-info-block">
          <span className="contact-badge">Connect With Us</span>
          <h2 className="contact-main-heading">Let's Build Something Landmark</h2>
          <p className="contact-lead-desc">
            Reach out to our engineering office to explore design workflows, request estimates,
            or clear structural procurement tenders.
          </p>

          <div className="contact-cards-stack">
            <div className="info-meta-card">
              <span className="gstin-label">GSTIN: 32AHFPL4898K1ZV</span>
              <h4 className="meta-card-title">Water Vision Fountains</h4>
              <p className="meta-card-text">
                Kanakkary P.O., Ettumanoor,<br />
                Kottayam, Kerala – 686632
              </p>
            </div>

            <div className="info-links-grid">
              <div className="link-item">
                <span className="link-label">Call Engineering Desk</span>
                <a href="tel:+919446287873" className="link-value">+91 94462 87873</a>
                <a href="tel:+918590674402" className="link-value">+91 85906 74402</a>
              </div>
              <div className="link-item">
                <span className="link-label">Official Email</span>
                <a href="mailto:info@watervisionfountains.com" className="link-value">
                  watervisionfountains@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-block">
          <h3 className="form-box-title">Request Project Estimates</h3>
          <form className="inquiry-form">

            <div className="input-group-row">
              <input type="text" name="name" placeholder="Your Name / Organisation"
                value={formData.name} onChange={handleInputChange} className="form-input" required />
            </div>
            <div className="input-group-row">
              <input type="email" name="email" placeholder="Business Email Address"
                value={formData.email} onChange={handleInputChange} className="form-input" />
            </div>
            <div className="input-group-row">
              <input type="tel" name="phone" placeholder="Contact Phone Number"
                value={formData.phone} onChange={handleInputChange} className="form-input" />
            </div>
            <div className="input-group-row">
              <textarea name="scope" rows="4"
                placeholder="Describe about Fountain Type, Size/Dimensions, and Environment (Indoor/Outdoor)"
                value={formData.scope} onChange={handleInputChange}
                className="form-textarea" required />
            </div>

            <div className="form-action-cluster">
              <button onClick={handleWhatsAppSend} className="action-btn btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="btn-icon">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.013-5.045-2.856-6.892-1.842-1.847-4.29-2.865-6.888-2.866-5.44 0-9.866 4.374-9.869 9.74-.001 2.043.535 4.039 1.554 5.795l-.98 3.575 3.651-.947zm11.304-7.62c-.303-.151-1.793-.883-2.073-.984-.28-.102-.483-.151-.686.151-.204.304-.787.984-.965 1.186-.177.202-.355.226-.658.076-1.13-.566-1.933-1.003-2.702-2.316-.202-.347.202-.322.577-1.068.063-.126.032-.239-.016-.339-.048-.1-.483-1.162-.662-1.593-.174-.419-.365-.362-.503-.369-.13-.008-.28-.009-.43-.009-.15 0-.395.056-.602.282-.207.227-.792.775-.792 1.89s.813 2.147.925 2.298c.112.152 1.6 2.443 3.877 3.425.542.234.965.374 1.294.479.544.173 1.04.149 1.431.09.435-.065 1.793-.733 2.048-1.433.255-.7.255-1.3.178-1.433-.077-.133-.28-.212-.583-.363z"/>
                </svg>
                Send via WhatsApp
              </button>

              <button onClick={handleEmailSend} className="action-btn btn-email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="btn-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send via Email
              </button>
            </div>

          </form>
        </div>

      </div>

      <div className="contact-footer-strip">
        <p className="footer-copy">
          © {new Date().getFullYear()} <span>Water Vision Fountains</span>. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
