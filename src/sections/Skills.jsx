import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description: "Languages I use to build applications and intelligent systems.",
    skills: [
      "Python",
      "java",
      "R",
      "JavaScript",
    ],
  },

  {
    number: "02",
    title: "AI & Machine Learning",
    description: "Technologies used for developing intelligent solutions.",
    skills: [
      "Machine Learning",
      "AI",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },

  {
    number: "03",
    title: "Development",
    description: "Tools and frameworks for building modern applications.",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Flask",
      "Django",
      "Node.js",
      "REST APIs",
    ],
  },

  {
    number: "04",
    title: "Data",
    description: "Tools for working with, analyzing and presenting data.",
    skills: [
      "Pandas",
      "NumPy",
      "MySQL",
      "Data Analysis",
      "Data Visualization",
      "Power BI",
    ],
  },

  {
    number: "05",
    title: "DevOps",
    description: "Technologies for version control, deployment and infrastructure.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Grafana",
       "Prometheus",
       "CircleCI",
    ],
  },

  {
    number: "06",
    title: "IoT & Edge AI",
    description: "Building intelligent systems that connect software with hardware.",
    skills: [
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "Edge Impulse",
      "Blynk",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="content-section skills-section">

      <div className="section-container">

        <div className="section-label">
          <span>04</span>
          <p>TECHNICAL SKILLS</p>
        </div>

        <div className="skills-header">

          <h2>
            Tools I use to
            <span> build ideas.</span>
          </h2>

          <p>
            A growing technical toolkit across artificial intelligence,
            software development, data science, DevOps and intelligent
            connected systems.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="skill-number">
                {group.number}
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">

                {group.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;