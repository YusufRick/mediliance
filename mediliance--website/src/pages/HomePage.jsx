import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Shareholders from '../components/ShareHolder';
import CounterCircle from '../components/CounterCircular';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const HomePage = () => {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    if (!contactRef.current) return;

    const targetY = contactRef.current.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const duration = 1200;
    const startTime = performance.now();

    const easeOutCubic = (t) => (--t) * t * t + 1;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      window.scrollTo(0, startY + (targetY - startY) * easedProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const sections = [
    {
      id: "about",
      title: "About Mediliance",
      className: "about-container",
      content:
        "Mediliance (M) Sdn. Bhd. is a leading Malaysian distributor of medical and surgical equipment based in Petaling Jaya. With over two decades of experience, we provide reliable healthcare solutions, from equipment supply to technical support and hospital project management."
    },
    {
      id: "services",
      title: "Our Services",
      content: (
        <ul className='services-container'>
          <li>Medical Equipment Supply – Quality diagnostic and surgical instruments for hospitals and clinics.</li>
          <li>Biomedical Engineering Services – Equipment maintenance, calibration, and servicing by certified professionals.</li>
          <li>Hospital Project Management – Turnkey delivery and setup for healthcare infrastructure and procurement.</li>
        </ul>
      )
    },
    {
      id: "why",
      title: "Why Choose Mediliance?",
      content:
        "With 25+ years of industry presence, we bring unmatched experience, local expertise, and a commitment to delivering tailored healthcare solutions that prioritize patient safety and operational efficiency."
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p>
          📍 11-2 Jalan PJS 3/59, Taman Sri Manja, 46000 Petaling Jaya, Selangor<br />
          🕐 Mon–Fri: 8:00 AM – 5:00 PM<br />
          📞 +60 3-7770 XXXX<br />
          ✉️ <a href="mailto:info@mediliance.com">info@mediliance.com</a>
        </p>
      )
    }
  ];

  return (
    <main id="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <h1>Empowering Healthcare Through Technology</h1>
          <p>Delivering trusted medical solutions and biomedical services across Malaysia since 1999.</p>
          <button onClick={handleScrollToContact} className="cta-button">
            Get in Touch
          </button>
        </motion.div>
      </section>

      {/* Dynamic Sections with Shareholders and Project Stats inserted before Contact */}
      {sections.map((section) => {
        if (section.id === "contact") {
          return (
            <React.Fragment key="shareholders-stats-contact">
              <Shareholders />

             {/* ✅ Project Stats Section */}
<motion.section
  id="projects"
  className="counter-section"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  variants={fadeInUp}
>
  <div className="counter-inner">
    <h2 className="counter-title">Our Achievements</h2>
    <div className="counter-wrapper">
      <CounterCircle value={126} duration={2000} label="Projects Completed" />
    </div>
  </div>
</motion.section>


              {/* Contact Section */}
              <motion.section
                id={section.id}
                ref={contactRef}
                className="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                variants={fadeInUp}
              >
                <div className="section-content">
                  <h2>{section.title}</h2>
                  {section.content}
                </div>
              </motion.section>
            </React.Fragment>
          );
        }

        return (
          <motion.section
            key={section.id}
            id={section.id}
            className="section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="section-content">
              <h2>{section.title}</h2>
              {section.content}
            </div>
          </motion.section>
        );
      })}
    </main>
  );
};

export default HomePage;
