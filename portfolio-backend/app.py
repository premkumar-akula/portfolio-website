from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__)

# Configure static files for React build
app.static_folder = '../frontend/build'
app.static_url_path = ''

CORS(app)

print("🚀 Starting Portfolio Website...")

# API Routes - Define these BEFORE the catch-all route
@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def contact():
    try:
        print("📨 Contact endpoint called")
        
        if request.method == 'OPTIONS':
            return '', 200
            
        data = request.get_json()
        print("📦 Raw data received:", data)
        
        if not data:
            return jsonify({
                'success': False,
                'message': 'No data received'
            }), 400
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        print(f"🔍 Extracted fields - Name: '{name}', Email: '{email}', Subject: '{subject}'")
        
        # Validate
        if not name or not email or not subject or not message:
            missing = []
            if not name: missing.append('name')
            if not email: missing.append('email')
            if not subject: missing.append('subject')
            if not message: missing.append('message')
            
            return jsonify({
                'success': False,
                'message': f'Missing: {", ".join(missing)}'
            }), 400
        
        print(f"✅ Valid form data: {name} ({email}) - {subject}")
        
        # Success response
        return jsonify({
            'success': True,
            'message': 'Message sent successfully! Thank you for contacting me.'
        }), 200
        
    except Exception as e:
        print(f"💥 Unexpected error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Server error occurred'
        }), 500

@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    portfolio_data = [
        {
            "id": 1,
            "title": "Coffee Stories",
            "category": "web",
            "image": "project1.jpg",
            "description": "Developed a dynamic platform for exploring and sharing coffee recipes and stories.",
            "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "MongoDB", "Express"],
            "link": "https://github.com/premkumar-akula/Coffee-Stories",
            "github": "https://github.com/premkumar-akula/Coffee-Stories",
            "featured": True
        },
        {
            "id": 2,
            "title": "Library Management System",
            "category": "web",
            "image": "project2.jpg",
            "description": "A user-friendly Library Management System with authentication and book management.",
            "technologies": ["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "Flask"],
            "link": "https://library-management-system-fxus.onrender.com/",
            "github": "https://github.com/premkumar-akula/library_management_system",
            "featured": True
        },
        {
            "id": 3,
            "title": "Simon Says Game",
            "category": "web",
            "image": "project3.jpg",
            "description": "A fun and interactive memory game built with HTML, CSS, and JavaScript.",
            "technologies": ["HTML", "CSS3", "Bootstrap", "JavaScript"],
            "link": "#",
            "github": "https://github.com/premkumar-akula/Simon-Game",
            "featured": False
        }
    ]
    
    return jsonify({
        'success': True,
        'data': portfolio_data
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

# Serve React Static Files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    print(f"🌐 Serving path: {path}")
    
    # If the path starts with /api/, return 404 (API routes should be handled above)
    if path.startswith('api/'):
        return jsonify({'error': 'API endpoint not found'}), 404
    
    # Try to serve static files
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Fallback to index.html for React Router
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    print(f"📍 Server starting on port {port}")
    print("🌐 Serving both frontend and backend from single server")
    print("📧 API: http://localhost:5000/api/contact")
    print("💼 API: http://localhost:5000/api/portfolio")
    app.run(host='0.0.0.0', port=port, debug=True)