// Use your EXACT backend URL
const API_BASE_URL = 'https://portfolio-backend-8cps.onrender.com';

export const apiService = {
  async submitContact(formData) {
    try {
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