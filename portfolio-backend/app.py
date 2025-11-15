from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import requests
import os

app = Flask(__name__)
CORS(app)

print("🚀 Portfolio Backend API Started")

def send_email_notification(contact_data):
    try:
        service_id = os.environ.get('EMAILJS_SERVICE_ID')
        template_id = os.environ.get('EMAILJS_TEMPLATE_ID')  
        user_id = os.environ.get('EMAILJS_USER_ID')
        
        print(f"🔧 Debug - Service ID: {service_id}")
        print(f"🔧 Debug - Template ID: {template_id}")
        print(f"🔧 Debug - User ID: {user_id}")
        
        # Check if IDs are set
        if not service_id or service_id == 'your_service_id':
            print("❌ Service ID not configured")
            return False
        if not template_id or template_id == 'your_template_id':
            print("❌ Template ID not configured") 
            return False
        if not user_id or user_id == 'your_user_id':
            print("❌ User ID not configured")
            return False
        
        data = {
            'service_id': service_id,
            'template_id': template_id, 
            'user_id': user_id,
            'template_params': {
                'from_name': contact_data['name'],
                'from_email': contact_data['email'],
                'subject': contact_data['subject'],
                'message': contact_data['message'],
                'to_email': 'akula.premkumar2611@gmail.com'
            }
        }
        
        print(f"🔧 Debug - Sending data to EmailJS...")
        
        response = requests.post(
            'https://api.emailjs.com/api/v1.0/email/send',
            json=data,
            timeout=10
        )
        
        print(f"🔧 Debug - EmailJS response: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ Email sent via EmailJS!")
            return True
        else:
            print(f"❌ EmailJS failed: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Email failed: {e}")
        return False

@app.route('/')
def home():
    return jsonify({"message": "Portfolio API is running! 🚀"})

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        print(f"📨 Contact from: {data.get('name')} - {data.get('subject')}")
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False, 
                    'message': f'Missing required field: {field}'
                }), 400
        
        # Prepare contact data
        contact_data = {
            'name': data.get('name'),
            'email': data.get('email'),
            'subject': data.get('subject'),
            'message': data.get('message'),
            'created_at': datetime.utcnow().isoformat()
        }
        
        # Log the contact
        print("✅ Contact received:", contact_data)
        
        # Send email notification
        email_sent = send_email_notification(contact_data)
        if email_sent:
            print("🎉 Email notification sent successfully!")
        else:
            print("⚠️ Email failed but contact was logged")
        
        return jsonify({
            'success': True,
            'message': 'Message sent successfully! I will get back to you soon.'
        }), 200
        
    except Exception as e:
        print(f"❌ Contact error: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Failed to send message. Please try again.'
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
        }
    ]
    
    return jsonify({
        'success': True,
        'data': portfolio_data
    }), 200

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy', 
        'timestamp': datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)