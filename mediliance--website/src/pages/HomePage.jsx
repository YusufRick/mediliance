import { Button } from '../components/ui/button';
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
  ChevronRight
} from 'lucide-react';

export function Homepage({ onNavigate }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Medical Excellence Through
              <span className="block text-primary">Innovation &amp; Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Mediliance delivers comprehensive medical equipment solutions, expert biomedical 
              engineering services, and complete hospital project management to healthcare 
              facilities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('services')}>
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('about')}>
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Mediliance?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 25 years, we've been at the forefront of medical technology solutions, 
                providing healthcare professionals with the equipment, services, and support 
                they need to deliver exceptional patient care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-primary mr-3" />
                  <span>Patient-Centered Focus</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>FDA Approved Equipment</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  <span>ISO 13485 Certified</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  <span>24/7 Technical Support</span>
                </div>
              </div>
              <Button className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('about')}>
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Medical professionals using advanced equipment"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical solutions designed to support healthcare facilities 
              with equipment, engineering expertise, and project management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('services')}>
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to serve over 500+ healthcare facilities worldwide, 
              from small clinics to major hospital systems.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">Metro General Hospital</p>
            </div>
            <div className="text-center">
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">Regional Medical Center</p>
            </div>
            <div className="text-center">
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">University Hospital</p>
            </div>
            <div className="text-center">
              <Building2 className="h-16 w-16 mx-auto mb-2 text-muted-foreground" />
              <p className="font-semibold">Specialty Care Center</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('clients')}>
              See Our Client Stories
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Shareholders Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Investor Relations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mediliance continues to deliver strong financial performance 
                and sustainable growth for our shareholders through strategic 
                market expansion and operational excellence in the healthcare sector.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-background p-4 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <p className="font-semibold">Revenue Growth</p>
                  <p className="text-2xl font-bold text-primary">+23%</p>
                  <p className="text-sm text-muted-foreground">Year over year</p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <Building2 className="h-8 w-8 text-primary mb-2" />
                  <p className="font-semibold">Market Presence</p>
                  <p className="text-2xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Countries served</p>
                </div>
              </div>
              <Button className="sm:text-base text-sm px-4 sm:px-6" onClick={() => onNavigate('shareholders')}>
                View Investor Information
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Business growth charts and analytics"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}