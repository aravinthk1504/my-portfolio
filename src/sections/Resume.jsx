```jsx
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  FileText,
} from "lucide-react";

function Resume() {
  const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="resume" className="content-section resume-section">
      <div className="section-container">

        <div className="section-label">
          <span>08</span>
          <p>RESUME</p>
        </div>

        <div className="resume-card">

          <motion.div
            className="resume-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FileText size={28} />
          </motion.div>

          <motion.div
            className="resume-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>MY PROFESSIONAL PROFILE</span>

            <h2>
              Let's build something
              <span> intelligent.</span>
            </h2>

            <p>
              Explore my professional experience, technical skills,
              education, projects and achievements in my complete resume.
            </p>

            <div className="resume-actions">

              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="resume-primary"
              >
                View Resume
                <ArrowUpRight size={17} />
              </a>

              <a
                href={resumePath}
                download
                className="resume-secondary"
              >
                Download PDF
                <ArrowDownToLine size={17} />
              </a>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Resume;
```
