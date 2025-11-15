from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import smtplib
from email.mime.text import MimeText
import os

app = Flask(__name__)
CORS(app)

print("🚀 Portfolio Backend API Started")

def send_email_notification(contact_data):
    try:
        # Email configuration (using Gmail)
        sender_email = "akula.premkumar2611@gmail.com"  # Change to your email
        sender_password = os.environ.get('EMAIL_PASSWORD')  # App password
        receiver_email = "akula.premkumar2611@gmail.com"
        
        # Create email content
        subject = f"New Portfolio Contact: {contact_data['subject']}"
        body = f"""
        🎉 New Portfolio Contact Form Submission!
        
        📋 Contact Details:
        • Name: {contact_data['name']}
        • Email: {contact_data['email']}
        • Subject: {contact_data['subject']}
        
        💬 Message:
        {contact_data['message']}
        
        ⏰ Time: {contact_data['created_at']}
        
        ---
        This email was sent automatically from your portfolio website.
        """
        
        # Create message
        message = MimeText(body)
        message['Subject'] = subject
        message['From'] = sender_email
        message['To'] = receiver_email
        
        # Send email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(message)
        
        print("✅ Email notification sent!")
        return True
        
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
            return jsonify({
                'success': True,
                'message': 'Message sent successfully! I will get back to you soon.'
            }), 200
        else:
            # Still return success even if email fails
            return jsonify({
                'success': True,
                'message': 'Message received! I will contact you soon.'
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
    return jsonify({
        'status': 'healthy', 
        'timestamp': datetime.utcnow().isoformat(),
        'email_service': 'configured'
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)