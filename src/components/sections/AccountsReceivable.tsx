export function AccountsReceivable() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Dashboard Preview */}
          <div className="relative order-2 lg:order-1">
            {/* Pricing Table Mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Pricing</h3>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>Products</span>
                    <span>Pricing</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Basic Plan */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Basic</div>
                    <div className="text-sm text-gray-500 mb-2">Digital access</div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      €9 <span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                    <button className="w-full border border-gray-300 py-2 rounded text-sm">
                      Get started
                    </button>
                    
                    <div className="mt-4 text-xs text-gray-600">
                      <div className="font-medium mb-2">This includes:</div>
                      <ul className="space-y-1">
                        <li>Unlimited access to our content</li>
                        <li>Newsletters</li>
                        <li>Premium subscriber content</li>
                      </ul>
                    </div>
                  </div>

                  {/* Premium Plan */}
                  <div className="border-2 border-purple-600 rounded-lg p-4 bg-purple-50">
                    <div className="text-sm text-gray-600 mb-2">Premium <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs ml-2">Popular</span></div>
                    <div className="text-sm text-gray-500 mb-2">Digital and print access</div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      €19 <span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded text-sm">
                      Get started
                    </button>
                    
                    <div className="mt-4 text-xs text-gray-600">
                      <div className="font-medium mb-2">This includes:</div>
                      <ul className="space-y-1">
                        <li>Unlimited access to web content</li>
                        <li>Free newsletters</li>
                        <li>Subscriber emails</li>
                        <li>Exclusive subscriber content</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background geometric shapes */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-cyan-400 rounded-2xl transform rotate-12 opacity-80"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="text-cyan-400 font-medium text-lg">Accounts Receivable</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Streamline Accounts with Intelligent Automation
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Accelerate collections and reduce Days Sales Outstanding 
              (DSO). Payraydoo automates AR workflows — from 
              invoicing to reconciliation — while maintaining full 
              visibility and control.
            </p>

            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Explore AR Automation
            </button>

            <div className="space-y-4 pt-4">
              <div className="text-lg font-semibold text-gray-900 mb-3">Benefits:</div>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-semibold">Automate</span>
                  <span className="text-gray-700">and send invoices with payment tracking</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-semibold">Reconcile</span>
                  <span className="text-gray-700">bank transactions with invoices in real-time</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-semibold">Trigger</span>
                  <span className="text-gray-700">automated dunning and reminders</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-cyan-400 font-semibold">Reduce</span>
                  <span className="text-gray-700">bad debt and increase cash flow predictability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
