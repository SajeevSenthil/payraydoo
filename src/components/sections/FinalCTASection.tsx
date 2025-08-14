export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-400 rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready To Spend Less On Invoice Processing?
            </h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Reduce errors, free up your team for strategic work and gain valuable insights.
            </p>
            <button className="bg-purple-800 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-purple-900 transition-colors">
              Find Out How
            </button>
          </div>
          
          {/* Dashboard Preview - positioned to show from bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-[600px] h-80 bg-white rounded-t-2xl shadow-2xl p-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">27</div>
                <div className="text-xs text-gray-600">Invoices in Queue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">56</div>
                <div className="text-xs text-gray-600">Invoices Processed</div>
                <div className="text-2xl font-bold text-blue-600">56</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Today&apos;s Invoices</div>
                <div className="text-sm text-gray-600">Invoices Processed</div>
                <div className="text-2xl font-bold text-blue-600">56</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Invoices by Status</div>
                <div className="w-16 h-16 mx-auto">
                  {/* Pie chart representation */}
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative">
                    <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">34</div>
                <div className="text-xs text-gray-600">Total Exceptions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">68</div>
                <div className="text-xs text-gray-600">Total Invoices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">7</div>
                <div className="text-xs text-gray-600">Invoice Exceptions</div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-2">Total Number of Invoices each month</div>
                <div className="h-20 flex items-end justify-between space-x-1">
                  {[3,5,4,7,6,9,8,12,10,8,11,9].map((height, i) => (
                    <div key={i} className={`w-3 bg-blue-400 rounded-t`} style={{height: `${height * 4}px`}}></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">My Priorities</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span>Task ID</span>
                    <span>Task Name</span>
                    <span>Priority</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">9777789d</span>
                    <span className="text-gray-600">PO Number Missing</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">9777789e</span>
                    <span className="text-gray-600">Checking Email Sample</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Medium</span>
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
