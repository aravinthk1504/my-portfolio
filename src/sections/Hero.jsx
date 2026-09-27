import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Globe,
  Mail,
} from "lucide-react";

import { portfolioData } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="eyebrow">
            AI ENGINEER • ML DEVELOPER
          </p>

          <h1>
            Building
            <span> intelligent </span>
            technology for the real world.
          </h1>

          <p className="hero-description">
            {portfolioData.tagline}
          </p>

          <div className="hero-actions">

            <a href="#projects" className="primary-button">
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>

          </div>

          <div className="social-links">

            <a href={portfolioData.social.github} target="_blank" rel="noreferrer">
              <Globe size={19} />
            </a>

            <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={19} />
            </a>

            <a href={`mailto:${portfolioData.social.email}`}>
              <Mail size={19} />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-image-card">

            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Professional portrait"
            />  

            <div className="image-overlay">
              <span>AI • DATA • SOFTWARE</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;