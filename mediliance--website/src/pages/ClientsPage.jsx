import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Building, 
  Star, 
  Quote,
  Users,
  TrendingUp,
  Award,
  Heart,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

const hoverable = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 320, damping: 24 },
};

export function ClientsPage() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      company: "Metropolitan General Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: "Mediliance has been an invaluable partner in our mission to provide exceptional patient care. Their equipment quality and biomedical engineering expertise are unmatched.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      title: "Director of Operations",
      company: "Regional Medical Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The 24/7 technical support and rapid response times have been game-changers for our facility. Mediliance truly understands the critical nature of healthcare operations.",
      rating: 5
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Practice Owner",
      company: "Family Health Clinic",
      image: "https://images.unsplash.com/photo-1594824804732-5b4c71d7c0e4?w=150&h=150&fit=crop&crop=face",
      quote: "From equipment supply to maintenance services, Mediliance provides cost-effective solutions without compromising quality. Their project management team made our expansion seamless.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Emergency Department Modernization",
      client: "Metro Emergency Medical Center",
      challenge: "Outdated diagnostic equipment causing delays in patient treatment and increased operational costs",
      solution: "Complete equipment upgrade with integrated monitoring systems, biomedical engineering support, and comprehensive staff training",
      results: [
        "40% reduction in patient wait times",
        "25% improvement in diagnostic accuracy", 
        "Enhanced equipment reliability and reduced downtime"
      ],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
    },
    {
      title: "Rural Hospital Complete Setup",
      client: "Countryside Regional Hospital",
      challenge: "New facility requiring complete medical equipment procurement and installation within tight timeline",
      solution: "Turnkey project management including equipment selection, procurement, installation, and staff training with ongoing maintenance support",
      results: [
        "On-time facility opening within 6-month deadline",
        "30% cost savings through strategic procurement",
        "Seamless transition with zero operational delays"
      ],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop"
    },
    {
      title: "Multi-Site Surgical Center Network",
      client: "Health Partners Surgical Network",
      challenge: "Standardizing equipment and maintenance across 8 surgical centers with varying specialties",
      solution: "Comprehensive equipment standardization program with centralized biomedical engineering services and preventive maintenance protocols",
      results: [
        "95% equipment uptime across all locations",
        "20% reduction in maintenance costs",
        "Improved surgical scheduling efficiency"
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
    }
  ];

  const clientStats = [
    { icon: Building, number: "500+", label: "Healthcare Facilities", description: "From small clinics to major medical centers" },
    { icon: Users, number: "50,000+", label: "Healthcare Professionals", description: "Trust our equipment and services daily" },
    { icon: TrendingUp, number: "98%", label: "Client Retention Rate", description: "Long-term partnerships built on trust" },
    { icon: Award, number: "15", label: "Countries Served", description: "Global reach with local support" }
  ];

  const clientTypes = [
    {
      type: "Major Hospital Systems",
      description: "Large-scale medical centers with complex equipment and service needs",
      examples: ["Metro General Hospital", "University Medical Center", "Regional Healthcare System"],
      icon: Building
    },
    {
      type: "Specialty Clinics",
      description: "Focused care facilities with specialized equipment requirements",
      examples: ["Cardiology Associates", "Orthopedic Specialty Center", "Cancer Treatment Center"],
      icon: Heart
    },
    {
      type: "Emergency Services",
      description: "Critical care providers requiring immediate equipment support and maintenance",
      examples: ["City Emergency Services", "Trauma Response Centers", "Rural EMS Stations"],
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger}
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" variants={fadeUp}>
            Our Clients
          </motion.h1>
          <motion.p className="text-xl text-muted-foreground max-w-3xl mx-auto" variants={fadeUp}>
            We're proud to partner with healthcare organizations worldwide, 
            supporting their mission to provide exceptional patient care through 
            reliable medical equipment and comprehensive service solutions.
          </motion.p>
        </motion.div>

        {/* Client Statistics */}
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <motion.div className="bg-muted/30 rounded-lg p-8" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Trusted by Healthcare Leaders
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {clientStats.map((stat, index) => (
                <motion.div key={index} variants={fadeUp} {...hoverable}>
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-muted-foreground text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Client Testimonials (kept commented, motion-ready if you un-comment) */}
        {/*
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Hear from healthcare professionals who trust Mediliance for 
              their critical equipment and service needs.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Quote className="h-8 w-8 text-muted-foreground mb-3" />
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        */}

        {/* Case Studies */}
        <motion.section
          className="mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Success Stories
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Real-world examples of how we've helped healthcare organizations 
              improve their operations and patient outcomes through our comprehensive services.
            </motion.p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                variants={stagger}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.h3 className="text-2xl font-bold text-foreground mb-4" variants={fadeUp}>
                    {study.title}
                  </motion.h3>
                  <motion.p className="text-primary font-semibold mb-4" variants={fadeUp}>
                    {study.client}
                  </motion.p>

                  <motion.div className="mb-6" variants={fadeUp}>
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </motion.div>

                  <motion.div className="mb-6" variants={fadeUp}>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </motion.div>

                  <motion.div variants={stagger}>
                    <h4 className="font-semibold mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <motion.li
                          key={resultIndex}
                          className="flex items-start"
                          variants={fadeUp}
                        >
                          <TrendingUp className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  variants={imageReveal}
                  {...hoverable}
                >
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Client Types */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2 className="text-3xl font-bold text-foreground mb-4" variants={fadeUp}>
              Healthcare Sectors We Serve
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Our diverse client base spans across various healthcare sectors, 
              each with unique equipment and service requirements.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <motion.div key={index} variants={fadeUp} {...hoverable}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <type.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{type.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Example Clients:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex}>• {example}</li>
                        ))}
                      </ul>
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
