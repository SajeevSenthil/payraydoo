export function AccountsReceivableSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-purple-600 font-medium text-lg">Accounts </span>
              <span className="text-cyan-400 font-medium text-lg">Receivable</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Streamline Accounts with Intelligent Automation
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Accelerate collections and reduce Days Sales Outstanding (DSO). 
              Payraydoo automates AR workflows — from invoicing to 
              reconciliation — while maintaining full visibility and control.
            </p>

            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
              Explore AR Automation
            </button>

            <div className="space-y-4 pt-4">
              <div className="text-lg font-semibold text-gray-900 mb-3">Benefits:</div>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-2">Auto-generate</span>
                  <span className="text-gray-700">and send invoices with payment tracking</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-2">Reconcile</span>
                  <span className="text-gray-700">bank transactions with invoices in real-time</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-2">Trigger</span>
                  <span className="text-gray-700">automated dunning and reminders</span>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-2">Reduce</span>
                  <span className="text-gray-700">bad debt and increase cash flow predictability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Pricing Table */}
          <div className="relative bg-gradient-to-br from-cyan-100 via-white to-purple-100 p-6 rounded-3xl shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full transform translate-x-12 -translate-y-6"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full transform -translate-x-6 translate-y-6"></div>
            
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">A</span>
                    </div>
                    <span className="font-semibold">Abstraction</span>
                  </div>
                  <div className="flex space-x-4 text-xs text-gray-500">
                    <span>Products</span>
                    <span>Pricing</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>

              {/* Pricing Plans */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Basic Plan */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">Basic</h3>
                      <p className="text-gray-500 text-xs">Digital access</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">₹9</span>
                      <span className="text-xs text-gray-500">/month</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium">
                      Subscribe
                    </button>
                    <div>
                      <p className="text-xs mb-2">This includes:</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span>Unlimited access to web content</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span>Exclusive subscriber content</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Plan */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">Premium</h3>
                        <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded">Popular</span>
                      </div>
                      <p className="text-gray-500 text-xs">Digital and print access</p>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">₹19</span>
                      <span className="text-xs text-gray-500">/month</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium">
                      Subscribe
                    </button>
                    <div>
                      <p className="text-xs mb-2">This includes:</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span>Unlimited access to web content</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span>Monthly print issues</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-1">✓</span>
                          <span>Exclusive subscriber content</span>
                        </div>
                      </div>
                    </div>
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
