import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, FileText, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 to-purple-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Streamline Your Business
            <span className="text-orange-400"> Financial Records</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            We provide comprehensive services to help businesses maintain their service transactions, 
            manage charges, keep accurate records, and track profits with precision and ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-950">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Record Management</h3>
              <p className="text-gray-100">Keep track of all transactions and service records</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Charge Tracking</h3>
              <p className="text-gray-100">Monitor and manage all service charges efficiently</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Profit Analysis</h3>
              <p className="text-gray-100">Track profits and analyze business performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;