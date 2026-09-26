import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Impact() {
  const stats = [
    {
      number: portfolioData.stats.projects,
      label: "Projects Built",
    },
    {
      number: portfolioData.stats.studentsTrained,
      label: "Students Trained",
    },
    {
      number: portfolioData.stats.technologies,
      label: "Technologies",
    },
    {
      number: portfolioData.stats.experience,
      label: "Years Experience",
    },
  ];

  return (
    <section className="impact-section">

      <div className="impact-container">

        <div className="section-intro">
          <p className="eyebrow">IMPACT</p>

          <h2>
            Turning knowledge into
            <span> real-world impact.</span>
          </h2>
        </div>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <strong>{stat.number}</strong>

              <span>{stat.label}</span>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Impact;