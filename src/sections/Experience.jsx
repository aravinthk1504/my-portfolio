import { motion } from "framer-motion";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const experiences = [

     {
    year: "2024",
    role: "AI Engineer Intern",
    company: "Digital Garage",
    description:
      "Worked on artificial intelligence and machine learning related development, gaining practical experience in building and applying AI solutions.",
    technologies: [
      "Python",
      "Machine Learning",
      "AI",
    ],
  },
  
    {
    year: "2023",
    role: "Data Science Intern",
    company: "CubeNsquare",
    description:
      "Worked on practical data science and machine learning projects including IPL score prediction, road traffic signal detection and an intelligent banking chatbot.",
    technologies: [
      "Python",
      "Data Science",
      "Machine Learning",
      "NLP",
    ],
  },

  {
    year: "2023",
    role: "Industrial IoT & Data Science Intern",
    company: "Sharadha Skill Academy",
    description:
      "Completed practical training covering Industrial IoT concepts and foundational data science applications.",
    technologies: [
      "IoT",
      "Python",
      "Data Science",
    ],
  },
  
];

function Experience() {
  return (
    <section id="experience" className="content-section">

      <div className="section-container">

        <div className="section-label">
          <span>03</span>
          <p>EXPERIENCE</p>
        </div>

        <div className="experience-header">

          <h2>
            From learning
            <span> to building.</span>
          </h2>

          <p>
            Practical experience through internships, technical projects,
            experimentation, and real-world development.
          </p>

        </div>

        <div className="experience-list">

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-item"
              key={experience.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <div className="experience-year">
                {experience.year}
              </div>

              <div className="experience-icon">
                <BriefcaseBusiness size={20} />
              </div>

              <div className="experience-main">

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

              <ArrowUpRight
                className="experience-arrow"
                size={21}
              />

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;