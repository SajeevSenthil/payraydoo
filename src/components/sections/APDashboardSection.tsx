export function APDashboardSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
              Streamline Your
            </span>{' '}
            AP Invoice Processing
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Experience the power of automated invoice processing with real-time tracking, 
            comprehensive analytics, and seamless workflow management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
            <p className="text-gray-600">
              Monitor invoice processing in real-time with instant status updates and notifications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Analytics</h3>
            <p className="text-gray-600">
              Get comprehensive insights into your AP processes with detailed analytics and reporting.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Exception Management</h3>
            <p className="text-gray-600">
              Efficiently handle exceptions with automated routing and priority-based task management.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Finance Operations
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join thousands of companies that have revolutionized their accounts payable processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">95%</div>
              <div className="text-gray-800 font-semibold mb-2">Error Reduction</div>
              <div className="text-gray-600 text-sm">
                Eliminate manual errors with automated validation and processing
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">11x</div>
              <div className="text-gray-800 font-semibold mb-2">Faster Processing</div>
              <div className="text-gray-600 text-sm">
                Process invoices 11 times faster than traditional manual methods
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">60%</div>
              <div className="text-gray-800 font-semibold mb-2">Cost Savings</div>
              <div className="text-gray-600 text-sm">
                Reduce operational costs while improving accuracy and efficiency
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              See how Payraydoo can transform your AP invoice processing workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
