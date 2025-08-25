import { MotionButton as Button } from '../components/ui/MotionButton';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Stethoscope, 
  Wrench, 
  Building2,
  TrendingUp,
  ChevronRight,
  CheckCircle
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

export function Homepage({ onNavigate }) {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-primary/5 to-primary/10 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" variants={fadeUp}>
              Medical Excellence Through
              <span className="block text-primary">Innovation &amp; Service</span>
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={fadeUp}>
              Mediliance delivers comprehensive medical equipment solutions, expert biomedical 
              engineering services, and complete hospital project management to healthcare 
              facilities worldwide.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
              <Button variant="outline" size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('services')}>
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('about')}>
                Learn About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeUp}>
                Why Choose Mediliance?
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                For over 25 years, we've been at the forefront of medical technology solutions, 
                providing healthcare professionals with the equipment, services, and support 
                they need to deliver exceptional patient care.
              </motion.p>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" variants={stagger}>
                <motion.div className="flex items-center" variants={fadeUp}>
                    <Heart className="h-5 w-5 text-primary mr-3" />
                    <span>Patient-Centered Focus</span>
                </motion.div>
                <motion.div className="flex items-center" variants={fadeUp}>
                    <Shield className="h-5 w-5 text-primary mr-3" />
                    <span>GDPMP Certified</span>
                </motion.div>
                <motion.div className="flex items-center" variants={fadeUp}>
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span>Registered with MOF, CIDB & MDA</span>
                </motion.div>
                <motion.div className="flex items-center" variants={fadeUp}>
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Bumiputera Status</span>
                </motion.div>
                </motion.div>


              <motion.div variants={fadeUp}>
                <Button variant="outline" size="lg"className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('about')}>
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <motion.div className="relative" variants={imageReveal}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Medical professionals using advanced equipment"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Our Core Services
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              Comprehensive medical solutions designed to support healthcare facilities 
              with equipment, engineering expertise, and project management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Medical Equipment Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quality diagnostic and surgical instruments for hospitals and clinics, 
                    sourced from trusted manufacturers worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Biomedical Engineering Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Equipment maintenance, calibration, and servicing by certified 
                    professionals to ensure optimal performance and safety.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Hospital Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Turnkey delivery and setup for healthcare infrastructure and 
                    procurement, managing projects from concept to completion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div className="text-center mt-12" variants={fadeUp}>
            <Button variant="outline" size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('services')}>
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" variants={fadeUp}>
              Trusted by Healthcare Leaders
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" variants={fadeUp}>
              We're proud to serve over 500+ healthcare facilities worldwide, 
              from small clinics to major hospital systems.
            </motion.p>
          </div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60" variants={stagger}>
            <motion.div className="text-center" variants={fadeUp}>
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">Ministry of Health</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeUp}>
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">Private Hospital</p>
            </motion.div>
            <motion.div className="text-center" variants={fadeUp}>
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">University Hospital</p>
            </motion.div>
            
          </motion.div>

          <motion.div className="text-center mt-12" variants={fadeUp}>
            <Button variant="outline" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('clients')}>
              See Our Client Stories
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Shareholders Section */}
      <motion.section
        className="py-20 bg-muted/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" variants={fadeUp}>
                Investor Relations
              </motion.h2>
              <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                Mediliance continues to deliver strong financial performance 
                and sustainable growth for our shareholders through strategic 
                market expansion and operational excellence in the healthcare sector.
              </motion.p>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8" variants={stagger}>
                <motion.div className="bg-background p-4 rounded-lg" variants={fadeUp}>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <p className="font-semibold">Revenue Growth</p>
                  <p className="text-2xl font-bold text-primary">+15%</p>
                  <p className="text-sm text-muted-foreground">Year over year</p>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button variant="outline" size="lg"className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('shareholders')}>
                  View Investor Information
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <motion.div className="relative" variants={imageReveal}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Business growth charts and analytics"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
