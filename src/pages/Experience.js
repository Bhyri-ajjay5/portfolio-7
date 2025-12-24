import React, { useEffect } from 'react';

function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const experienceData = [
    {
      position: 'Full Stack Developer',
      company: 'AhimaySoft Technology Solutions',
      location: 'Bangalore, India',
      duration: '2025 - Present',
      responsibilities: [
        'Developed full-stack Point of Sale (POS) system using React.js for frontend and Java Spring Boot for backend',
        'Built RESTful APIs with Spring Boot for product management, inventory tracking, and sales processing',
        'Implemented product lifecycle management (CRUD) with store-scoped data isolation and CSV bulk import/export',
        'Created responsive web interface using React with Tailwind CSS supporting real-time sales operations',
        'Developed inventory tracking system with real-time stock updates and low-stock alerts',
        'Implemented dynamic table layouts switching between card view (mobile) and table view (desktop)',
        'Integrated payment gateway for multi-payment methods (Cash, Card, UPI) with transaction reconciliation',
        'Built hierarchical category management system with performance analytics and reporting',
        'Participated in code reviews and team discussions'
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="page-title" data-aos="fade-down">Experience</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">My professional journey and work experience</p>
            
            <div className="content-section">
              {experienceData.map((exp, index) => (
                <div key={index} className="card shadow-sm mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="card-body">
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-position">{exp.position}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                        <p className="experience-location">{exp.location}</p>
                      </div>
                      <span className="experience-duration">{exp.duration}</span>
                    </div>
                    <div className="responsibilities-section">
                      <h5 className="responsibilities-heading">Key Responsibilities:</h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
