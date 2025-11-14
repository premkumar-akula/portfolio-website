// For development
const DEV_API = 'http://localhost:5000';
// For production - replace with your actual backend URL after deployment
const PROD_API = 'https://your-backend-url.onrender.com';

const API_BASE_URL = window.location.hostname === 'localhost' ? DEV_API : PROD_API;

export const apiService = {
  async submitContact(formData) {
    try {
      console.log('Sending to:', `${API_BASE_URL}/api/contact`);
      
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
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