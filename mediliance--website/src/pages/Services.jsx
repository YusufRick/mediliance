import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    id: "equipment",
    title: "Medical Equipment Supply",
    description:
      "Quality diagnostic and surgical instruments for hospitals and clinics.",
    bgClass: "bg-equipment",
  },
  {
    id: "biomedical",
    title: "Biomedical Engineering Services",
    description:
      "Equipment maintenance, calibration, and servicing by certified professionals.",
    bgClass: "bg-biomedical",
  },
  {
    id: "project",
    title: "Hospital Project Management",
    description:
      "Turnkey delivery and setup for healthcare infrastructure and procurement.",
    bgClass: "bg-project",
  },
];

const ServicesPage = () => {
  return (
    <main>
      {services.map((service, index) => (
        <motion.section
          key={service.id}
          className={`services-section ${service.bgClass}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          variants={fadeInUp}
        >
          <div className="services-overlay">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </motion.section>
      ))}
    </main>
  );
};

export default ServicesPage;
