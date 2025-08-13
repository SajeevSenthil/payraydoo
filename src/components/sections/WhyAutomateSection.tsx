export function WhyAutomateSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Automate Your <span className="text-purple-600">Finance</span>{' '}
          <span className="text-cyan-500">Operations</span>?
        </h2>
        
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-16">
          Free your finance teams from repetitive tasks and empower them to focus on what truly drives growth.
          <br />
          Payraydoo brings precision, speed, and clarity to both sides of the cash flow cycle with
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Error Elimination</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl font-bold text-gray-900 mb-2">11x</div>
            <div className="text-gray-600">Faster Processing</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-6xl font-bold text-gray-900 mb-2">60%</div>
            <div className="text-gray-600">Cost Savings</div>
          </div>
        </div>

        <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
          Discover More
        </button>
      </div>
    </section>
  )
}
