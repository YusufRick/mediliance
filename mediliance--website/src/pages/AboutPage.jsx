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
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } }
};

const hoverable = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 320, damping: 24 }
};

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
    { year: "1998", event: "Mediliance founded with a mission to improve healthcare technology access" },
    { year: "2003", event: "Achieved ISO 13485 certification for quality management systems" },
    { year: "2008", event: "Expanded biomedical engineering services and international operations" },
    { year: "2015", event: "Launched comprehensive hospital project management division" },
    { year: "2020", event: "Rapid response to global healthcare challenges during pandemic" },
    { year: "2023", event: "Reached milestone of serving 500+ healthcare facilities worldwide" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
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
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
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
                  To be the global leader in comprehensive medical technology solutions, 
                  recognized for our commitment to quality, innovation, and the positive 
                  impact we make on healthcare delivery worldwide.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Company Story */}
        <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 className="text-3xl font-bold text-foreground mb-6" variants={fadeUp}>
                Our Story
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                Formally incorporated in Malaysia on 19 June 1999 by Mohammad Riazzuddin Ali Ahmad, a graduate in Electronics 
                and Mathematics from Southern Illinois University at Edwardsville, USA. 
                With a strong network among Malaysia’s medical and healthcare opinion leaders, 
                he envisioned a company that would bridge the gap between advanced medical 
                technology and local healthcare needs.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                What started as a regional medical equipment supplier has evolved into a 
                full-service healthcare technology partner, offering equipment supply, 
                biomedical engineering services, and complete project management solutions 
                across Asia.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground" variants={fadeUp}>
                Today, we're proud to be an integral part of the healthcare ecosystem, 
                supporting medical professionals who save lives every day with our 
                comprehensive suite of services and unwavering commitment to excellence.
              </motion.p>
            </div>
            <motion.div className="relative" variants={imageReveal}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop"
                alt="Mediliance headquarters and team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Core Values
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              These values guide everything we do and shape how we interact with 
              customers, partners, and each other.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Statistics */}
        <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div className="bg-muted/30 rounded-lg p-8" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Mediliance by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={fadeUp}>
                <div className="text-3xl font-bold text-primary mb-2">{new Date().getFullYear() - 1999}+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Countries Served</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Our Journey */}
        <motion.section className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Journey
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Key milestones that have shaped Mediliance into the comprehensive 
              healthcare solutions provider we are today.
            </motion.p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div key={index} className="flex items-start space-x-4" variants={fadeUp} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-lg font-semibold text-primary">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications & Compliance (Malaysia) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Certifications &amp; Compliance
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              We comply with Malaysia’s medical device regulations and hold key credentials required for distribution, contracting, and public sector procurement.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GDPMD Certified</h3>
                <p className="text-muted-foreground text-sm">
                  Good Distribution Practice for Medical Devices (Malaysia)
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">MDA Registered</h3>
                <p className="text-muted-foreground text-sm">
                  Medical Device Authority compliance under Act 737
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">CIDB Certified</h3>
                <p className="text-muted-foreground text-sm">
                  Certified contractor for healthcare infrastructure works
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">MOF Registered</h3>
                <p className="text-muted-foreground text-sm">
                  Ministry of Finance supplier for public sector procurement
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp} {...hoverable}>
              <Card className="text-center p-6">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bumiputera Status</h3>
                <p className="text-muted-foreground text-sm">
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
