import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, CreditCard,  PieChart, Receipt, Shield } from "lucide-react";

const Services = () => {
  const services = [
    // {
    //   icon: Database,
    //   title: "Transaction Management",
    //   description: "Comprehensive tracking and organization of all business transactions with detailed categorization and search capabilities."
    // },
    {
      icon: Receipt,
      title: "Service Record Keeping",
      description: "Maintain detailed records of all services provided, including timestamps, client information, and service details."
    },
    {
      icon: Calculator,
      title: "Charge Management",
      description: "Efficiently manage all service charges, pricing structures, and billing information with automated calculations."
    },
    {
      icon: PieChart,
      title: "Profit Tracking",
      description: "Real-time profit analysis with detailed breakdowns by service type, time period, and client segments."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Streamlined payment tracking and processing with multiple payment method support and reconciliation."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect your financial data with regular backups and encryption."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to help you manage your operations efficiently and maximize profitability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
              <CardHeader className="text-center">
                <div className="bg-purple-950/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-purple-950" />
                </div>
                <CardTitle className="text-xl text-blue-950">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;