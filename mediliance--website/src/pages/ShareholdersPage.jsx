import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Building, 
  Users, 
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
  Heart,
  Shield,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export function ShareholdersPage() {
  const [currentShareholder, setCurrentShareholder] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next/right, -1 for prev/left

  const keyMetrics = [
    { metric: "Market Presence", value: "15 Countries", description: "Global reach across key healthcare markets" },
    { metric: "Client Base", value: "500+ Facilities", description: "Diverse healthcare organizations served" },
    { metric: "Employee Count", value: "2,800+", description: "Dedicated professionals worldwide" },
    { metric: "Service Offerings", value: "3 Core Services", description: "Equipment, Engineering, and Project Management" }
  ];

  const reports = [
    { title: "Annual Report 2024", description: "Comprehensive overview of financial performance and strategic initiatives", date: "March 2024", type: "PDF" },
    { title: "Q4 2024 Earnings Report", description: "Quarterly financial results and management discussion", date: "February 2024", type: "PDF" },
    { title: "ESG Report 2024", description: "Environmental, Social, and Governance initiatives and progress", date: "April 2024", type: "PDF" },
    { title: "Investor Presentation", description: "Strategic overview and growth opportunities presentation", date: "January 2024", type: "PDF" }
  ];

  const principles = [
    {
      icon: Heart,
      title: "Patient-Centered Excellence",
      description: "Our commitment to improving patient outcomes drives every business decision and investment strategy.",
      points: [
        "Prioritize healthcare solutions that directly benefit patient care",
        "Invest in technologies that enhance medical treatment effectiveness",
        "Maintain rigorous quality standards across all service offerings",
        "Support healthcare providers with reliable, life-saving equipment",
        "Continuously innovate to address evolving patient care needs"
      ]
    },
    {
      icon: Shield,
      title: "Quality & Compliance Leadership",
      description: "We maintain the highest industry standards while delivering sustainable shareholder value.",
      points: [
        "Adhere to all regulatory requirements and industry certifications",
        "Implement comprehensive quality management systems",
        "Conduct regular audits and compliance assessments",
        "Invest in staff training and professional development",
        "Maintain transparent reporting and governance practices"
      ]
    },
    {
      icon: Award,
      title: "Sustainable Growth Strategy",
      description: "Our long-term approach balances profitability with responsible business practices.",
      points: [
        "Focus on organic growth through market expansion",
        "Strategic acquisitions that enhance service capabilities",
        "Diversified revenue streams across healthcare sectors",
        "Investment in research and development for future growth",
        "Environmental sustainability in operations and supply chain"
      ]
    },
    {
      icon: Target,
      title: "Stakeholder Value Creation",
      description: "We create value for all stakeholders through operational excellence and strategic vision.",
      points: [
        "Deliver consistent financial performance for shareholders",
        "Provide career growth opportunities for employees",
        "Build long-term partnerships with healthcare clients",
        "Support community health initiatives and programs",
        "Maintain strong relationships with supplier partners"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology Leadership",
      description: "We drive healthcare innovation while maintaining fiscal responsibility.",
      points: [
        "Invest in cutting-edge medical technologies and solutions",
        "Develop proprietary systems for enhanced service delivery",
        "Partner with leading healthcare technology companies",
        "Support research initiatives that advance medical care",
        "Implement digital transformation across all operations"
      ]
    }
  ];

  const shareholders = [
    {
      name: "Mohammad Faqrullah Mohammad Riazzuddin",
      percentage: "34.2%",
      type: "Director",
      description: "Leading healthcare investment firm focused on medical technology companies",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      details: "A graduate from UNITEN. Good experience in both sales and project management and technical aspect of engineering"
    },
    {
      name: "Mohammad Riazzuddin Ali Ahmad",
      percentage: "28.7%",
      type: "Chief Executive Officer and Director",
      description: "International medical equipment and services conglomerate",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      details: "A graduate in Electronics and Mathematics from Southern Illinois University at Edwardsville USA. He has an excellent relationship with opinion leaders of medical and healthcare in Malaysia"
    },
    {
      name: "Noreha Binti Hassan",
      percentage: "15.6%",
      type: "Director",
      description: "Company founders and senior management team",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop",
      details: "Strong management ownership ensures alignment between leadership decisions and long-term shareholder value creation, maintaining our commitment to operational excellence."
    },
    {
      name: "Public Shareholders",
      percentage: "21.5%",
      type: "Public Investment",
      description: "Individual and institutional public market investors",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop",
      details: "Our public shareholders benefit from transparent reporting and consistent dividend policy, with strong liquidity and growth potential in the expanding healthcare sector."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentShareholder((prev) => (prev + 1) % shareholders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [shareholders.length]);

  const nextShareholder = () => {
    setDirection(1);
    setCurrentShareholder((prev) => (prev + 1) % shareholders.length);
  };

  const prevShareholder = () => {
    setDirection(-1);
    setCurrentShareholder((prev) => (prev - 1 + shareholders.length) % shareholders.length);
  };

  // Variants for the slideshow (directional slide)
 const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease } },
    exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.35, ease } })
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" variants={fadeUp}>
            Investor Relations
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeUp}>
            Mediliance delivers consistent growth and value creation for shareholders 
            through strategic market expansion, operational excellence, and commitment 
            to comprehensive healthcare technology solutions.
          </motion.p>
        </motion.div>

        {/* Principles Section */}
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Investment Principles
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              These core principles guide our strategic decisions and ensure sustainable 
              value creation for all stakeholders in the healthcare ecosystem.
            </motion.p>
          </div>
          <div className="space-y-12">
            {principles.map((principle, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-6">
                    <principle.icon className="h-16 w-16 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{principle.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{principle.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {principle.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Metrics */}
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <motion.div className="bg-muted/30 rounded-lg p-8" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Key Business Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="font-semibold mb-2">{metric.metric}</div>
                    <div className="text-muted-foreground text-sm">{metric.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Shareholders Slideshow */}
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Shareholders
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Mediliance is backed by leading healthcare investors and strategic partners 
              who share our vision for advancing medical technology solutions.
            </motion.p>
          </div>

          <div className="relative">
            <motion.div variants={fadeUp}>
              <Card className="p-8 min-h-[500px]">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={currentShareholder}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch h-full"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <motion.div className="flex flex-col" variants={imageReveal} {...hoverable}>
                      <ImageWithFallback
                        src={shareholders[currentShareholder].image}
                        alt={shareholders[currentShareholder].name}
                        className="rounded-lg shadow-lg w-full h-full min-h-[350px] object-cover"
                      />
                    </motion.div>

                    <motion.div className="flex flex-col justify-center" variants={stagger}>
                      <motion.div className="mb-4" variants={fadeUp}>
                        <div className="text-3xl font-bold text-primary mb-2">
                          {shareholders[currentShareholder].percentage}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {shareholders[currentShareholder].type}
                        </div>
                      </motion.div>
                      <motion.h3 className="text-2xl font-bold text-foreground mb-4" variants={fadeUp}>
                        {shareholders[currentShareholder].name}
                      </motion.h3>
                      <motion.p className="text-lg text-muted-foreground mb-4" variants={fadeUp}>
                        {shareholders[currentShareholder].description}
                      </motion.p>
                      <motion.p className="text-muted-foreground" variants={fadeUp}>
                        {shareholders[currentShareholder].details}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </Card>
            </motion.div>

            {/* Navigation Controls */}
            <motion.div className="flex items-center justify-between mt-6" variants={fadeUp}>
              <Button
                variant="outline"
                size="sm"
                className="sm:text-base text-sm px-3 sm:px-4"
                onClick={prevShareholder}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {shareholders.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentShareholder ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => {
                      setDirection(index > currentShareholder ? 1 : -1);
                      setCurrentShareholder(index);
                    }}
                    aria-label={`Go to shareholder ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="sm:text-base text-sm px-3 sm:px-4"
                onClick={nextShareholder}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Financial Reports */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Financial Reports &amp; Documents
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Access our latest financial reports, SEC filings, and investor materials.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{report.description}</p>
                      </div>
                      <FileText className="h-8 w-8 text-primary flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {report.date} • {report.type}
                      </div>
                      <Button variant="outline" size="sm" className="sm:text-base text-sm px-2 sm:px-3">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
