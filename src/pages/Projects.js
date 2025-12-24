import React, { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projectsData = [
    {
      title: 'Point of Sale (POS)',
      description: 'Developed a comprehensive, full-stack Point of Sale (POS) system for retail businesses enabling real-time sales processing, inventory management, customer relationship management, cashier reconciliation, and analytics across multiple stores with mobile and web support.',
      technologies: ['React.js', 'React Native', 'Java', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      features: [
        'Developed complete product lifecycle management (CRUD) with store-scoped data isolation',
        'Implemented product variant system supporting size, color, and custom attributes with dynamic pricing',
        'Built CSV bulk import/export functionality for mass product updates with validation (500+ products in single upload)',
        'Implemented inventory tracking with real-time stock quantity updates and low-stock alerts',
        'Implemented dynamic table layouts switching between card view (mobile) and table view (desktop)',
        'Real-time sales processing with barcode scanning and multi-payment methods (Cash, Card, UPI)',
        'Payment gateway integration with transaction processing and reconciliation',
        'Hierarchical category management with analytics'
      ],
      status: 'Completed'
    },
    {
      title: 'Bookmark Maker',
      description: 'Developed bookmark maker where user can add a list of websites with custom names and can visit bookmarked website later by clicking on the speciﬁc website',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
      features: [
        'Displayed list of bookmarks with HTML list elements with hyperlink as URL',
        'Styled bookmark list using CSS and Bootstrap for professional appearance',
        'Displayed new bookmarks dynamically in the UI using JavaScript DOM operations',
        'Implemented add bookmark functionality using Form inputs and JavaScript event listeners',
        'Clicking on particular bookmark opens the website in a new tab for seamless navigation',
        'Form validation to ensure valid website URLs and bookmark names'
      ],
      status: 'Completed'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing skills, projects, and professional experience. Built with React.js and Bootstrap with smooth animations.',
      technologies: ['React.js', 'Bootstrap', 'CSS3', 'React Router'],
      features: [
        'Single Page Application with routing',
        'Smooth scrolling and animations with AOS',
        'Fully responsive design across mobile, tablet, and desktop devices',
        'Contact form with validation and success feedback'
      ],
      status: 'Completed'
    }
  ];

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="page-title" data-aos="fade-down">Projects</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">Showcasing my work and development journey</p>
            
            <div className="content-section">
              {projectsData.map((project, index) => (
                <div key={index} className="card shadow-sm mb-4 project-card" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="card-body">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className={`project-status ${project.status === 'Completed' ? 'status-completed' : 'status-progress'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-content">{project.description}</p>
                    
                    <div className="project-section">
                      <h5 className="project-section-heading">Technologies Used:</h5>
                      <div className="technologies-container">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="technology-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-section">
                      <h5 className="project-section-heading">Key Features:</h5>
                      <ul className="project-features-list">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
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

export default Projects;
