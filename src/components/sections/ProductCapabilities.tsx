export function ProductCapabilities() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 text-white">
      {/* First Diagonal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(79,61,134)] via-[rgb(128,76,195)] to-[rgb(166,112,241)]"></div>
      
      {/* Second Diagonal Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-[rgb(141,175,253)] via-[rgb(207,184,243)] to-transparent opacity-60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">
            Our <span className="text-purple-300">Product Capabilities</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* First Section - Stats Cards with Description */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Stats Cards */}
            <div className="space-y-4">
              {/* Top Row - 95% and 90% Cards Side by Side */}
              <div className="grid grid-cols-2 gap-3">
                {/* 95% Accuracy Card */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-gray-100 text-sm">Accuracy</div>
                </div>

                {/* 90% Time Savings Card */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-1">90%</div>
                  <div className="text-gray-100 text-sm">Time Savings</div>
                </div>
              </div>

              {/* Bottom Row - 60% Cost Savings Card (Full Width) */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-gray-100 text-sm mb-1">Upto</div>
                <div className="text-4xl font-bold text-white mb-1">60%</div>
                <div className="text-gray-100 text-sm">Cost Savings</div>
              </div>
            </div>

            {/* Right Side - Feature 1 Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">1.</span>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Smarter & Measurable Results</h3>
                  <p className="text-gray-100 leading-relaxed text-xl">
                    Experience 95% accuracy, 90% time saved, and up to 60% cost reduction — all powered by Payraydoo. Our intelligent automation turns everyday workflows into effortless wins. It&apos;s not just faster; it&apos;s smarter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Workflow Integrations with Description */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Workflow Integrations Card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">Workflow Integrations</h3>
              <div className="grid grid-cols-3 gap-4">
                {/* OneDrive */}
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.5 15.5h13c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5c-.2 0-.4 0-.5.1C17.1 6.8 15.2 5.5 13 5.5c-1.9 0-3.6 1.1-4.4 2.8-.2 0-.4-.1-.6-.1-1.7 0-3 1.3-3 3 0 .8.3 1.5.8 2.1C5.6 13.9 5.5 14.7 5.5 15.5z"/>
                  </svg>
                </div>
                
                {/* Gmail */}
                <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                
                {/* Google Drive */}
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.06 9l2.12 3.5H7.95L14.06 9zm-4.62 0l-3.54 6h7.08l3.54-6H9.44zm8.24-2L20.8 12l-3.12 5.25H14.5L17.62 12 14.5 6.75h3.18z"/>
                  </svg>
                </div>
                
                {/* Dropbox */}
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.71 2.86L12 5.86l-4.29 3L3.43 6.86l4.28-4zm8.58 0l4.28 4-4.28 2-4.29-3l4.29-3zM3.43 10.86l4.28 2 4.29-3-4.29-3-4.28 4zm13.14 2l4.28-2-4.28-4-4.29 3 4.29 3zm-8.58 2.57L12 18.43l4.29-3 1.43 1.43L12 21.14l-5.72-4.28 1.43-1.43z"/>
                  </svg>
                </div>
                
                {/* Outlook */}
                <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM6.48 17.17l3.84-4.93L6.48 6.83h2.4l2.4 3.75 2.4-3.75h2.4l-3.84 5.41 3.84 4.93h-2.4L12 13.42l-2.88 3.75H6.48z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Feature 2 Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">2.</span>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Seamless Integrations</h3>
                  <p className="text-gray-100 leading-relaxed text-xl mb-4">
                    Payraydoo connects with your everyday tools — Outlook, Gmail, Google Drive, Dropbox, OneDrive, and more — so you can automate tasks, sync files, and manage accounts without switching tabs.
                  </p>
                  <p className="text-gray-100 leading-relaxed text-xl">
                    Everything works together. Just like it should.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Control & Reports with Description */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Control & Visibility Components */}
            <div className="space-y-4">
              {/* Top Row - Control & Visibility and AI OCR */}
              <div className="grid grid-cols-2 gap-3">
                {/* Control & Visibility Card */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-3">Control & Visibility on AP Invoice Bottlenecks</h3>
                  <div className="flex space-x-1 items-end h-12">
                    {[8, 6, 9, 4, 7, 5, 8, 3].map((height, i) => (
                      <div 
                        key={i} 
                        className={`w-2 rounded-t-lg ${i <= 4 ? 'bg-green-500' : 'bg-gray-600'}`}
                        style={{ height: `${height * 4}px` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* AI Powered OCR Card */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-3">AI Powered OCR</h3>
                  <div className="bg-gray-700 h-14 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AI OCR</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Custom Charts & Reports (Full Width) */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Custom Charts & Reports</h3>
                <div className="h-24 flex items-center justify-center bg-gray-800 rounded-lg">
                  {/* Enhanced Line Chart SVG */}
                  <svg className="w-full h-16" viewBox="0 0 400 60" fill="none">
                    {/* Grid Lines */}
                    <defs>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    <g stroke="#374151" strokeWidth="0.5" opacity="0.3">
                      <line x1="0" y1="15" x2="400" y2="15"/>
                      <line x1="0" y1="30" x2="400" y2="30"/>
                      <line x1="0" y1="45" x2="400" y2="45"/>
                    </g>
                    
                    {/* First Line (Green) with Area */}
                    <path d="M20 40 L60 28 L100 20 L140 24 L180 16 L220 12 L260 8 L300 10 L340 6 L380 8" 
                          fill="url(#greenGradient)" stroke="none"/>
                    <path d="M20 40 L60 28 L100 20 L140 24 L180 16 L220 12 L260 8 L300 10 L340 6 L380 8 L380 60 L20 60 Z" 
                          fill="url(#greenGradient)"/>
                    <path d="M20 40 L60 28 L100 20 L140 24 L180 16 L220 12 L260 8 L300 10 L340 6 L380 8" 
                          stroke="#10B981" strokeWidth="2" fill="none"/>
                    
                    {/* Second Line (Cyan) with Area */}
                    <path d="M20 48 L60 40 L100 32 L140 36 L180 28 L220 24 L260 20 L300 22 L340 18 L380 20" 
                          fill="url(#cyanGradient)" stroke="none"/>
                    <path d="M20 48 L60 40 L100 32 L140 36 L180 28 L220 24 L260 20 L300 22 L340 18 L380 20 L380 60 L20 60 Z" 
                          fill="url(#cyanGradient)"/>
                    <path d="M20 48 L60 40 L100 32 L140 36 L180 28 L220 24 L260 20 L300 22 L340 18 L380 20" 
                          stroke="#06B6D4" strokeWidth="2" fill="none"/>
                    
                    {/* Data Points */}
                    <g fill="#10B981">
                      <circle cx="20" cy="40" r="1.5"/>
                      <circle cx="100" cy="20" r="1.5"/>
                      <circle cx="180" cy="16" r="1.5"/>
                      <circle cx="260" cy="8" r="1.5"/>
                      <circle cx="340" cy="6" r="1.5"/>
                    </g>
                    <g fill="#06B6D4">
                      <circle cx="20" cy="48" r="1.5"/>
                      <circle cx="100" cy="32" r="1.5"/>
                      <circle cx="180" cy="28" r="1.5"/>
                      <circle cx="260" cy="20" r="1.5"/>
                      <circle cx="340" cy="18" r="1.5"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Feature 3 Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">3.</span>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Complete control. 0 guesswork</h3>
                  <p className="text-gray-100 leading-relaxed text-xl">
                    Gain end-to-end visibility on AP invoice delays with AI-powered insights and customizable reports. Payraydoo helps you identify bottlenecks, accelerate approvals, and make smarter decisions—faster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Section - ERP Integrations with Description */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - ERP Integrations Card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">ERP Integrations</h3>
              <div className="space-y-3">
                {/* SAP Integration */}
                <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">SAP</span>
                </div>
                
                {/* Sage Integration */}
                <div className="bg-transparent border-2 border-green-500 rounded-lg p-3 flex items-center justify-center">
                  <span className="text-green-500 font-bold text-lg">Sage</span>
                </div>
                
                {/* Oracle Integration */}
                <div className="bg-transparent border-2 border-red-500 rounded-lg p-3 flex items-center justify-center">
                  <span className="text-red-500 font-bold text-lg">ORACLE</span>
                </div>
              </div>
            </div>

            {/* Right Side - Feature 4 Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">4.</span>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Fits into your ERP universe</h3>
                  <p className="text-gray-100 leading-relaxed text-xl">
                    Whether it&apos;s SAP, Oracle, Sage, or others—Payraydoo integrates effortlessly with your existing ERP systems. No disruptions. Just smoother workflows, unified data, and faster processing from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Section - Global Support with Description */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Global Support Components */}
            <div className="space-y-6">
              {/* Top Row - Made with Love and Excellent Support */}
              <div className="grid grid-cols-2 gap-4">
                {/* Made with Love for AP Teams */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-3">Made with ❤️ for AP Teams</h3>
                  <div className="bg-white rounded-lg p-3 h-16">
                    {/* Mini Dashboard with Plot */}
                    <div className="flex items-end space-x-1 h-full">
                      <div className="bg-blue-400 w-2 h-8 rounded-sm"></div>
                      <div className="bg-green-400 w-2 h-6 rounded-sm"></div>
                      <div className="bg-purple-400 w-2 h-10 rounded-sm"></div>
                      <div className="bg-orange-400 w-2 h-4 rounded-sm"></div>
                      <div className="bg-cyan-400 w-2 h-7 rounded-sm"></div>
                      <div className="bg-pink-400 w-2 h-9 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Excellent Support */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <h3 className="text-sm font-bold text-white mb-3">Excellent Support</h3>
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👨</span>
                    </div>
                    <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👩</span>
                    </div>
                    <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👨</span>
                    </div>
                    <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👩</span>
                    </div>
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👨</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Global Invoice Formats (Full Width) */}
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Supports Global Invoice Formats</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇬🇧</span>
                    <span className="text-white text-sm">UK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-white text-sm">USA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-white text-sm">India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇸🇦</span>
                    <span className="text-white text-sm">Saudi Arabia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature 5 Description */}
            <div className="space-y-6">
              <div className="flex items-start space-x-5">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">5.</span>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Built for global teams. Backed by real support.</h3>
                  <p className="text-gray-100 leading-relaxed text-xl">
                    From UK to USA to India, Payraydoo supports diverse invoice formats across borders. And behind the tech? A dedicated support team that truly understands AP challenges—ready to help, every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
