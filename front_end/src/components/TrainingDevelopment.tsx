import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Computer,
  Calculator,
  Keyboard,
  Headphones,
  Scissors,
  Shirt,
  Users,
  GraduationCap,
  FileText,
  BookOpen,
  IndianRupee,
  Award,
  Shield,
  Building,
  CheckCircle,
  Target,
  PartyPopper,
  Trophy,
  UserCheck,
  Briefcase,
  Laptop,
  Snowflake,
  Heart,
  Gift
} from "lucide-react";
import heroImage from "@/assets/hero-institute.jpg"; // Replace with actual hero image

interface Course {
  title: string;
  description: string;
  duration: string;
  fee: string;
  certification: string;
  icon: JSX.Element;
  isPopular?: boolean;
}

interface FeeStructure {
  course: string;
  duration: string;
  totalFee: string;
  formFilling: string;
  month1: string;
  month2?: string;
  month3?: string;
  isPopular?: boolean;
}

interface Certification {
  name: string;
  type: string;
  icon: JSX.Element;
  verified: boolean;
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const coursesData: Course[] = [
  {
    title: "DCA → PGDCA",
    description: "Complete computer application course with diploma certification. Foundation to advanced computer skills with NSIC certification.",
    duration: "1 year",
    fee: "6,500",
    certification: "NSIC Certificate",
    icon: <Computer className="w-8 h-8 text-indigo-400" />,
    isPopular: true
  },
  {
    title: "Tally with GST",
    description: "Comprehensive accounting software training with GST compliance. Essential for finance and accounting careers.",
    duration: "3 months",
    fee: "6,500",
    certification: "Milestone Certificate",
    icon: <Calculator className="w-8 h-8 text-indigo-400" />,
    isPopular: true
  },
  {
    title: "CCC / Basic Computer",
    description: "Certificate course in computer concepts. Essential computer literacy program covering fundamentals to advanced applications.",
    duration: "3 months",
    fee: "2,500",
    certification: "NIELIT Certificate",
    icon: <Computer className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "PGDCA (University Course)",
    description: "Post Graduate Diploma in Computer Applications from CV Raman University. Advanced degree program with placement support.",
    duration: "1 year",
    fee: "18,500",
    certification: "CV Raman University",
    icon: <GraduationCap className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Data Entry Operator",
    description: "Professional data entry skills with accuracy and speed training. High-demand skill for various industries.",
    duration: "2 months",
    fee: "3,500",
    certification: "Milestone Certificate",
    icon: <Keyboard className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "BPO (Voice / Non-Voice)",
    description: "Business Process Outsourcing training for voice and non-voice processes. Communication skills and customer service training.",
    duration: "3 months",
    fee: "5,000",
    certification: "Industry Certificate",
    icon: <Headphones className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Parlour Course",
    description: "Professional beauty and wellness training. Complete beautician course with hands-on practical training.",
    duration: "6 months",
    fee: "8,500",
    certification: "Beauty Council Certificate",
    icon: <Scissors className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Sewing Machine Operator",
    description: "Industrial sewing and tailoring skills. From basic stitching to advanced garment construction techniques.",
    duration: "4 months",
    fee: "4,500",
    certification: "Skill Council Certificate",
    icon: <Shirt className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Personality Development",
    description: "Soft skills, communication, and personality enhancement program. Public speaking and professional etiquette training.",
    duration: "2 months",
    fee: "3,000",
    certification: "Milestone Certificate",
    icon: <Users className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Master Training",
    description: "Advanced training programs for working professionals. Specialized courses for career advancement.",
    duration: "Variable",
    fee: "Contact",
    certification: "Professional Certificate",
    icon: <BookOpen className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Typing (Hindi / English)",
    description: "Professional typing skills in Hindi and English. Speed and accuracy development for clerical jobs.",
    duration: "1 month",
    fee: "500",
    certification: "Typing Certificate",
    icon: <Keyboard className="w-8 h-8 text-indigo-400" />
  }
];

const feeData: FeeStructure[] = [
  {
    course: "CCC / Basic Computer",
    duration: "3 months",
    totalFee: "2,500",
    formFilling: "500",
    month1: "1,000",
    month2: "1,000"
  },
  {
    course: "Tally with GST",
    duration: "3 months",
    totalFee: "6,500",
    formFilling: "500",
    month1: "3,000",
    month2: "2,000",
    month3: "1,000",
    isPopular: true
  },
  {
    course: "DCA (NSIC certificate)",
    duration: "1 year",
    totalFee: "6,500",
    formFilling: "500",
    month1: "2,000",
    month2: "2,000",
    month3: "2,000"
  },
  {
    course: "PGDCA (University Course)",
    duration: "1 year",
    totalFee: "18,500",
    formFilling: "500",
    month1: "6,000",
    month2: "6,000",
    month3: "6,000"
  },
  {
    course: "Hindi or English Typing",
    duration: "1 month",
    totalFee: "500",
    formFilling: "500",
    month1: ""
  }
];

const certifications: Certification[] = [
  {
    name: "CV Raman University",
    type: "University Courses / PGDCA",
    icon: <GraduationCap className="w-8 h-8 text-indigo-400" />,
    verified: true
  },
  {
    name: "NIELIT",
    type: "National Institute of Electronics & Information Technology",
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    verified: true
  },
  {
    name: "NSIC",
    type: "National Small Industries Corporation Ltd.",
    icon: <Building className="w-8 h-8 text-indigo-400" />,
    verified: true
  },
  {
    name: "NSDC / ESSDM",
    type: "National Skill Development Corporation",
    icon: <Award className="w-8 h-8 text-indigo-400" />,
    verified: true
  },
  {
    name: "CSSDA",
    type: "Chhattisgarh State Skill Development Authority",
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    verified: true
  }
];

const benefits: Benefit[] = [
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
    title: "Soft-skill Programs",
    description: "Comprehensive personality development and communication skills training"
  },
  {
    icon: <Target className="w-6 h-6 text-indigo-400" />,
    title: "Career-guiding Sessions",
    description: "Professional guidance to help you choose the right career path"
  },
  {
    icon: <PartyPopper className="w-6 h-6 text-indigo-400" />,
    title: "Festive Celebrations",
    description: "Cultural events and festival celebrations to build community"
  },
  {
    icon: <Trophy className="w-6 h-6 text-indigo-400" />,
    title: "Competitions",
    description: "Regular skill competitions and contests to enhance learning"
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    title: "Interactive Training",
    description: "Well-structured interactive training methods for better learning"
  },
  {
    icon: <UserCheck className="w-6 h-6 text-indigo-400" />,
    title: "Experienced Faculty",
    description: "Learn from industry experts with years of practical experience"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
    title: "Placement Assistance",
    description: "100% placement support and job assistance for all students"
  },
  {
    icon: <Laptop className="w-6 h-6 text-indigo-400" />,
    title: "Hands-on Training",
    description: "Practical training with real-world projects and applications"
  },
  {
    icon: <Snowflake className="w-6 h-6 text-indigo-400" />,
    title: "AC Classrooms",
    description: "Comfortable air-conditioned learning environment"
  },
  {
    icon: <IndianRupee className="w-6 h-6 text-indigo-400" />,
    title: "Affordable Fees",
    description: "Student-friendly fee structure with flexible payment options"
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-400" />,
    title: "Student-friendly Teachers",
    description: "Supportive faculty focused on individual student success"
  },
  {
    icon: <Gift className="w-6 h-6 text-emerald-400" />,
    title: "Free Course Offers",
    description: "Special free computer courses available (Terms & Conditions apply)"
  }
];

const galleryImages: GalleryImage[] = [
  { src: "/placeholder.svg", alt: "Computer lab with students learning", title: "Modern Computer Lab" },
  { src: "/placeholder.svg", alt: "Students in classroom during training", title: "Interactive Training Session" },
  { src: "/placeholder.svg", alt: "Certificate distribution ceremony", title: "Certificate Distribution" },
  { src: "/placeholder.svg", alt: "Faculty teaching students", title: "Experienced Faculty" },
  { src: "/placeholder.svg", alt: "Students working on practical projects", title: "Hands-on Training" },
  { src: "/placeholder.svg", alt: "Campus facilities and environment", title: "Campus Environment" }
];

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  fee: string;
  certification: string;
  icon: JSX.Element;
  isPopular?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, duration, fee, certification, icon, isPopular }) => {
  return (
    <Card className={`relative group hover:shadow-lg transition duration-300 ${isPopular ? 'ring-2 ring-emerald-600' : ''}`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-6 bg-emerald-600 text-white border-0">
          Most Popular
        </Badge>
      )}
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-900/10 rounded-lg group-hover:bg-indigo-900/20 transition duration-300">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1 text-gray-100">{title}</h3>
            <p className="text-sm text-gray-400 mb-3">{description}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="font-medium text-gray-300">Duration:</span> {duration}</div>
              <div><span className="font-medium text-gray-300">Fee:</span> ₹{fee}</div>
              <div className="col-span-2"><span className="font-medium text-gray-300">Certification:</span> {certification}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TrainingDevelopment = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-900 to-indigo-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-indigo-900/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Milestone Skill Training Institute
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
                Practical skill training, certification, placement assistance, and student-friendly fees. 
                Hands-on courses for computer skills, trade skills, and personality development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white/20"
              >
                Enroll Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white/20"
              >
                Request Brochure
              </Button>
              <Button 
                variant="default" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 h-auto bg-emerald-600 hover:bg-emerald-700"
              >
                Book Free Trial
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-indigo-900/20 backdrop-blur-sm rounded-lg p-6 border border-indigo-800/20">
                <div className="text-2xl font-bold mb-2 text-indigo-400">15+</div>
                <div className="text-sm opacity-90">Skill Courses</div>
              </div>
              <div className="bg-indigo-900/20 backdrop-blur-sm rounded-lg p-6 border border-indigo-800/20">
                <div className="text-2xl font-bold mb-2 text-indigo-400">100%</div>
                <div className="text-sm opacity-90">Placement Support</div>
              </div>
              <div className="bg-indigo-900/20 backdrop-blur-sm rounded-lg p-6 border border-indigo-800/20">
                <div className="text-2xl font-bold mb-2 text-indigo-400">₹500</div>
                <div className="text-sm opacity-90">Starting Fee</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Our Course Offerings
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of skill development courses designed to meet industry demands and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                fee={course.fee}
                certification={course.certification}
                icon={course.icon}
                isPopular={course.isPopular}
              />
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-900/20 to-indigo-900/40 p-8 rounded-lg border border-indigo-800">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-indigo-400">
                <FileText className="w-6 h-6" />
                Certification Programs
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Government recognized certifications</li>
                <li>• Industry-valid credentials</li>
                <li>• International recognition</li>
                <li>• Lifetime validity</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-900/40 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-emerald-400">
                <Users className="w-6 h-6" />
                Skill Development
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Hands-on practical training</li>
                <li>• Real-world project experience</li>
                <li>• Industry expert mentorship</li>
                <li>• Job-ready skill development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Table Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Installment & Fee Pattern
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Student-friendly payment structure with easy installments
            </p>
          </div>

          <div className="space-y-4">
            {feeData.map((course, index) => (
              <Card key={index} className={`relative transition duration-300 hover:shadow-lg ${course.isPopular ? 'ring-2 ring-emerald-600' : ''}`}>
                {course.isPopular && (
                  <Badge className="absolute -top-3 left-6 bg-emerald-600 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="md:col-span-2">
                      <h3 className="font-semibold text-lg mb-1 text-gray-100">{course.course}</h3>
                      <p className="text-sm text-gray-400">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 font-bold text-lg text-indigo-400">
                        <IndianRupee className="w-5 h-5" />
                        <span>{course.totalFee}</span>
                      </div>
                      <p className="text-xs text-gray-500">Total Fee</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="outline" className="text-xs text-gray-400">
                        Form: ₹{course.formFilling}
                      </Badge>
                      {course.month1 && (
                        <Badge variant="outline" className="text-xs text-gray-400">
                          1st: ₹{course.month1}
                        </Badge>
                      )}
                      {course.month2 && (
                        <Badge variant="outline" className="text-xs text-gray-400">
                          2nd: ₹{course.month2}
                        </Badge>
                      )}
                      {course.month3 && (
                        <Badge variant="outline" className="text-xs text-gray-400">
                          3rd: ₹{course.month3}
                        </Badge>
                      )}
                    </div>
                    <div className="text-center md:text-right">
                      <Button 
                        size="sm" 
                        onClick={scrollToContact}
                        className="w-full md:w-auto bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-900/20 to-indigo-900/40 border border-emerald-800/20">
              <CardHeader>
                <CardTitle className="text-emerald-400">Special Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><strong>Free computer course</strong> (Terms & Conditions apply)</p>
                  <p><strong>Free education scheme for ST/SC</strong> - NIELIT certification: only exam fee required</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 to-indigo-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Certifications & Affiliations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Accredited by top national institutions for quality education and recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-indigo-900/20 rounded-full group-hover:bg-indigo-900/40 transition duration-300">
                      {cert.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-bold text-lg text-gray-100">{cert.name}</h3>
                      {cert.verified && (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {cert.type}
                    </p>
                    <Badge variant="outline" className="mt-3 text-gray-400">
                      Authorized Center
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-emerald-900/20 border-emerald-800/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">100% Genuine Certifications</h3>
                </div>
                <p className="text-gray-400 max-w-3xl mx-auto">
                  All our courses are affiliated with government-recognized institutions. 
                  Your certificates will be valid nationwide and internationally recognized for employment and further education.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">5+</div>
                    <div className="text-sm text-gray-400">Affiliations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">1000+</div>
                    <div className="text-sm text-gray-400">Certified Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">95%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">10+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Why Choose Milestone Skill Training Institute?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the comprehensive benefits and unique features that make us the preferred choice for skill development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition duration-300 border-l-4 border-l-indigo-900/20 hover:border-l-indigo-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-900/20 rounded-lg group-hover:bg-indigo-900/40 transition duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-indigo-900/20 to-indigo-900/40 border-0 text-indigo-400 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="p-8 relative">
                <Gift className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Free Computer Course</h3>
                <p className="text-sm text-gray-400">
                  Special offer available for eligible students. Contact us for terms and conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-emerald-900/20 border-emerald-800/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-900/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="p-8 relative">
                <Heart className="w-12 h-12 mb-4 text-emerald-400" />
                <h3 className="text-xl font-bold mb-2 text-emerald-400">ST/SC Free Education Scheme</h3>
                <p className="text-sm text-gray-400">
                  NIELIT certification available for ST/SC students - only exam fee required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
              Campus & Training Gallery
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take a look at our state-of-the-art facilities, training environment, and student activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingDevelopment;