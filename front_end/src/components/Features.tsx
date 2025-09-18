import { Button } from "@/components/ui/button";
import { Check, Clock, Zap } from "lucide-react";

const Features = () => {
  const features = [
    "Automated profit calculations",
    "Comprehensive reporting tools",
    "Multi-business account support",
    "Secure data encryption",
    "24/7 customer support"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-950 mb-6">
              Why Choose E Records Book JSK?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand the challenges businesses face in managing financial records. 
              Our platform is designed to simplify complex processes and provide clear insights into your business performance.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-purple-950/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-purple-950" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-purple-950 hover:bg-purple-900">
              Start Your Free Trial
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-950/5 to-orange-400/5 rounded-lg">
              <div className="bg-purple-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-950" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>
            
            {/* <div className="text-center p-6 bg-gradient-to-br from-orange-400/5 to-purple-950/5 rounded-lg">
              <div className="bg-orange-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Businesses</p>
            </div> */}
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-950/5 to-purple-950/5 rounded-lg">
              <div className="bg-blue-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-950" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-950/5 to-blue-950/5 rounded-lg">
              <div className="bg-purple-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-purple-950" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">100%</h3>
              <p className="text-gray-600">Data Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;