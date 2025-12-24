import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MySQL', level: 90 }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 85 }
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="page-title" data-aos="fade-down">Skills</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">Technologies and tools I work with</p>
            
            {skillCategories.map((category, index) => (
              <div key={index} className="card shadow-sm mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-body">
                  <h3 className="section-heading">{category.category}</h3>
                  <div className="skills-container">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
