import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Stethoscope, 
  Wrench, 
  Building2, 
  GraduationCap, 
  Phone,
  Shield,
  Clock,
  CheckCircle,
  Settings,
  Truck,
  Award,
  ShoppingCart,
  School
} from 'lucide-react';

export function ServicesPage() {
  const mainServices = [
    {
      icon: Stethoscope,
      title: "Medical Equipment Supply",
      description: "Quality diagnostic and surgical instruments for hospitals and clinics from trusted global manufacturers.",
      features: [
        "Diagnostic imaging equipment",
        "Surgical instruments and tools", 
        "Patient monitoring systems",
        "Laboratory equipment and analyzers",
        "Emergency and critical care devices",
        "Anesthesia and respiratory equipment"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      icon: Wrench,
      title: "Biomedical Engineering Services",
      description: "Equipment maintenance, calibration, and servicing by certified professionals to ensure optimal performance.",
      features: [
        "Preventive maintenance programs",
        "Equipment calibration and testing",
        "Emergency repair services",
        "Performance optimization",
        "Safety inspections and compliance",
        "Equipment lifecycle management"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    },
    {
      icon: Building2,
      title: "Hospital Project Management",
      description: "Turnkey delivery and setup for healthcare infrastructure and procurement, managing projects from concept to completion.",
      features: [
        "Complete facility planning and design",
        "Equipment procurement and coordination",
        "Installation and commissioning",
        "Staff training and transition support",
        "Regulatory compliance management",
        "Post-implementation support"
      ],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop"
    }
  ];

  const supportServices = [
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Comprehensive training programs for healthcare staff on equipment usage, safety, and maintenance."
    },
    {
      icon: Phone,
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support and emergency response for critical equipment issues."
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Reliable, temperature-controlled delivery with real-time tracking and flexible scheduling."
    },
    {
      icon: Settings,
      title: "Consultation Services",
      description: "Expert consultation on equipment selection, facility planning, and technology optimization."
    }
  ];

  const serviceFeatures = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All equipment and services meet rigorous quality standards with comprehensive warranties."
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Emergency services available 24/7 with guaranteed response times for critical situations."
    },
    {
      icon: Award,
      title: "Certified Professionals",
      description: "All technicians and engineers are certified and undergo continuous training and development."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive medical technology solutions designed to support healthcare 
            facilities with equipment supply, biomedical engineering expertise, and 
            complete project management services.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Core Service Offerings
          </h2>
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <service.icon className="h-16 w-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <ImageWithFallback
                    src={service.image}
                    alt={`${service.title} services`}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond our core offerings, we provide comprehensive support services 
              to ensure optimal performance and maximum value from your investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Features */}
        <section className="mb-20">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Healthcare Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive services are tailored to meet the specific needs 
              of different healthcare environments and specialties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hospitals</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive solutions for acute care and specialized departments
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Clinics</h3>
              <p className="text-muted-foreground text-sm">
                Scalable equipment and service solutions for outpatient facilities
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Surgical Centers</h3>
              <p className="text-muted-foreground text-sm">
                Specialized equipment and engineering support for surgical procedures
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Emergency Services</h3>
              <p className="text-muted-foreground text-sm">
                Critical equipment and rapid response support for emergency care
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <School className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Universities</h3>
              <p className="text-muted-foreground text-sm">
                Medical education equipment and research facility solutions
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Medical Retailers</h3>
              <p className="text-muted-foreground text-sm">
                Equipment supply and distribution support for medical retailers
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}