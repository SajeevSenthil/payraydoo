import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-purple-600 font-semibold">How Payraydoo Works</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Smarter Workflows. Tangible Results.
            </h2>
            
            <p className="text-gray-600 text-lg">
              From invoice capture to reconciliation, Payraydoo transforms complex AP & AR processes into automated, accurate, and scalable flows — with zero guesswork.
            </p>
          </div>

          {/* Right Content - Woman with Laptop */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/logo.jpg" 
                alt="Professional woman smiling while using laptop"
                width={500}
                height={400}
                className="w-full h-96 object-cover bg-gradient-to-br from-purple-100 to-cyan-100"
              />
              
              {/* Overlay content to represent the image */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 flex items-center justify-center">
                <div className="text-center text-purple-800">
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👩‍💼</span>
                  </div>
                  <p className="font-semibold">Professional Finance Team</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500 rounded-lg opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Core Capabilities - Listed Below in Side-by-Side Layout */}
        <div className="mt-16">
          <h3 className="font-semibold text-gray-900 text-center text-2xl mb-10">Core Features</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">📄</span>
                </div>
                <h4 className="font-semibold text-gray-900">Capture & Validate</h4>
              </div>
              <p className="text-gray-600">Extract invoice data automatically from any invoice source and perform 2- or 3-way matching to eliminate manual errors.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900">Automate & Act</h4>
              </div>
              <p className="text-gray-600">Seamlessly route invoices for approval to collections — with smart routing, defining schedules, and dispute resolution.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600">📊</span>
                </div>
                <h4 className="font-semibold text-gray-900">Sync & Track</h4>
              </div>
              <p className="text-gray-600">Get real-time insights through interactive dashboards and seamless ERP integrations like SAP, QuickBooks, and more.</p>
            </div>
          </div>
          
          {/* User Profile */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex items-center p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 mr-4 flex-shrink-0">
                  <Image 
                    src="/assets/logo.jpg" 
                    alt="User Profile" 
                    width={64}
                    height={64}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Finance Director at TechCorp</p>
                  <p className="text-purple-600 text-xs mt-1">&ldquo;Payraydoo reduced our invoice processing time by 78%&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
