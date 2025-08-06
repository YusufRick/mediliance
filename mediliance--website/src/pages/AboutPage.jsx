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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Mediliance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, we've been dedicated to providing healthcare professionals 
            with the highest quality medical equipment, expert biomedical engineering services, 
            and comprehensive project management solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1998 by a team of healthcare professionals and biomedical engineers, 
                Mediliance was born from a simple yet powerful idea: healthcare providers 
                deserve comprehensive solutions that go beyond just equipment supply.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a regional medical equipment supplier has evolved into a 
                full-service healthcare technology partner, offering equipment supply, 
                biomedical engineering services, and complete project management solutions 
                across 15 countries.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be an integral part of the healthcare ecosystem, 
                supporting medical professionals who save lives every day with our 
                comprehensive suite of services and unwavering commitment to excellence.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&h=400&fit=crop"
                alt="Mediliance headquarters and team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we interact with 
              customers, partners, and each other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Statistics */}
        <section className="mb-20">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Mediliance by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Healthcare Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Mediliance into the comprehensive 
              healthcare solutions provider we are today.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
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
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certifications &amp; Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications to ensure 
              quality and compliance across all our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 13485 Certified</h3>
              <p className="text-muted-foreground text-sm">
                Quality management systems for medical devices and services
              </p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">FDA Registered</h3>
              <p className="text-muted-foreground text-sm">
                Registered facility with the Food and Drug Administration
              </p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-muted-foreground text-sm">
                Full compliance with healthcare privacy regulations
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}