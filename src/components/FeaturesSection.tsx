import { CheckCircle, Users, Zap, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Quality Assurance",
      description: "We ensure the highest quality standards in all our services and products."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Our team consists of experienced professionals dedicated to your success."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure & Reliable",
      description: "Your data and business are safe with our secure infrastructure."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide exceptional services that help your business grow and succeed
            in today&apos;s competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
