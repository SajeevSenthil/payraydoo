export function AccountsPayable() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Dashboard Preview */}
          <div className="relative order-2 lg:order-1">
            {/* Mobile Phone Mockup */}
            <div className="relative mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-1 max-w-sm">
                <div className="bg-gray-100 rounded-3xl p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-xs text-gray-500">Today&apos;s Invoices</div>
                      <div className="text-xs text-gray-500">Invoice Processed</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">21</div>
                        <div className="text-xs text-gray-500">Today&apos;s Invoices</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">56</div>
                        <div className="text-xs text-gray-500">Invoice Completed</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">56</div>
                        <div className="text-xs text-gray-500">Error Reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">68</div>
                        <div className="text-xs text-gray-500">Cost Reduction</div>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">Total Number of invoices each month</div>
                      <div className="h-16 bg-white rounded flex items-end space-x-1 p-2">
                        {[30, 50, 35, 60, 45, 70, 40, 65, 55, 75, 50, 80].map((height, i) => (
                          <div 
                            key={i} 
                            className="bg-purple-500 rounded-t flex-1" 
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Search */}
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Enter invoice number"
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                      <button className="w-full bg-gray-900 text-white py-2 rounded font-medium text-sm">
                        SEARCH
                      </button>
                    </div>

                    <button className="w-full bg-gray-900 text-white py-3 rounded font-medium">
                      € COMPLETE INVOICE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background geometric shapes */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-600 rounded-2xl transform rotate-12 opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-400 rounded-2xl transform -rotate-12 opacity-80"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-purple-600 font-medium text-lg">Accounts Payable</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Streamline Accounts with Intelligent Automation
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Say goodbye to paper trails and manual chaos. 
              Payraydoo automates your AP workflows — from 
              multi-source invoice capture to ERP posting — 
              with AI-powered speed and precision.
            </p>

            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Explore AP Automation
            </button>

            <div className="space-y-4 pt-4">
              <div className="text-lg font-semibold text-gray-900 mb-3">Benefits:</div>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-semibold">Capture</span>
                  <span className="text-gray-700">for extracting invoice data from any source</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-semibold">Match</span>
                  <span className="text-gray-700">for 2/3-way PO and receipt validation</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-semibold">Flow</span>
                  <span className="text-gray-700">for smart, rule-based approval routing</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-semibold">Post</span>
                  <span className="text-gray-700">for real-time tracking and error reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
