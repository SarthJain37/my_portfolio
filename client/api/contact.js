export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      
      // Here you would typically send an email or save to a database
      // For this example, we'll just log the data
      console.log('Form submission:', { name, email, message });
  
      // In ContactForm.js or Home.js
    const API_URL = 'https://sarthakboralkarportfolio.vercel.app/api/contact';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    };
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }