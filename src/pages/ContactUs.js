import React, { useState, useEffect } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="page-title" data-aos="fade-down">Contact Us</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">Get in touch with me</p>
            
            <div className="row mb-5">
              <div className="col-md-4 mb-3">
                <div className="card shadow-sm contact-info-card" data-aos="flip-left" data-aos-delay="200">
                  <div className="card-body text-center">
                    <div className="contact-icon">📧</div>
                    <h4 className="contact-info-title">Email</h4>
                    <p className="contact-info-text">bhyriajaykumar55@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card shadow-sm contact-info-card" data-aos="flip-left" data-aos-delay="300">
                  <div className="card-body text-center">
                    <div className="contact-icon">📱</div>
                    <h4 className="contact-info-title">Phone</h4>
                    <p className="contact-info-text">+91 8099159155</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card shadow-sm contact-info-card" data-aos="flip-left" data-aos-delay="400">
                  <div className="card-body text-center">
                    <div className="contact-icon">📍</div>
                    <h4 className="contact-info-title">Location</h4>
                    <p className="contact-info-text">Gajwel, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg" data-aos="fade-up" data-aos-delay="500">
              <div className="card-body">
                <h3 className="section-heading">Send Me a Message</h3>
                
                {submitted && (
                  <div className="alert alert-success" role="alert">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
