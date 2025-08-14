export function ProductCapabilitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-2xl transform -rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-xl transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-purple-300">Product</span>{' '}
            <span className="text-cyan-300">Capabilities</span>
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-20">
          {/* 1. Smarter & Measurable Results */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Accuracy</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-white mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Time Savings</div>
                </div>
                <div className="col-span-2">
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-gray-300 text-sm mb-2">Upto</div>
                    <div className="text-5xl font-bold text-white mb-2">60%</div>
                    <div className="text-gray-300 text-sm">Cost Savings</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">1.</span>
                </div>
                <h3 className="text-2xl font-bold">Smarter & Measurable Results</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Experience 95% accuracy, 90% time saved, and up to 60% cost reduction — all powered by Payraydoo. Our intelligent automation turns everyday workflows into effortless wins. It&apos;s not just faster; it&apos;s smarter.
              </p>
            </div>
          </div>

          {/* 2. Seamless Integrations */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 w-80">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Workflow Integrations</h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">☁</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">△</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">◇</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">O</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">2.</span>
                </div>
                <h3 className="text-2xl font-bold">Seamless Integrations</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Payraydoo connects with your everyday tools — Outlook, Gmail, Google Drive, Dropbox, OneDrive, and more — so you can automate tasks, sync files, and manage accounts without switching tabs.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Everything works together. Just like it should.
              </p>
            </div>
          </div>

          {/* 3. Complete control. 0 guesswork */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="grid grid-cols-2 gap-4 w-80">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-sm text-gray-300 mb-2">Control & Visibility on AP Invoice Bottlenecks</div>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5,6,7,8].map((i) => (
                      <div key={i} className={`w-2 h-8 rounded ${i <= 5 ? 'bg-purple-400' : 'bg-gray-600'}`}></div>
                    ))}
                  </div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-sm text-gray-300 mb-2">AI Powered OCR</div>
                </div>
                <div className="col-span-2 bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-sm text-gray-300 mb-2">Custom Charts & Reports</div>
                  <div className="h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded opacity-60"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">3.</span>
                </div>
                <h3 className="text-2xl font-bold">Complete control. 0 guesswork</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Gain end-to-end visibility on AP invoice delays with AI-powered insights and customizable reports. Payraydoo helps you identify bottlenecks, accelerate approvals, and make smarter decisions — faster.
              </p>
            </div>
          </div>

          {/* 4. Fits into your ERP universe */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 w-80">
                <h4 className="text-xl font-bold text-white mb-6 text-center">ERP Integrations</h4>
                <div className="flex justify-center space-x-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">SAP</div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold">sage</div>
                  <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold">ORACLE</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">4.</span>
                </div>
                <h3 className="text-2xl font-bold">Fits into your ERP universe</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Whether it&apos;s SAP, Oracle, Sage, or others—Payraydoo integrates effortlessly with your existing ERP systems. No disruptions. Just smoother workflows, unified data, and faster processing from day one.
              </p>
            </div>
          </div>

          {/* 5. Built for global teams. Backed by real support. */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="space-y-4 w-80">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-2">Made with ❤ for AP Teams</div>
                    <div className="h-12 bg-gray-600 rounded"></div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-sm text-gray-300 mb-2">Excellent Support</div>
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-sm text-gray-300 mb-2">Supports Global Invoice Formats</div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-4 bg-red-600 rounded"></div>
                    <div className="h-4 bg-blue-600 rounded"></div>
                    <div className="h-4 bg-orange-600 rounded"></div>
                    <div className="h-4 bg-green-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">5.</span>
                </div>
                <h3 className="text-2xl font-bold">Built for global teams. Backed by real support.</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                From UK to USA to India, Payraydoo supports diverse invoice formats across borders. And behind the tech? A dedicated support team that truly understands AP challenges—ready to help every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section - Overlapping at the bottom */}
        <div className="mt-20 relative">
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
      </div>
    </section>
  );
}
