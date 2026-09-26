import { motion } from "framer-motion";
import { GraduationCap, ArrowUpRight } from "lucide-react";

function Education() {
  return (
    <section id="education" className="content-section">
      <div className="section-container">

        <div className="section-label">
          <span>02</span>
          <p>EDUCATION</p>
        </div>

        <div className="education-layout">

          <div className="education-intro">
            <h2>
              Learning that
              <span> drives innovation.</span>
            </h2>

            <p>
              My academic journey combines artificial intelligence,
              data science, robotics and intelligent systems, with a
              focus on applying technology to real-world problems.
            </p>
          </div>

          <div className="education-list">

            {/* Current Master's */}
            <motion.div
              className="education-card education-current"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <div className="education-details">

                <div className="education-status">
                  CURRENTLY PURSUING
                </div>

                <div className="education-year">
                  MSc
                </div>

                <h3>
                  MSc in Artificial Intelligence & Robotics
                </h3>

                <p className="institution">
                  Berlin School of Business and Innovation, Berlin/ University of Creative Arts, London
                </p>

                <p>
                  Currently pursuing postgraduate studies focused on
                  artificial intelligence, robotics, intelligent systems,
                  machine learning and emerging AI technologies.
                </p>

                <div className="education-tags">
                  <span>Artificial Intelligence</span>
                  <span>Robotics</span>
                  <span>Machine Learning</span>
                  <span>Intelligent Systems</span>
                </div>

              </div>

              <ArrowUpRight className="card-arrow" size={22} />
            </motion.div>

            {/* Bachelor's */}
            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <div className="education-details">

                <div className="education-year">
                  2020 — 2024
                </div>

                <h3>
                  B.Tech in Artificial Intelligence & Data Science
                </h3>

                <p className="institution">
                  Arjun College of Technology, Coimbatore/ Anna University, Chennai
                </p>

                <p>
                  Built a foundation in artificial intelligence,
                  machine learning, data science, programming,
                  software development and intelligent applications.
                </p>

                <div className="education-tags">
                  <span>Artificial Intelligence</span>
                  <span>Data Science</span>
                  <span>Machine Learning</span>
                  <span>Deep Learning</span>
                </div>

              </div>

              <ArrowUpRight className="card-arrow" size={22} />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;