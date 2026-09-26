import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Cpu,
  Cloud,
  Smartphone,
} from "lucide-react";

const trainingAreas = [
  {
    icon: Brain,
    title: "AI / ML",
  },
  {
    icon: Database,
    title: "Data Science",
  },
  {
    icon: Cpu,
    title: "IoT Development",
  },
  {
    icon: Code2,
    title: "MERN Stack",
  },
  {
    icon: Cloud,
    title: "DevOps",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
  },
];

function Training() {
  return (
    <section id="training" className="content-section training-section">
      <div className="section-container">

        {/* Section Label */}
        <div className="section-label">
          <span>07</span>
          <p>TRAINING & MENTORING</p>
        </div>

        {/* Header */}
        <div className="training-header">

          <motion.div
            className="training-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Sharing knowledge.
              <span> Building skills.</span>
            </h2>
          </motion.div>

          <motion.div
            className="training-intro"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Alongside building technology, I enjoy helping students and
              aspiring developers learn through practical projects and
              hands-on technical training.
            </p>

            <p>
              My training approach focuses on understanding concepts,
              writing real code, building projects, and connecting
              technical knowledge with real-world applications.
            </p>
          </motion.div>

        </div>

        {/* Training Stats */}
        <div className="training-stats">

          <motion.div
            className="training-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <strong>XX+</strong>
            <span>Students Trained</span>
          </motion.div>

          <motion.div
            className="training-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <strong>XX+</strong>
            <span>Technical Topics</span>
          </motion.div>

          <motion.div
            className="training-stat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <strong>XX+</strong>
            <span>Practical Projects</span>
          </motion.div>

        </div>

        {/* Training Areas */}
        <div className="training-areas">

          <div className="training-area-heading">
            <span>AREAS OF TRAINING</span>
          </div>

          <div className="training-grid">

            {trainingAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  className="training-card"
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                >
                  <div className="training-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{area.title}</h3>

                  <span className="training-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Training;