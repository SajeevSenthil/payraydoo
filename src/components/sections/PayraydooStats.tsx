export function PayraydooStats() {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">Why Automate</span> Your Finance <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Operations?</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Free your finance teams from repetitive tasks and empower them to focus on what truly drives growth. 
            Payraydoo brings precision, speed, and clarity to both sides of the cash flow cycle with
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-12">
          {/* Stat 1 */}
          <div className="bg-white rounded-3xl shadow-xl px-10 py-12 text-center flex-1 max-w-xs mx-auto transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-6xl font-bold text-gray-800 mb-2">95%</div>
            <p className="text-gray-600 font-medium text-lg">Error Elimination</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-3xl shadow-xl px-10 py-12 text-center flex-1 max-w-xs mx-auto transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-6xl font-bold text-gray-800 mb-2">11x</div>
            <p className="text-gray-600 font-medium text-lg">Faster Processing</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-3xl shadow-xl px-10 py-12 text-center flex-1 max-w-xs mx-auto transform transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-6xl font-bold text-gray-800 mb-2">60%</div>
            <p className="text-gray-600 font-medium text-lg">Cost Savings</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-14">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-lg py-3 px-10 rounded-full transition-all shadow-lg hover:shadow-xl">
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}
