import React, { useEffect } from 'react';

function AboutMe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-lg" data-aos="fade-up">
              <div className="card-body">
                <h1 className="page-title" data-aos="fade-down">About Me</h1>
                <div className="content-section">
                  <div className="d-flex flex-column align-items-center mb-4" data-aos="zoom-in" data-aos-delay="200">
                    <div className="mb-3">
                      <img 
                        src={process.env.PUBLIC_URL + "/image.jpeg"} 
                        alt="Bhyri Ajay" 
                        className="rounded-circle border border-primary border-4 shadow-lg profile-image"
                        style={{width: '200px', height: '200px', objectFit: 'cover'}}
                      />
                    </div>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                      <a href="https://github.com/bhyriajaykumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-circle p-2 social-icon-btn" aria-label="GitHub" style={{width: '45px', height: '45px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/bhyriajaykumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-circle p-2 social-icon-btn" aria-label="Instagram" style={{width: '45px', height: '45px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com/bhyriajaykumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-circle p-2 social-icon-btn" aria-label="Twitter" style={{width: '45px', height: '45px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/bhyriajaykumar" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-circle p-2 social-icon-btn" aria-label="LinkedIn" style={{width: '45px', height: '45px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h2 className="section-subtitle" data-aos="fade-up" data-aos-delay="300">Hello, I'm Bhyri Ajay</h2>
                  <p className="text-content" data-aos="fade-up" data-aos-delay="400">
                    I'm a passionate <strong>full-stack developer</strong> with <strong>6 months of professional experience</strong> in web development. 
                    I love creating elegant solutions to complex problems and building user-friendly 
                    applications that make a difference.
                  </p>
                  <p className="text-content" data-aos="fade-up" data-aos-delay="500">
                    With expertise in modern web technologies, I specialize in building <strong>responsive 
                    and scalable applications</strong>. I actively contribute to <strong>code reviews</strong> and participate in <strong>team meetings</strong>, 
                    collaborating with <strong>cross-functional teams</strong> to deliver high-quality solutions. I'm constantly learning 
                    and adapting to new technologies to stay ahead in this ever-evolving field.
                  </p>
                  <p className="text-content" data-aos="fade-up" data-aos-delay="600">
                    When I'm not coding, I enjoy contributing to <strong>open-source projects</strong>, reading tech 
                    blogs, and exploring new frameworks and tools that can enhance my development workflow.
                  </p>
                </div>
                <div className="content-section" data-aos="fade-up" data-aos-delay="700">
                  <h3 className="section-heading">What I Do</h3>
                  <ul className="list-unstyled features-list">
                    <li data-aos="fade-right" data-aos-delay="800">Build Responsive Websites</li>
                    <li data-aos="fade-right" data-aos-delay="900">Web Application Development</li>
                    <li data-aos="fade-right" data-aos-delay="1000">Responsive UI/UX Design</li>
                    <li data-aos="fade-right" data-aos-delay="1100">API Development and Integration</li>
                  </ul>
                </div>
                <div className="text-center mt-4 pt-4 border-top" data-aos="fade-up" data-aos-delay="1200">
                  <a href={process.env.PUBLIC_URL + "/resume.pdf"} download="Bhyri_Ajay_Resume.pdf" className="btn btn-primary btn-lg rounded-pill px-4 py-3 shadow-lg btn-download-cv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
