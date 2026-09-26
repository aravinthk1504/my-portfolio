import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

import { portfolioData } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-container">

        <div className="section-label">
          <span>01</span>
          <p>ABOUT ME</p>
        </div>

        <div className="about-grid">

          <motion.div
            className="about-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Building intelligent
              <span> systems for the real world.</span>
            </h2>

            <div className="about-location">
              <MapPin size={16} />
              <span>{portfolioData.location}</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="about-lead">
              I'm Aravinth Kanagaraj, an AI and software developer
              currently pursuing an MSc in Artificial Intelligence
              & Robotics.
            </p>

            <p>
              I have a B.Tech background in Artificial Intelligence &
              Data Science and a strong interest in building practical
              intelligent systems using machine learning, deep learning,
              computer vision, natural language processing and robotics.
            </p>

            <p>
              My projects span AI applications, computer vision,
              NLP, software development, IoT and Edge AI. I enjoy
              taking an idea from a concept and turning it into a
              working system through experimentation, development
              and deployment.
            </p>

            <p>
              Alongside my technical work, I'm building
              <strong> GenData Tech</strong>, a technology initiative
              focused on AI, software development, data science,
              IoT and practical technical training.
            </p>

            <a href="#startup" className="text-link">
              Explore GenData Tech
              <ArrowUpRight size={17} />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;