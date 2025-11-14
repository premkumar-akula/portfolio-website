import React, { useState } from 'react';
import { apiService } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorDetails, setErrorDetails] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorDetails('');

    console.log('🔄 Starting form submission...');
    
    try {
      const result = await apiService.submitContact(formData);
      console.log('🎉 Form submission successful:', result);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorDetails(result.message || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('💥 Form submission failed:', error);
      setSubmitStatus('error');
      setErrorDetails(error.message || 'Cannot connect to server. Make sure backend is running on localhost:5000');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'akula.premkumar2611@gmail.com',
      link: 'mailto:akula.premkumar2611@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+91 9701482437',
      link: 'tel:+919701482437'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Hyderabad, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your project and bring your ideas to life</p>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.link} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </a>
            ))}
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/prem-kumar-akula-98a01829a" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/premkumar-akula" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <div>
                  <strong>Failed to send message.</strong>
                  <div style={{fontSize: '0.9em', marginTop: '5px'}}>{errorDetails}</div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;