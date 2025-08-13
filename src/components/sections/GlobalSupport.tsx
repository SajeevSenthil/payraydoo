export function GlobalSupport() {
  return (
    <section className="bg-gradient-to-br from-purple-800 via-purple-900 to-blue-900 py-16 lg:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Support Cards */}
          <div className="space-y-6">
            {/* Made with ❤ for AP Teams */}
            <div className="bg-black/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-red-500 text-xl">❤️</span>
                <h3 className="text-lg font-bold text-white">Made with ❤ for AP Teams</h3>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm">Invoice Processing Dashboard</div>
              </div>
            </div>

            {/* Excellent Support */}
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Excellent Support</h3>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Supports Global Invoice Formats */}
            <div className="bg-black/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Supports Global Invoice Formats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-red-600"></div>
                  <span className="text-sm">🇬🇧</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-blue-600"></div>
                  <span className="text-sm">🇺🇸</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-green-600"></div>
                  <span className="text-sm">🇳🇬</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-orange-600"></div>
                  <span className="text-sm">🇮🇳</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">5</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Built for global teams.
                <br />
                Backed by real support.
              </h2>
            </div>
            
            <p className="text-purple-200 text-lg leading-relaxed">
              From UK to USA to Nigeria to India, we process different invoice 
              formats across regions. And behind the tech? A dedicated support 
              team across multiple regions and AP specialists, ready to help every 
              step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
