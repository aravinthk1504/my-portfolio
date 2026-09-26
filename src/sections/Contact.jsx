import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  BriefcaseBusiness,
  Code2,
  Phone,
  MapPin,
} from "lucide-react";

import { portfolioData } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-container">

        <div className="section-label">
          <span>09</span>
          <p>CONTACT</p>
        </div>

        <div className="contact-grid">

          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>LET'S CONNECT</span>

            <h2>
              Have an idea?
              <span> Let's talk.</span>
            </h2>

            <p>
              I'm open to opportunities, collaborations, technical
              projects and conversations around AI, machine learning,
              software development and intelligent systems.
            </p>

            <div className="contact-location">
              <MapPin size={16} />
              <span>{portfolioData.location}</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-links"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <a
              href={portfolioData.social.email}
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>Email</span>
                <strong>{portfolioData.contact.email}</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>
                <strong>{portfolioData.contact.phone}</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>linkedin.com/in/aravinthk1504</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Code2 size={20} />
              </div>

              <div>
                <span>GitHub</span>
                <strong>github.com/aravinthk1504</strong>
              </div>

              <ArrowUpRight size={19} />
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;