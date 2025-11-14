// Simple API service - works both locally and in production
const getApiBaseUrl = () => {
  // In development
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:5000';
  }
  // In production - will update after deployment
  return 'https://your-backend-url.onrender.com';
};

const API_BASE_URL = getApiBaseUrl();

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

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      return await response.json();
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