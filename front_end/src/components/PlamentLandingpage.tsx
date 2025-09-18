import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, TrendingUp, Award, ArrowRight, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Career Opportunities",
      description: "Access to top companies and exciting career prospects in your field."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Network",
      description: "Connect with industry professionals and build valuable relationships."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Skill Development",
      description: "Continuous learning opportunities to enhance your professional skills."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Programs",
      description: "Industry-recognized certifications to boost your career profile."
    }
  ];

  const benefits = [
    "Free registration and profile creation",
    "Direct connection with hiring managers",
    "Interview preparation and guidance",
    "Resume optimization services",
    "24/7 support throughout the process"
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="border-b bg-[#2A2A2A]/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold">Milestone Placement Services</h1>
          </div>
          <Button
            onClick={() => navigate('/register')}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Register Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Launch Your Dream Career with{' '}
            <span className="text-blue-500">Milestone Placement Services</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with top employers, access exclusive opportunities, and take the next step in your professional journey with our comprehensive placement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900/20 to-[#1A1A1A] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Milestone Placement Services?</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our comprehensive placement services are designed to help you succeed in today's competitive job market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border-gray-700 bg-[#2A2A2A]/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 shadow-lg shadow-blue-500/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Everything You Need to Succeed</h3>
              <p className="text-lg text-gray-400 mb-8">
                From registration to placement, we provide comprehensive support throughout your job search journey.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/30 shadow-xl shadow-blue-500/10 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-blue-500">Ready to Start?</CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Join thousands of successful professionals who found their dream jobs through Milestone Placement Services.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  onClick={() => navigate('/register')}
                  className="w-full bg-blue-500 text-white hover:bg-blue-600 text-lg py-3"
                >
                  Register for Placement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Free registration • No hidden fees • Quick setup
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default LandingPage;