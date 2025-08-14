export function PayraydooHero() {
  return (
    <section className="relative bg-gradient-to-b from-[rgb(79,61,134)] via-[rgb(128,76,195)] to-[rgb(87,162,255)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 lg:pt-48 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="text-white space-y-10 lg:pr-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              Finance
              <br />
              Automation
              <br />
              Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 max-w-lg font-light leading-relaxed">
              End to End AP & AR automation to save up to 60% of time and cost
            </p>
            
            <div className="pt-6">
              <button className="bg-white hover:bg-white/90 text-purple-700 font-medium py-3 px-8 rounded-full transition-all shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative flex justify-end lg:justify-end mt-12 lg:mt-0 lg:pl-8">
            {/* Tablet Dashboard UI - positioned behind and more to the right */}
            <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl w-full max-w-5xl lg:max-w-7xl overflow-hidden z-10 transform rotate-1 lg:translate-x-60 scale-y-75 border border-gray-200 hover:shadow-3xl transition-shadow duration-300">
              <div className="p-4 md:p-6 lg:p-8 xl:p-12">
                {/* Dashboard header with enhanced styling */}
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-gray-700">Payraydoo Dashboard</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-gray-500">Live</div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Enhanced Dashboard grid content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-2 md:p-3 lg:p-4 text-center border border-blue-200 hover:shadow-md transition-shadow duration-200">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-700">21</div>
                    <div className="text-xs md:text-sm text-blue-600 font-medium">Today&apos;s Invoices</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-2 md:p-3 lg:p-4 text-center border border-green-200 hover:shadow-md transition-shadow duration-200">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-700">56</div>
                    <div className="text-xs md:text-sm text-green-600 font-medium">Invoices Processed</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-2 md:p-3 lg:p-4 text-center border border-purple-200 hover:shadow-md transition-shadow duration-200">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-700">56</div>
                    <div className="text-xs md:text-sm text-purple-600 font-medium">Total Exceptions</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-2 md:p-3 lg:p-4 text-center border border-orange-200 hover:shadow-md transition-shadow duration-200">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-orange-700">68</div>
                    <div className="text-xs md:text-sm text-orange-600 font-medium">Invoice by Status</div>
                  </div>
                </div>

                {/* Enhanced Chart section */}
                <div className="mt-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 md:p-4 lg:p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs md:text-sm text-gray-600 font-semibold">Total Number of invoices each month</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">Live Data</span>
                    </div>
                  </div>
                  <div className="h-20 md:h-24 lg:h-28 flex items-end space-x-2 relative bg-white rounded-lg p-2">
                    {[35, 45, 30, 60, 40, 70, 50, 80, 60, 75, 55, 65].map((height, i) => (
                      <div 
                        key={i} 
                        className="bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t flex-1 shadow-sm hover:from-indigo-700 hover:to-indigo-500 transition-colors duration-200" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Task list */}
                <div className="mt-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-3 border border-gray-200">
                  <div className="flex justify-between items-center px-2 pb-2 border-b border-gray-200">
                    <div className="text-xs md:text-sm text-gray-700 font-bold">Task ID</div>
                    <div className="text-xs md:text-sm text-gray-700 font-bold">Task Name</div>
                  </div>
                  <div className="space-y-1 mt-2">
                    <div className="flex justify-between items-center px-2 py-2 hover:bg-white rounded-lg transition-colors duration-150">
                      <div className="text-xs md:text-sm text-gray-600 font-medium">1773668</div>
                      <div className="text-xs md:text-sm text-gray-600">Validate Invoice</div>
                    </div>
                    <div className="flex justify-between items-center px-2 py-2 hover:bg-white rounded-lg transition-colors duration-150">
                      <div className="text-xs md:text-sm text-gray-600 font-medium">1773667</div>
                      <div className="text-xs md:text-sm text-gray-600">Review Draft Invoice</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Payment Widget - positioned in front and more to the right */}
            <div className="absolute -left-4 md:-left-6 lg:left-4 bottom-16 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl w-44 md:w-56 border border-gray-200 overflow-hidden z-20 transform -rotate-3 lg:translate-x-12 hover:scale-105 transition-transform duration-300">
              <div className="p-4 space-y-3">
                {/* Status bar */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">15:42</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 border border-gray-400 rounded-sm">
                      <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                    </div>
                    <div className="text-xs">📶</div>
                  </div>
                </div>

                {/* Handle bar */}
                <div className="flex justify-center py-1">
                  <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                </div>
                
                {/* App Header */}
                <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Payraydoo</span>
                </div>
                
                {/* Invoice details with enhanced styling */}
                <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 p-3 text-center border border-amber-200">
                  <div className="text-xs font-medium text-amber-700 mb-1">Invoice ID-4165</div>
                  <div className="text-xl font-bold text-amber-900">€160.00</div>
                  <div className="w-8 h-1 bg-amber-400 rounded-full mx-auto mt-2"></div>
                </div>
                
                {/* Enhanced Email section */}
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-500 font-medium">E-Mail</div>
                  <div className="text-xs text-gray-700 font-medium truncate flex items-center">
                    <span className="mr-1">📧</span>
                    billing@payraydoo.de
                  </div>
                </div>
                
                {/* Enhanced Payment method */}
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-500 font-medium mb-1">Payment Method</div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-md w-6 h-4 flex items-center justify-center text-xs font-bold shadow-sm">
                      M
                    </div>
                    <div className="text-xs font-semibold text-gray-700">Mastercard ****</div>
                  </div>
                </div>
                
                {/* Enhanced Region */}
                <div className="bg-gray-50 rounded-lg p-2">
                  <div className="text-xs text-gray-500 font-medium">Land/Region</div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">🇩🇪</span>
                    <div className="text-xs font-semibold text-gray-700">Deutschland</div>
                  </div>
                </div>
                
                {/* Enhanced Pay button with gradient and animation */}
                <div className="bg-gradient-to-r from-gray-900 to-black text-white text-center py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:from-gray-800 hover:to-gray-900 active:scale-95">
                  <div className="flex items-center justify-center space-x-2">
                    <span>💳</span>
                    <span>€160.00 zahlen</span>
                  </div>
                </div>

                {/* Security indicator */}
                <div className="flex items-center justify-center space-x-1 pt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-500">Secure Payment</span>
                  <span className="text-xs">🔒</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
