import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Globe,
    Brain,
    Eye,
    MessageSquare,
    Cpu,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / MACHINE LEARNING",
    title: "Water Potability Prediction",
    description:
      "A machine learning application that predicts whether water is suitable for consumption based on physicochemical parameters.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Pandas",
      "NumPy",
    ],
    icon: Brain,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    number: "02",
    category: "COMPUTER VISION",
    title: "AI Waste Classification using Transformers Neural Networks",
    description:
      "An image classification system designed to identify different categories of waste using deep learning and computer vision.",
    technologies: [
      "Python",
      "TensorFlow",
      "Transformer",
      "OpenCV",
      "Computer Vision",
    ],
    icon: Eye,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    number: "03",
    category: "IoT / EDGE AI",
    title: "Intelligent Agriculture Monitoring",
    description:
      "An intelligent agriculture system combining ESP32 sensors, machine learning and IoT monitoring for crop health and automated irrigation.",
    technologies: [
      "ESP32",
      "Edge Impulse",
      "Blynk",
      "IoT",
      "Machine Learning",
    ],
    icon: Cpu,
    github: "#",
    demo: "#",
    featured: true,
  },

  {
    number: "04",
    category: "NLP",
    title: "Text Summarization",
    description:
      "An NLP application designed to generate concise summaries from longer text content.",
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Text Processing",
    ],
    icon: MessageSquare,
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="content-section projects-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-label">
          <span>05</span>
          <p>SELECTED PROJECTS</p>
        </div>

        <div className="projects-header">
          <div>
            <h2>
              Ideas turned into
              <span> working systems.</span>
            </h2>
          </div>

          <p>
            A collection of projects across artificial intelligence,
            machine learning, computer vision, NLP, software development
            and intelligent IoT systems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-card ${
                  project.featured ? "featured-project" : ""
                }`}
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    <Icon size={21} />
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;