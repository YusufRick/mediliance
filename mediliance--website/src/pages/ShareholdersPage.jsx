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

export function ShareholdersPage() {
  const [currentShareholder, setCurrentShareholder] = useState(0);

  const keyMetrics = [
    { metric: "Market Presence", value: "15 Countries", description: "Global reach across key healthcare markets" },
    { metric: "Client Base", value: "500+ Facilities", description: "Diverse healthcare organizations served" },
    { metric: "Employee Count", value: "2,800+", description: "Dedicated professionals worldwide" },
    { metric: "Service Offerings", value: "3 Core Services", description: "Equipment, Engineering, and Project Management" }
  ];

  const reports = [
    {
      title: "Annual Report 2024",
      description: "Comprehensive overview of financial performance and strategic initiatives",
      date: "March 2024",
      type: "PDF"
    },
    {
      title: "Q4 2024 Earnings Report",
      description: "Quarterly financial results and management discussion",
      date: "February 2024",
      type: "PDF"
    },
    {
      title: "ESG Report 2024",
      description: "Environmental, Social, and Governance initiatives and progress",
      date: "April 2024",
      type: "PDF"
    },
    {
      title: "Investor Presentation",
      description: "Strategic overview and growth opportunities presentation",
      date: "January 2024",
      type: "PDF"
    }
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
      name: "HealthTech Capital Partners",
      percentage: "34.2%",
      type: "Institutional Investor",
      description: "Leading healthcare investment firm focused on medical technology companies",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      details: "HealthTech Capital Partners has been our primary institutional investor since 2010, providing strategic guidance and capital for expansion into emerging markets."
    },
    {
      name: "Global Medical Holdings",
      percentage: "28.7%",
      type: "Strategic Investor",
      description: "International medical equipment and services conglomerate",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      details: "Global Medical Holdings brings valuable industry expertise and international market access, supporting our global expansion strategy and service enhancement initiatives."
    },
    {
      name: "Founders & Management",
      percentage: "15.6%",
      type: "Management Ownership",
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
      setCurrentShareholder((prev) => (prev + 1) % shareholders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shareholders.length]);

  const nextShareholder = () => {
    setCurrentShareholder((prev) => (prev + 1) % shareholders.length);
  };

  const prevShareholder = () => {
    setCurrentShareholder((prev) => (prev - 1 + shareholders.length) % shareholders.length);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Investor Relations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mediliance delivers consistent growth and value creation for shareholders 
            through strategic market expansion, operational excellence, and commitment 
            to comprehensive healthcare technology solutions.
          </p>
        </div>

        {/* Principles Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Investment Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our strategic decisions and ensure sustainable 
              value creation for all stakeholders in the healthcare ecosystem.
            </p>
          </div>
          <div className="space-y-12">
            {principles.map((principle, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-20">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Key Business Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-2">{metric.metric}</div>
                  <div className="text-muted-foreground text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shareholders Slideshow */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Shareholders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mediliance is backed by leading healthcare investors and strategic partners 
              who share our vision for advancing medical technology solutions.
            </p>
          </div>
          
          <div className="relative">
            <Card className="p-8 min-h-[500px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch h-full">
                <div className="flex flex-col">
                  <ImageWithFallback
                    src={shareholders[currentShareholder].image}
                    alt={shareholders[currentShareholder].name}
                    className="rounded-lg shadow-lg w-full h-full min-h-[350px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {shareholders[currentShareholder].percentage}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {shareholders[currentShareholder].type}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {shareholders[currentShareholder].name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {shareholders[currentShareholder].description}
                  </p>
                  <p className="text-muted-foreground">
                    {shareholders[currentShareholder].details}
                  </p>
                </div>
              </div>
            </Card>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
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
                      index === currentShareholder 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => setCurrentShareholder(index)}
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
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Financial Reports &amp; Documents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our latest financial reports, SEC filings, and investor materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}