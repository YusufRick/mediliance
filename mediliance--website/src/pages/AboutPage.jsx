import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  Award,
  Globe,
  Heart,
  Shield,
  CheckCircle,
  Target,
  Lightbulb,
  HandHeart
} from 'lucide-react';
import { motion, animate, useInView } from 'framer-motion';
import officeImg2 from "../assets/office2.jpg";


const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease } },
};


const hoverable = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 320, damping: 24 },
};

/** Animated number counter (state-driven, safe to render) */
function MotionCounter({ to = '0', duration = 3, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const str = String(to);
  const numeric = Number(str.replace(/[^\d]/g, '')); // 98 from "98%"
  const suffix = str.replace(/[\d,\s]/g, '');        // "%" or "+"

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, numeric, {
      duration,
      ease,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, numeric, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make is guided by what's best for patient outcomes and safety."
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from equipment to service delivery."
    },
    {
      icon: HandHeart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek new ways to improve healthcare delivery and efficiency."
    }
  ];

  const milestones = [
    { year: "1999", event: "Mediliance incorporated in Malaysia to improve access to medical technology" },
    { year: "2003", event: "Achieved ISO 13485-aligned quality practices and expanded offerings" },
    { year: "2008", event: "Scaled biomedical engineering services and regional operations" },
    { year: "2015", event: "Launched comprehensive hospital project management division" },
    { year: "2020", event: "Rapid response initiatives supporting healthcare during the pandemic" },
    { year: "2023", event: "Crossed 50+ healthcare partners with growing regional footprint" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" variants={fadeUp}>
            About Mediliance
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeUp}>
            For over 25 years, we've been dedicated to providing healthcare professionals
            with the highest quality medical equipment, expert biomedical engineering services,
            and comprehensive project management solutions.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} {...hoverable}>
            <Card className="p-8">
              <CardHeader className="pb-4">
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To empower healthcare providers with reliable, innovative medical equipment
                  and comprehensive engineering solutions that enhance patient care, improve
                  outcomes, and support the advancement of modern medicine.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp} {...hoverable}>
            <Card className="p-8">
              <CardHeader className="pb-4">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To be the regional leader in comprehensive medical technology solutions,
                  recognized for our commitment to quality, innovation, and the positive
                  impact we make on healthcare delivery across Asia.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Company Story */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 className="text-3xl font-bold text-foreground mb-6" variants={fadeUp}>
                Our Story
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                Formally incorporated in Malaysia on 19 June 1999 by Mohammad Riazzuddin Ali Ahmad, a graduate in
                Electronics and Mathematics from Southern Illinois University at Edwardsville, USA. With strong
                relationships across Malaysia’s medical community, Mediliance set out to bridge the gap between
                cutting-edge medical technology and local healthcare needs.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                What started as a regional medical equipment supplier has evolved into a full-service healthcare
                technology partner—covering equipment supply, biomedical engineering services, and complete project
                management solutions across Asia.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground" variants={fadeUp}>
                Today, we support clinicians and health systems with reliable solutions, responsive service, and a
                relentless focus on patient outcomes.
              </motion.p>
            </div>
            <motion.div className="relative" variants={imageReveal}>
              <ImageWithFallback
                src={officeImg2}
                alt="Mediliance headquarters and team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Core Values
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              These values guide everything we do and shape how we interact with customers, partners, and each other.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm text-blue-900">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Statistics (centered with animated counters) */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            className="bg-muted/30 rounded-lg p-8 md:p-10 flex flex-col items-center text-center"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold text-foreground mb-10">
              Mediliance by the Numbers
            </h2>

            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div variants={fadeUp}>
                <div className="text-4xl font-bold text-primary mb-2">
                  <MotionCounter to={`${new Date().getFullYear() - 1999}+`} duration={1.4} />
                </div>
                <div className="text-muted-foreground">Years of Experience</div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="text-4xl font-bold text-primary mb-2">
                  <MotionCounter to="50+" duration={1.2} />
                </div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Certifications & Compliance (Malaysia) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Certifications &amp; Compliance
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              We comply with Malaysia’s medical device regulations and hold key credentials required for distribution,
              contracting, and public sector procurement.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GDPMD Certified</h3>
                <p className="text-muted-foreground text-sm text-blue-900">
                  Good Distribution Practice for Medical Devices (Malaysia)
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">MDA Registered</h3>
                <p className="text-muted-foreground text-sm text-blue-900">
                  Medical Device Authority compliance under Act 737
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">CIDB Certified</h3>
                <p className="text-muted-foreground text-sm text-blue-900">
                  Certified contractor for healthcare infrastructure works
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">MOF Registered</h3>
                <p className="text-muted-foreground text-sm text-blue-900">
                  Ministry of Finance supplier for public sector procurement
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bumiputera Status</h3>
                <p className="text-muted-foreground text-sm text-blue-900">
                  Recognized Bumiputera company supporting national initiatives
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
