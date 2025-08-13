export function PayraydooTestimonials() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <div className="text-purple-600 font-medium text-lg mb-2">Client Testimonials</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Customers Say !
            </h2>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-lg font-medium mb-6 text-gray-800">
              &ldquo;Cut our DSO from 60 to 30 days with seamless QuickBooks integration.&rdquo;
            </blockquote>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-700">AAA BBB</div>
                <div className="text-gray-500 text-sm">(CFO)</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-red-500">TECHCORP</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-lg font-medium mb-6 text-gray-800">
              &ldquo;Payraydoo&apos;s AP automation reduced our processing time by 80%.&rdquo;
            </blockquote>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-700">AAA BBB</div>
                <div className="text-gray-500 text-sm">(AP HEAD)</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-black">retailco</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section with Dashboard */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-8 lg:p-12 rounded-3xl text-white relative overflow-hidden h-[500px]">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready To Spend Less On Invoice Processing?</h3>
              <p className="text-lg opacity-90 mb-6">Reduce errors, free up your team for strategic work, and gain valuable insights.</p>
              <button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Find Out How
              </button>
            </div>
            
            {/* Overlaid Dashboard Components */}
            <div className="absolute inset-x-8 bottom-8 top-56">
              {/* Left Chart - positioned absolutely */}
              <div className="absolute left-0 top-0 w-80 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-600">Total Number of Invoices Each Month</h4>
                  <select className="text-xs text-blue-600 bg-transparent border-none">
                    <option>Admin</option>
                  </select>
                </div>
                <div className="h-28 flex items-end space-x-1">
                  {[10, 15, 18, 12, 20, 16, 14, 18, 22, 28, 32, 35].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-blue-400 rounded-t flex-1" 
                      style={{ height: `${height * 1.8}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN</span>
                  <span>JUL</span>
                  <span>AUG</span>
                  <span>SEP</span>
                  <span>OCT</span>
                  <span>NOV</span>
                  <span>DEC</span>
                </div>
              </div>

              {/* Left Bottom Pie Chart */}
              <div className="absolute left-0 bottom-0 w-56 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Invoices by Status</h4>
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366f1" strokeWidth="3" strokeDasharray="62, 100"/>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="13, 100" strokeDashoffset="-62"/>
                    </svg>
                  </div>
                  <div className="ml-3 text-sm space-y-1">
                    <div className="flex items-center"><div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div><span>62% Submitted</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div><span>13% Rejected</span></div>
                    <div className="flex items-center"><div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div><span>23% Approved</span></div>
                  </div>
                </div>
              </div>

              {/* Center Stats - overlapping */}
              <div className="absolute left-72 top-6 space-y-3">
                <div className="bg-white rounded-lg p-4 w-36 text-gray-800 shadow-lg">
                  <div className="text-2xl font-bold">27</div>
                  <div className="text-sm text-gray-500">Invoices in Queue</div>
                </div>
                <div className="bg-white rounded-lg p-4 w-36 text-gray-800 shadow-lg">
                  <div className="text-2xl font-bold">34</div>
                  <div className="text-sm text-gray-500">Total Exceptions</div>
                </div>
              </div>

              <div className="absolute left-96 top-20 space-y-3">
                <div className="bg-white rounded-lg p-4 w-36 text-gray-800 shadow-lg">
                  <div className="text-2xl font-bold">56</div>
                  <div className="text-sm text-gray-500">Invoices Processed</div>
                </div>
                <div className="bg-white rounded-lg p-4 w-36 text-gray-800 shadow-lg">
                  <div className="text-2xl font-bold">68</div>
                  <div className="text-sm text-gray-500">Total Invoices</div>
                </div>
              </div>

              {/* Right Side - Today's Invoices */}
              <div className="absolute right-52 top-0 w-44 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Today&apos;s Invoices</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Invoices Processed</div>
                    <div className="text-3xl font-bold text-blue-600">56</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Invoice Exceptions</div>
                    <div className="text-2xl font-bold">7</div>
                  </div>
                </div>
              </div>

              {/* Right Pie Chart */}
              <div className="absolute right-0 top-0 w-44 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-3">Invoices by Status</h4>
                <div className="flex justify-center">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="62, 100"/>
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="13, 100" strokeDashoffset="-62"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-2 text-sm">
                  <span className="text-indigo-500">62%</span> • 
                  <span className="text-purple-500">13%</span> • 
                  <span className="text-gray-400">23%</span>
                </div>
              </div>

              {/* Bottom Chart - spanning width */}
              <div className="absolute bottom-0 left-60 right-48 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-600">Total Number of invoices each month</h4>
                  <select className="text-xs text-blue-600 bg-transparent border-none">
                    <option>Admin</option>
                  </select>
                </div>
                <div className="h-16 flex items-end space-x-1">
                  {[8, 12, 10, 15, 12, 18, 15, 20, 18, 25, 28, 32].map((height, i) => (
                    <div key={i} className="bg-blue-400 rounded-t flex-1" style={{ height: `${height * 2.5}%` }}></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  <div className="grid grid-cols-4 gap-4">
                    <span>10%</span>
                    <span>20%</span>
                    <span>30%</span>
                    <span>40%</span>
                  </div>
                </div>
              </div>

              {/* Priority Tasks */}
              <div className="absolute right-0 bottom-0 w-44 bg-white rounded-xl p-4 text-gray-800 shadow-lg">
                <h4 className="text-sm font-medium text-gray-600 mb-3">My Priorities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">Task ID</span>
                    <span className="font-medium">Priority</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <div>
                      <div className="font-medium">977778939</div>
                      <div className="text-xs text-gray-500">PO Number Missing</div>
                    </div>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">High</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <div>
                      <div className="font-medium">977778940</div>
                      <div className="text-xs text-gray-500">Checking Email Sample</div>
                    </div>
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
