// EmailJS configuration
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_USER_ID = 'your_public_key';

// Load EmailJS script
const loadEmailJS = () => {
  return new Promise((resolve) => {
    if (window.emailjs) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init(EMAILJS_USER_ID);
      resolve();
    };
    document.head.appendChild(script);
  });
};

// Backend API URL
const API_BASE_URL = 'https://portfolio-backend-8cps.onrender.com';

export const apiService = {
  async submitContact(formData) {
    try {
      // First, save to backend
      const backendResponse = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!backendResponse.ok) {
        throw new Error(`Server responded with ${backendResponse.status}`);
      }

      // Then, send email notification via EmailJS (frontend)
      try {
        await loadEmailJS();
        
        const emailParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'akula.premkumar2611@gmail.com'
        };

        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams);
        console.log('✅ Email notification sent!');
      } catch (emailError) {
        console.warn('⚠️ Email notification failed, but contact was saved:', emailError);
      }

      return await backendResponse.json();
      
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  async getPortfolioItems() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/portfolio`);
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};