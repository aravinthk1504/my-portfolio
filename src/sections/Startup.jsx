import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Smartphone,
  Cpu,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI/ML & Data Science",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
  },
  {
    icon: Code2,
    title: "Web & Software Development",
  },
  {
    icon: Smartphone,
    title: "App Development",
  },
  {
    icon: Cpu,
    title: "IoT & Intelligent Systems",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
  },
];

function Startup() {
  return (
    <section id="startup" className="content-section startup-section">
      <div className="section-container">

        {/* Section Label */}
        <div className="section-label">
          <span>06</span>
          <p>GenData Tech</p>
        </div>

        {/* Main Header */}
        <div className="startup-header">

          <motion.div
            className="startup-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="startup-eyebrow">
              TECHNOLOGY • INNOVATION • TRAINING
            </p>

            <h2>
              Building
              <span> GenData Tech.</span>
            </h2>

            <p className="startup-role">
              Founder / Technology Lead
            </p>
          </motion.div>

          <motion.div
            className="startup-description"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              GenData Tech is a technology initiative focused on building
              practical digital solutions across  AI/ML, software development,  
              Web Development, IoT and technical education.
            </p>

            <p>
              The goal is to connect technology with real-world problems
              while helping students and aspiring developers gain practical
              technical skills.
            </p>

            <a
              href="https://gendatatech.com"
              target="_blank"
              rel="noreferrer"
              className="startup-link"
            >
              Visit GenData Tech
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>

        {/* Services */}
        <div className="startup-services">

          <div className="startup-services-heading">
            <span>WHAT WE BUILD</span>
          </div>

          <div className="services-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  className="service-item"
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                >
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <h3>{service.title}</h3>
                  </div>

                  <ArrowUpRight
                    className="service-arrow"
                    size={19}
                  />
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="startup-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span>EXPLORE THE COMPANY</span>

            <h3>
              Technology built for
              <span> real-world impact.</span>
            </h3>
          </div>

          <a
            href="https://gendatatech.com"
            target="_blank"
            rel="noreferrer"
            className="startup-cta-button"
          >
            Explore GenData Tech
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Startup;