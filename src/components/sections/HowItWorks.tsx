export function HowItWorks() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-purple-600 font-medium text-lg">How Payraydoo Works</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Smarter Workflows.
              <br />
              Tangible Results.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From invoice capture to reconciliation, 
              Payraydoo transforms complex AP & AR processes 
              into automated, accurate, and scalable 
              flows — with zero guesswork.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-6 pt-4">
              <div className="text-lg font-semibold text-gray-900 mb-4">Core Capabilities:</div>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Capture & Validate */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Capture & Validate</h3>
                    <p className="text-sm text-gray-600">
                      AI-powered data extraction from any invoice source and perform 2- or 3-way 
                      matching to eliminate manual errors.
                    </p>
                  </div>
                </div>

                {/* Automate & Act */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Automate & Act</h3>
                    <p className="text-sm text-gray-600">
                      Route invoices through custom approval workflows to collections — with smart routing, alerting 
                      schedules, and dispute resolution.
                    </p>
                  </div>
                </div>

                {/* Sync & Track */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sync & Track</h3>
                    <p className="text-sm text-gray-600">
                      Get real-time insights through custom dashboards and seamless ERP integrations 
                      like SAP, QuickBooks, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-cyan-200 rounded-xl flex items-center justify-center">
                {/* Placeholder for the smiling woman image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-300 to-cyan-300 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-white font-semibold">Happy Customer</div>
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
