export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 border border-white/10 min-h-[900px] relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready To Spend Less On Invoice Processing?</h2>
            <p className="text-gray-300 text-xl mb-8">Reduce errors, free up your team for strategic work, and gain valuable insights.</p>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-10 py-4 rounded-full text-xl font-medium transition-colors">
              Find Out How
            </button>
          </div>

          {/* Mobile Purchase Component */}
          <div className="absolute top-20 left-8 z-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 transform rotate-[-8deg]">
              {/* Product Image */}
              <div className="bg-gray-100 rounded-lg p-8 mb-6 text-center">
                <div className="w-20 h-20 mx-auto">
                  {/* Wooden Chair SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Chair seat */}
                    <ellipse cx="50" cy="65" rx="20" ry="8" fill="#D4A574"/>
                    {/* Chair back */}
                    <rect x="30" y="35" width="40" height="25" rx="8" fill="#D4A574"/>
                    {/* Chair legs */}
                    <rect x="32" y="70" width="4" height="20" fill="#B8956A"/>
                    <rect x="64" y="70" width="4" height="20" fill="#B8956A"/>
                    <rect x="32" y="35" width="4" height="15" fill="#B8956A"/>
                    <rect x="64" y="35" width="4" height="15" fill="#B8956A"/>
                    {/* Chair details */}
                    <rect x="35" y="40" width="30" height="2" fill="#B8956A"/>
                    <rect x="35" y="45" width="30" height="2" fill="#B8956A"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-lg text-gray-700 mb-2 font-medium">Wood Chair 001</div>
                <div className="text-3xl font-bold text-gray-900">€135.00</div>
              </div>
              
              {/* Payment Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-black text-white py-4 rounded-lg font-semibold flex items-center justify-center text-lg">
                  <svg className="w-6 h-6 mr-2" fill="white" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
                    <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.9-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                  </svg>
                  Pay
                </button>
                <button className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center text-lg">
                  Pay with <span className="ml-2 font-bold">○ link</span>
                </button>
              </div>
              
              <div className="text-sm text-gray-500 mb-6 text-center">
                Oder mit Karte bezahlen
              </div>
              
              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">E-Mail</label>
                  <input 
                    type="email" 
                    value="klara.schurig@example.de" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Zahlungsmethoden</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-gray-50">
                      <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold mr-3">
                        💳
                      </div>
                      <span className="text-sm">Karte</span>
                    </div>
                    <div className="flex items-center p-3 border-2 border-gray-400 rounded-lg bg-white">
                      <div className="w-8 h-6 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-bold mr-3">K</div>
                      <span className="text-sm font-medium">Klarna</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Land/Region</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50">
                    <option>Deutschland</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full bg-gray-800 text-white py-4 rounded-lg font-bold text-lg mt-6">
                €135.00 zahlen
              </button>
            </div>
          </div>

          {/* Main Dashboard Tablet */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 ml-32 mt-16 min-h-[650px] border-4 border-purple-200">
            {/* Browser Header */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-6 gap-6 mb-8">
              {/* Left Side Metrics */}
              <div className="col-span-4 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-gray-600 text-sm mb-1">Invoices in Queue</div>
                  <div className="text-4xl font-bold text-gray-900">27</div>
                  <div className="mt-4">
                    <div className="text-gray-600 text-sm mb-1">Total Exceptions</div>
                    <div className="text-4xl font-bold text-gray-900">34</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-600 text-sm mb-1">Invoices Processed</div>
                  <div className="text-4xl font-bold text-gray-900">56</div>
                  <div className="mt-4">
                    <div className="text-gray-600 text-sm mb-1">Total Invoices</div>
                    <div className="text-4xl font-bold text-gray-900">68</div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-span-2">
                <div className="mb-6">
                  <div className="text-gray-600 text-sm mb-1">Today&apos;s Invoices</div>
                  <div className="text-gray-600 text-xs mb-1">Invoices Processed</div>
                  <div className="text-4xl font-bold text-blue-600">56</div>
                  <div className="mt-2">
                    <div className="text-gray-600 text-xs">Invoice Exceptions</div>
                    <div className="text-2xl font-bold text-gray-900">7</div>
                  </div>
                </div>
                
                {/* Pie Chart */}
                <div>
                  <div className="text-gray-600 text-sm mb-2">Invoices by Status</div>
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        strokeDasharray="62, 100"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        strokeDasharray="25, 100"
                        strokeDashoffset="-62"
                      />
                    </svg>
                  </div>
                  <div className="text-xs mt-2 space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span>62% Submitted</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span>13% Rejected</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      <span>25% Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Chart */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-gray-700 font-medium">Total Number of invoices each month</h4>
                  <select className="text-blue-600 text-sm border border-gray-200 rounded px-2 py-1">
                    <option>Admin</option>
                  </select>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 60, 50, 70, 65, 80, 75, 90, 85, 95, 90, 100].map((height, i) => (
                      <div 
                        key={i} 
                        className="bg-blue-500 w-6 rounded-t"
                        style={{ height: `${height}%` }}
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
              </div>

              {/* Tasks */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">My Priorities</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
                    <span>Task ID</span>
                    <span>Task Name</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">9777738939</span>
                    <span className="text-gray-800">PO Number Missing</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">9777739940</span>
                    <span className="text-gray-800">Checking Email Sample</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">9777739941</span>
                    <span className="text-gray-800">Extract Account Info</span>
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
