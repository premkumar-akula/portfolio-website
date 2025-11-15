from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
import os
import time

app = Flask(__name__)
CORS(app)

print("🚀 Portfolio Backend API Started")

def send_email_notification(contact_data):
    try:
        # Email configuration
        sender_email = "premkumarakula8978@gmail.com"  # Your Gmail
        sender_password = os.environ.get('EMAIL_PASSWORD')  # App password
        receiver_email = "akula.premkumar2611@gmail.com"
        
        if not sender_password:
            print("❌ EMAIL_PASSWORD environment variable not set")
            return False
        
        # Create email content
        subject = f"Portfolio Contact: {contact_data['subject']}"
        body = f"""
        New contact form submission from your portfolio website:
        
        Name: {contact_data['name']}
        Email: {contact_data['email']}
        Subject: {contact_data['subject']}
        
        Message:
        {contact_data['message']}
        
        Time: {contact_data['created_at']}
        """
        
        # Create message
        message = MIMEText(body)
        message['Subject'] = subject
        message['From'] = sender_email
        message['To'] = receiver_email
        
        # Try different email configurations
        try:
            # Method 1: SMTP_SSL (most common)
            with smtplib.SMTP_SSL('smtp.gmail.com', 465, timeout=10) as server:
                server.login(sender_email, sender_password)
                server.send_message(message)
            print("✅ Email sent via SMTP_SSL!")
            return True
            
        except Exception as ssl_error:
            print(f"SMTP_SSL failed: {ssl_error}")
            
            try:
                # Method 2: STARTTLS
                with smtplib.SMTP('smtp.gmail.com', 587, timeout=10) as server:
                    server.starttls()
                    server.login(sender_email, sender_password)
                    server.send_message(message)
                print("✅ Email sent via STARTTLS!")
                return True
                
            except Exception as tls_error:
                print(f"STARTTLS failed: {tls_error}")
                return False
                
    except Exception as e:
        print(f"❌ Email function error: {e}")
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
        
        # Send email notification (non-blocking)
        try:
            email_sent = send_email_notification(contact_data)
            if email_sent:
                print("🎉 Email notification sent successfully!")
            else:
                print("⚠️ Email failed but contact was logged")
        except Exception as email_error:
            print(f"⚠️ Email attempt failed: {email_error}")
        
        # Always return success to user
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