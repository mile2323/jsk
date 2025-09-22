import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";


import { 
  ArrowRight, 
  Building2, 
  Code, 
  Headphones, 
  Users, 
  GraduationCap, 
  FileText, 
  Shield, 
  Building, 
  ScanLine, 
  Printer, 
  Target, 
  Send, 
  CheckCircle, 
  Star, 
  Trophy, 
  Handshake 
} from "lucide-react";
import axios from "axios";

function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('franchise-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
              <Building2 className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlock Your
            <span className="block text-blue-300"> Business Potential</span>
            with Our Franchise
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join a proven business model with comprehensive support across IT, Business Services, and Enterprise Solutions. 
            Start your entrepreneurial journey today.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-200">10+</div>
              <div className="text-white/80">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-200">500+</div>
              <div className="text-white/80">Happy Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-200">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              onClick={scrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white group"
            >
              Start Your Franchise Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToServices}
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white"
            >
              Explore Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 text-white/70">
            <p className="text-sm mb-4">Trusted by entrepreneurs nationwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-white/20 rounded"></div>
              <div className="h-8 w-24 bg-white/20 rounded"></div>
              <div className="h-8 w-24 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-white/30 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-3 h-3 bg-blue-300/50 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
}

const services = [
  {
    icon: Code,
    title: "Software Development & IT Consulting",
    description: "Custom software solutions, web development, and comprehensive IT consulting services for modern businesses."
  },
  {
    icon: Headphones,
    title: "BPO & KPO Services",
    description: "Business Process Outsourcing and Knowledge Process Outsourcing solutions to streamline operations."
  },
  {
    icon: Users,
    title: "Placement Services",
    description: "Professional recruitment and placement services connecting talent with opportunities across industries."
  },
  {
    icon: GraduationCap,
    title: "Training, Education & Skill Development",
    description: "Comprehensive training programs and skill development courses for professional growth and certification."
  },
  {
    icon: FileText,
    title: "Jansuvidha Kendra Services, Aadhar Enrollment & E-Governance",
    description: "Government service facilitation including Aadhar enrollment, document services, and digital governance solutions."
  },
  {
    icon: Shield,
    title: "Client Verification & Background Check",
    description: "Thorough background verification services for employment, tenant screening, and business partnerships."
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "End-to-end enterprise software solutions, ERP systems, and business automation platforms."
  },
  {
    icon: ScanLine,
    title: "Document Digitization & Management",
    description: "Digital transformation services including document scanning, digitization, and electronic document management."
  },
  {
    icon: Printer,
    title: "Printing & Hardware Solutions",
    description: "Professional printing services, hardware supply, and technical support for business equipment."
  },
  {
    icon: Target,
    title: "Project Management, Tenders & ITES",
    description: "Project management services, tender documentation support, and IT-enabled services for businesses."
  }
];

function ServicesSection() {
  const handleKnowMore = (serviceName: string) => {
    console.log(`Know more about: ${serviceName}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Franchise <span className="text-blue-700">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse portfolio of business services. Each franchise opportunity comes with 
            comprehensive training, ongoing support, and a proven business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-blue-700 hover:bg-blue-50 transition-all"
                    onClick={() => handleKnowMore(service.title)}
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to explore franchise opportunities in multiple service categories?
          </p>
          <Button 
            variant="default" 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              const formSection = document.getElementById('franchise-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const franchiseServices = [
  "Software Development & IT Consulting",
  "BPO & KPO Services", 
  "Placement Services",
  "Training, Education & Skill Development",
  "Jansuvidha Kendra Services, Aadhar Enrollment & E-Governance",
  "Client Verification & Background Check",
  "Enterprise Solutions",
  "Document Digitization & Management", 
  "Printing & Hardware Solutions",
  "Project Management, Tenders & ITES"
];

interface FormData {
  services: string[];
  name: string;
  mobile: string;
  email: string;
  companyName: string;
  address: string;
  message: string;
}

function FranchiseForm() {
  const [formData, setFormData] = useState<FormData>({
    services: [],
    name: "",
    mobile: "",
    email: "",
    companyName: "",
    address: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.mobile || !formData.email || formData.services.length === 0) {
      toast.error("Please fill in all required fields", {
        description: "Name, mobile, email, and at least one service selection are required.",
      });

      try {
        axios.post(`${import.meta.env.VITE_API_URL}/view/franchise-inquiry/`, formData);
      }
      catch (error) {
        console.error("Error submitting franchise inquiry:", error);
      }
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success("Franchise Inquiry Submitted Successfully!", {
      description: "Our team will contact you within 24 hours to discuss your franchise opportunity.",
    });

    setFormData({
      services: [],
      name: "",
      mobile: "",
      email: "",
      companyName: "",
      address: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  return (
    <section id="franchise-form" className="py-20 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start Your <span className="text-blue-300">Franchise Journey</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fill out the form below and our franchise team will get in touch with you 
              to discuss opportunities and support options.
            </p>
          </div>

          <Card className="bg-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-blue-900 flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Franchise Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-blue-900">
                    Select Franchise Services You're Interested In *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {franchiseServices.map((service) => (
                      <div key={service} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          className="mt-1"
                        />
                        <Label htmlFor={service} className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-900 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-blue-700"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-blue-900 font-medium">
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      placeholder="+91 9876543210"
                      className="border-gray-300 focus:border-blue-700"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-900 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-blue-700"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-blue-900 font-medium">
                      Company/Shop Name
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Your business name (optional)"
                      className="border-gray-300 focus:border-blue-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-blue-900 font-medium">
                    Address
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Your business address"
                    className="border-gray-300 focus:border-blue-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-900 font-medium">
                    Description/Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your business goals, experience, or any questions you have about our franchise opportunities..."
                    className="border-gray-300 focus:border-blue-700 min-h-[120px]"
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Franchise Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="text-center text-sm text-gray-500 border-t pt-6">
                <p>
                  By submitting this form, you agree to be contacted by our franchise team. 
                  We respect your privacy and will not share your information with third parties.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const scrollToForm = () => {
    const formSection = document.getElementById('franchise-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-300/30 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Become a Franchise Partner
            <span className="block text-blue-300"> Today!</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful entrepreneurs who have transformed their lives 
            with our proven franchise model. Your success story starts here.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Star className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-200">Proven Success</h3>
              <p className="text-white/80 text-sm">95% partner satisfaction rate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-200">Expert Support</h3>
              <p className="text-white/80 text-sm">Dedicated support team</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-200">Market Leader</h3>
              <p className="text-white/80 text-sm">Industry recognition</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Handshake className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-200">Partnership</h3>
              <p className="text-white/80 text-sm">Long-term commitment</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-blue-200">Why Choose Our Franchise?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Comprehensive Training</h4>
                <p className="text-white/80 text-sm">
                  Complete business training program with ongoing education and certification support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Marketing Support</h4>
                <p className="text-white/80 text-sm">
                  Professional marketing materials, digital campaigns, and brand recognition support.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Scalable Business</h4>
                <p className="text-white/80 text-sm">
                  Multiple revenue streams and growth opportunities across diverse service sectors.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              variant="default" 
              size="lg" 
              onClick={scrollToForm}
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-12 py-4 group shadow-2xl hover:shadow-blue-300/25"
            >
              Start Your Franchise Journey Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-white/70 text-sm">
              No franchise fees for the first 100 partners. Limited time offer!
            </p>
          </div>

          {/* Trust Elements */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-sm">ISO Certified Business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-sm">Government Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="text-sm">Award Winning Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Franchise() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FranchiseForm />
      <CallToAction />
    </>
  );
}