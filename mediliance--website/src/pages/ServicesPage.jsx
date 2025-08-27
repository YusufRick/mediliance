import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Stethoscope,
  Wrench,
  Building2,
  GraduationCap,
  Shield,
  Clock,
  CheckCircle,
  Settings,
  ShoppingCart,
  School,
} from 'lucide-react';
import { motion } from 'framer-motion';
import medEquipment from "../assets/mriMachine2.jpeg";
import biomedService from "../assets/radiology.jpg";
import projectManagement from "../assets/management.jpg";

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

export function ServicesPage() {
  const mainServices = [
    {
      icon: Stethoscope,
      title: 'Medical Equipment Supply',
      description:
        'Quality diagnostic and surgical instruments for hospitals and clinics from trusted global manufacturers.',
      features: [
        'Diagnostic imaging equipment',
        'Surgical instruments and tools',
        'Patient monitoring systems',
        'Laboratory equipment and analyzers',
        'Emergency and critical care devices',
        'Anesthesia and respiratory equipment',
      ],
      image:
        medEquipment,
    },
    {
      icon: Wrench,
      title: 'Biomedical Engineering Services',
      description:
        'Equipment maintenance, calibration, and servicing by certified professionals to ensure optimal performance.',
      features: [
        'Preventive maintenance programs',
        'Equipment calibration and testing',
        'Emergency repair services',
        'Performance optimization',
        'Safety inspections and compliance',
        'Equipment lifecycle management',
      ],
      image:
        biomedService,
    },
    {
      icon: Building2,
      title: 'Hospital Project Management',
      description:
        'Turnkey delivery and setup for healthcare infrastructure and procurement, managing projects from concept to completion.',
      features: [
        'Complete facility planning and design',
        'Equipment procurement and coordination',
        'Installation and commissioning',
        'Staff training and transition support',
        'Regulatory compliance management',
        'Post-implementation support',
      ],
      image:
        projectManagement,
    },
  ];

  const serviceFeatures = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description:
        'All equipment and services meet rigorous quality standards with comprehensive warranties.',
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description:
        'Emergency services available 24/7 with guaranteed response times for critical situations.',
    },
    {
      icon: GraduationCap,
      title: 'Certified Professionals',
      description:
        'All technicians and engineers are certified and undergo continuous training and development.',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            variants={fadeUp}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeUp}
          >
            Comprehensive medical technology solutions designed to support healthcare
            facilities with equipment supply, biomedical engineering expertise, and
            complete project management services.
          </motion.p>
        </motion.div>

        {/* Main Services */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground text-center mb-12"
            variants={fadeUp}
          >
            Core Service Offerings
          </motion.h2>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              // Row container: fade in + let children stagger
              <motion.div
                key={index}
                variants={fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Text column with staggered items */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                  variants={stagger}
                >
                  <motion.div variants={fadeUp}>
                    <service.icon className="h-16 w-16 text-primary mb-6" />
                  </motion.div>

                  <motion.h3 className="text-2xl font-bold text-foreground mb-4" variants={fadeUp}>
                    {service.title}
                  </motion.h3>

                  <motion.p className="text-lg text-muted-foreground mb-6" variants={fadeUp}>
                    {service.description}
                  </motion.p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li key={i} className="flex items-center" variants={fade}>
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-blue-900">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image column with reveal + hover */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
                  variants={imageReveal}
                  {...hoverable}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} services`}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Service Features */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="bg-muted/30 rounded-lg p-8" variants={fadeUp}>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeUp}
                  {...hoverable}
                >
                  <feature.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-blue-900">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Service Areas / Healthcare Sectors */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-foreground mb-4"
              variants={fadeUp}
            >
              Healthcare Sectors We Serve
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUp}
            >
              Our comprehensive services are tailored to meet the specific needs
              of different healthcare environments and specialties.
            </motion.p>
          </div>

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              { icon: Building2, title: 'Hospitals', desc: 'Comprehensive solutions for acute care and specialized departments' },
              { icon: GraduationCap, title: 'Specialty Clinics', desc: 'Scalable equipment and service solutions for outpatient facilities' },
              { icon: Stethoscope, title: 'GP Clinics', desc: 'Primary care equipment and reliable engineering support' },
              { icon: School, title: 'Universities', desc: 'Medical education equipment and research facility solutions' },
              { icon: Shield, title: 'Ministry of Health (MOH) Facilities', desc: 'Turnkey supply, maintenance, and compliance for government hospitals & clinics' },
              { icon: GraduationCap, title: 'Teaching Hospitals', desc: 'University-affiliated hospitals with training, research, and specialty care needs' },
              { icon: Building2, title: 'Private Hospitals', desc: 'Premium equipment, uptime SLAs, and tailored financing/capex planning' },
              { icon: Settings, title: 'Diagnostic Laboratories', desc: 'Analyzers, sample handling, calibration & compliance support' },
              { icon: ShoppingCart, title: 'Medical Retailers', desc: 'Equipment supply and distribution support for retailers' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} {...hoverable} className="w-full">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <s.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm text-blue-900">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
