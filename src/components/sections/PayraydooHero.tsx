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
            {/* Dashboard Image */}
            <div className="relative z-10 transform rotate-1 lg:translate-x-60 scale-y-75">
              <img 
                src="/assets/data.jpg" 
                alt="Payraydoo Dashboard - Total Number of Invoices Each Month" 
                className="w-full max-w-5xl lg:max-w-7xl rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl transition-shadow duration-300 object-cover"
              />
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
