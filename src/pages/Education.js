import React, { useEffect } from 'react';

function Education() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const educationData = [
    {
      degree: 'Bachelor of Electronics and Communication Engineering',
      institution: 'B V Raju Institute of Technology',
      year: '2015 - 2019',
    //   description: 'Completed comprehensive coursework in software engineering, algorithms, data structures, and web development.',
      achievements: [
        'Graduated with Honors',
        'GPA: 7.6/10',
        'Dean\'s List - Multiple Semesters'
      ]
    },
    {
      degree: 'Intermediate Education (MPC)',
      institution: 'Narayana Junior College',
      year: '2013 - 2015',
    //   description: 'Focused on mathematics, science, and computer studies.',
      achievements: [
        'Marks: 834/1000'
      ]
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Krishnaveni Talent School',
      year: '2013',
      achievements: [
        'CGPA: 6.5/10',
        'Completed foundational education',
        'Active participation in extracurricular activities'
      ]
    }
  ];

  const certifications = [
    {
      title: 'HTML & CSS',
      issuer: 'Nextwave Online Platform',
      year: '2024'
    },
    {
      title: 'Bootstrap Framework',
      issuer: 'Nextwave Online Platform',
      year: '2024'
    },
    {
      title: 'JavaScript Programming',
      issuer: 'Nextwave Online Platform',
      year: '2024'
    },
    {
      title: 'React JS Developer',
      issuer: 'Nextwave Online Platform',
      year: '2024'
    }
  ];

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="page-title" data-aos="fade-down">Education</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">My academic background and certifications</p>
            
            <div className="content-section">
              <h2 className="section-heading" data-aos="fade-right">Academic Qualifications</h2>
              {educationData.map((edu, index) => (
                <div key={index} className="card shadow-sm mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="card-body">
                    <div className="education-header">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <span className="education-year">{edu.year}</span>
                    </div>
                    <h4 className="education-institution">{edu.institution}</h4>
                    <p className="text-content">{edu.description}</p>
                    <div className="achievements-section">
                      <h5 className="achievements-heading">Key Achievements:</h5>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="content-section">
              <h2 className="section-heading" data-aos="fade-right">Certifications</h2>
              <div className="row">
                {certifications.map((cert, index) => (
                  <div key={index} className="col-md-6 mb-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className="card shadow-sm certification-card">
                      <div className="card-body">
                        <h4 className="certification-title">{cert.title}</h4>
                        <p className="certification-issuer">{cert.issuer}</p>
                        <p className="certification-year">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
