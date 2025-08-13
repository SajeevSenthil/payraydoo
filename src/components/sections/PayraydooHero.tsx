export function PayraydooHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#4E2A84] via-[#5D3A9C] to-[#7E57C2] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 lg:pt-48 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              Finance
              <br />
              Automation
              <br />
              PLatform
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 max-w-lg font-light">
              End to End AP & AR automation to save up to 60% of time and cost
            </p>
            
            <div className="pt-4">
              <button className="bg-white hover:bg-white/90 text-purple-700 font-medium py-3 px-8 rounded-full transition-all shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Tablet Dashboard UI - positioned behind */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl lg:max-w-2xl overflow-hidden z-10 transform rotate-1">
              <div className="p-4 md:p-6">
                {/* Dashboard header with tabs */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Dashboard grid content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <div className="text-xl md:text-2xl font-bold">21</div>
                    <div className="text-xs text-gray-500">Today&apos;s Invoices</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <div className="text-xl md:text-2xl font-bold">56</div>
                    <div className="text-xs text-gray-500">Invoices Processed</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <div className="text-xl md:text-2xl font-bold text-indigo-600">56</div>
                    <div className="text-xs text-gray-500">Total Exceptions</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3 text-center">
                    <div className="text-xl md:text-2xl font-bold">68</div>
                    <div className="text-xs text-gray-500">Invoice by Status</div>
                  </div>
                </div>

                {/* Chart section */}
                <div className="mt-4 bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-xs text-gray-500 mb-1">Total Number of invoices each month</div>
                  <div className="h-24 md:h-28 flex items-end space-x-1">
                    {[35, 45, 30, 60, 40, 70, 50, 80, 60, 75, 55, 65].map((height, i) => (
                      <div 
                        key={i} 
                        className="bg-indigo-500 rounded-t flex-1" 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Task list */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-600">Task ID</div>
                    <div className="text-xs text-gray-600">Task Name</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-600">1773668</div>
                    <div className="text-xs text-gray-600">Validate Invoice</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-600">1773667</div>
                    <div className="text-xs text-gray-600">Review Draft Invoice</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Payment Widget - positioned in front */}
            <div className="absolute -left-10 md:-left-16 lg:-left-24 bottom-16 bg-white rounded-xl shadow-2xl w-40 md:w-56 border-4 border-white overflow-hidden z-20 transform -rotate-3">
              <div className="p-3 space-y-2">
                {/* Handle bar */}
                <div className="flex justify-center">
                  <div className="w-10 h-1 bg-gray-200 rounded-full"></div>
                </div>
                
                {/* Invoice details */}
                <div className="rounded-lg bg-amber-50 p-2 text-center">
                  <div className="text-xs font-medium">Invoice ID-4165</div>
                  <div className="text-lg font-bold mt-1">€160.00</div>
                </div>
                
                {/* Email */}
                <div>
                  <div className="text-xs text-gray-500">E-Mail</div>
                  <div className="text-xs text-gray-700 truncate">billing@payraydoo.de</div>
                </div>
                
                {/* Payment method */}
                <div>
                  <div className="text-xs text-gray-500">Paymentmethod</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="bg-red-600 text-white rounded w-5 h-5 flex items-center justify-center text-xs">M</div>
                    <div className="text-xs font-medium">Master</div>
                  </div>
                </div>
                
                {/* Region */}
                <div>
                  <div className="text-xs text-gray-500">Land/Region</div>
                  <div className="flex items-center mt-1">
                    <div className="text-xs font-medium">Deutschland</div>
                  </div>
                </div>
                
                {/* Pay button */}
                <div className="bg-black text-white text-center py-2 rounded text-xs font-medium mt-1">
                  €160.00 zahlen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
