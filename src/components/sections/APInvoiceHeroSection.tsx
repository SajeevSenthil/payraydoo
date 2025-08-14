export function APInvoiceHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Purple gradient background - extends to include dashboard */}
      <div className="bg-gradient-to-br from-[rgb(128,76,195)] via-[rgb(141,175,253)] to-[rgb(79,61,134)] pt-20 pb-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-lg transform rotate-12"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-lg transform -rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-white/15 rounded-lg transform rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-8 h-8 bg-white rounded mr-3"></div>
              <span className="text-2xl font-bold text-white">Payraydoo</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">
              Best Tool In The Market For<br />
              Processing AP Invoices
            </h1>

            {/* CTA Button */}
            <button className="bg-white text-purple-800 font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors mb-16">
              Get In Touch!
            </button>
          </div>

          {/* Dashboard Preview - now inside the purple gradient */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-gray-800">
              {/* Top Navigation Tabs */}
              <div className="flex space-x-4 mb-6 text-sm">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-2">Admin</span>
                <span className="text-gray-500">Reports</span>
              </div>

              {/* Top Stats Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {/* Chart Section */}
                <div className="col-span-2">
                  <div className="text-sm text-gray-600 mb-2">Total Number of Invoices Each Month</div>
                  <div className="h-32 flex items-end justify-between space-x-1">
                    {[4,6,5,8,7,10,9,13,11,9,12,10].map((height, i) => (
                      <div key={i} className="w-4 bg-blue-400 rounded-t" style={{height: `${height * 8}px`}}></div>
                    ))}
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">27</div>
                    <div className="text-sm text-gray-600">Total Exceptions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">34</div>
                    <div className="text-sm text-gray-600">Total Exceptions</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Invoices by Status</div>
                    <div className="w-24 h-24 mx-auto relative">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeDasharray="60, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">62%</span>
                      </div>
                    </div>
                    <div className="text-xs text-center space-y-1">
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span>62%</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span>13%</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>23%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Stats Row */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">56</div>
                  <div className="text-sm text-gray-600">Invoices Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">56</div>
                  <div className="text-sm text-gray-600">Today&apos;s Invoices</div>
                  <div className="text-sm text-gray-600">Invoices Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">7</div>
                  <div className="text-sm text-gray-600">Invoice Exceptions</div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Total Number of invoices each month</div>
                  <div className="text-sm text-blue-600 mb-2">Admin</div>
                  <div className="h-16 flex items-end justify-between space-x-1">
                    {[30,45,35,60,50,75,65,85,70,60,80,65].map((height, i) => (
                      <div key={i} className="w-2 bg-blue-400 rounded-t" style={{height: `${height/2}px`}}></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-2">My Priorities</div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 text-xs font-medium text-gray-600">
                      <span>Task ID</span>
                      <span>Task Name</span>
                      <span>Priority</span>
                    </div>
                    <div className="grid grid-cols-3 text-xs items-center">
                      <span className="text-gray-800">9777789d</span>
                      <span className="text-gray-800">PO Number Missing</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs w-fit">High</span>
                    </div>
                    <div className="grid grid-cols-3 text-xs items-center">
                      <span className="text-gray-800">9777789e</span>
                      <span className="text-gray-800">Checking Email Sample</span>
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs w-fit">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
