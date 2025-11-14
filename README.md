# Portfolio Website

Complete full-stack portfolio website with React frontend and Flask backend.

## 🚀 Live Demo
- **Frontend:** 
- **Backend:** 

## 📁 Project Structure
portfolio-website/
├── portfolio-backend/ # Flask API backend
├── portfolio-frontend/ # React frontend
├── render.yaml # Render deployment config
└── README.md

text

## 🛠️ Technologies Used
- **Frontend:** React, CSS3, HTML5
- **Backend:** Flask, Python
- **Deployment:** Render

## 🚀 Local Development

### Backend

```bash
cd portfolio-backend
python app.py
Frontend
bash
cd portfolio-frontend
npm install
npm start

📞 Contact
Prem Kumar Akula

Email: akula.premkumar2611@gmail.com

Phone: +91 9701482437

text

### Step 3: Update render.yaml

**Update `portfolio-website/render.yaml`:**
```yaml
services:
  # Backend Service
  - type: web
    name: portfolio-backend
    env: python
    plan: free
    buildCommand: cd portfolio-backend && pip install -r requirements.txt
    startCommand: cd portfolio-backend && gunicorn app:app
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0

  # Frontend Service  
  - type: web
    name: portfolio-frontend
    env: static
    plan: free
    buildCommand: cd portfolio-frontend && npm install && npm run build
    staticPublishPath: portfolio-frontend/build
    routes:
      - type: rewrite
        source: /*
        destination: /index.html