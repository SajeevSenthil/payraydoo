export function APHeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large decorative squares */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-3xl transform rotate-12"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-white/5 rounded-2xl transform -rotate-6"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-xl transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="bg-white rounded-lg p-2 mr-3">
              <div className="w-8 h-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></div>
            </div>
            <span className="text-2xl font-bold">Payraydoo</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Best Tool In The Market For
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Processing AP Invoices
            </span>
          </h1>

          <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get In Touch!
          </button>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative">
          {/* Main Dashboard Container */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Dashboard Header Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Left Stats */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    </div>
                    <span className="text-gray-500 text-sm">Admin</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">27</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800">34</div>
                  <div className="text-gray-500 text-sm">Total Exceptions</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-600 rounded"></div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">Total Number of invoices each month</div>
                </div>
              </div>

              {/* Right Stats */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Invoices Processed</div>
                  <div className="text-4xl font-bold text-gray-800">56</div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Total Invoices</div>
                  <div className="text-4xl font-bold text-gray-800">68</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-500 mb-1">Today&apos;s Invoices</div>
                  <div className="text-sm text-gray-600 mb-1">Invoices Processed</div>
                  <div className="text-3xl font-bold text-gray-800">56</div>
                  <div className="text-sm text-gray-500 mt-2">Invoice Exceptions</div>
                  <div className="text-2xl font-bold text-red-500">7</div>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="h-32 flex items-end justify-between space-x-2">
                {[40, 60, 35, 80, 45, 70, 55, 90, 65, 85, 70, 95].map((height, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-t from-purple-400 to-purple-600 rounded-t"
                    style={{ height: `${height}%`, width: '20px' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl p-6 w-64 transform -rotate-2">
            <h3 className="font-bold text-gray-800 mb-4">Invoices by Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">62% Submitted</span>
                </div>
                <span className="text-sm font-semibold">62</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">13% Processing</span>
                </div>
                <span className="text-sm font-semibold">13</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">23% Approved</span>
                </div>
                <span className="text-sm font-semibold">23</span>
              </div>
            </div>
            
            {/* Donut Chart Representation */}
            <div className="mt-4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-gray-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-800">98</div>
                </div>
              </div>
            </div>
          </div>

          {/* Priority Tasks Card */}
          <div className="absolute -left-6 bottom-4 bg-white rounded-xl shadow-lg p-4 w-72">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-800">My Priorities</h4>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-gray-600">Task ID</span>
                <span className="font-medium text-gray-600">Task Name</span>
                <span className="font-medium text-gray-600">Priority</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-t">
                <span className="text-xs text-gray-600">97777B939</span>
                <span className="text-xs text-gray-600">PO Number Missing</span>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-t">
                <span className="text-xs text-gray-600">93777B940</span>
                <span className="text-xs text-gray-600">Checking Email Service</span>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
