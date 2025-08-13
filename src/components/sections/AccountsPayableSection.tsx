import Image from "next/image";

export function AccountsPayableSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-purple-600 font-medium text-lg">Accounts </span>
              <span className="text-cyan-400 font-medium text-lg">Payable</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Streamline Accounts with Intelligent Automation
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Say goodbye to paper trails and manual chaos. 
              Payraydoo automates your AP workflows — from 
              multi-source invoice capture to ERP posting — 
              with AI-powered speed and precision.
            </p>

            <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
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
                  <span className="text-purple-600 font-semibold">Pulse</span>
                  <span className="text-gray-700">for real-time tracking and error reduction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Payment Interface */}
          <div className="relative bg-gradient-to-br from-cyan-100 via-white to-purple-100 p-6 rounded-3xl shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full transform translate-x-12 -translate-y-6"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full transform -translate-x-6 translate-y-6"></div>
            
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Product Info */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-md flex items-center justify-center">
                    <Image 
                      src="/assets/logo.jpg" 
                      alt="Wood Chair" 
                      width={48} 
                      height={48} 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Wood Chair 001</div>
                    <div className="text-lg font-semibold">€135.00</div>
                  </div>
                </div>
              </div>
              
              {/* Payment Options */}
              <div className="p-4 space-y-3">
                <button className="w-full bg-gray-900 text-white py-2.5 rounded-md flex items-center justify-center space-x-2">
                  <span>Pay</span>
                </button>
                
                <button className="w-full bg-green-500 text-white py-2.5 rounded-md flex items-center justify-center space-x-2 border border-green-600">
                  <span>Pay with</span>
                  <span className="font-semibold">link</span>
                </button>
                
                <div className="text-center text-xs text-gray-400 py-2 border-b border-gray-100">
                  Oder mit Karte bezahlen
                </div>
                
                {/* Form Fields */}
                <div className="space-y-3 py-2">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">E-Mail</div>
                    <div className="text-sm text-gray-700">klara.schulz@example.de</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Zahlungsmethoden</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-gray-200 rounded-md p-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Karte</span>
                      </div>
                      <div className="border border-gray-200 rounded-md p-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">Klarna</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Land/Region</div>
                    <div className="border border-gray-200 rounded-md p-2 flex items-center justify-between">
                      <span className="text-sm">Deutschland</span>
                      <span>▼</span>
                    </div>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <button className="w-full bg-gray-900 text-white py-3 rounded-md font-medium mt-4">
                  €135.00 zahlen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
