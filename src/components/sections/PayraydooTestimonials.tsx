export function PayraydooTestimonials() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <div className="text-purple-600 font-medium text-lg mb-2">Client Testimonials</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Customers Say !
            </h2>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-lg font-medium mb-6 text-gray-800">
              &ldquo;Cut our DSO from 60 to 30 days with seamless QuickBooks integration.&rdquo;
            </blockquote>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-700">AAA BBB</div>
                <div className="text-gray-500 text-sm">(CFO)</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-red-500">TECHCORP</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <blockquote className="text-lg font-medium mb-6 text-gray-800">
              &ldquo;Payraydoo&apos;s AP automation reduced our processing time by 80%.&rdquo;
            </blockquote>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-700">AAA BBB</div>
                <div className="text-gray-500 text-sm">(AP HEAD)</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-black">retailco</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section with Dashboard */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-8 lg:p-12 rounded-3xl text-white relative overflow-hidden h-[500px]">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready To Spend Less On Invoice Processing?</h3>
              <p className="text-lg opacity-90 mb-6">Reduce errors, free up your team for strategic work, and gain valuable insights.</p>
              <button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Find Out How
              </button>
            </div>
            
            {/* Admin Reports Image */}
            <div className="absolute inset-x-8 bottom-8 top-56">
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="/assets/data.jpg" 
                  alt="Admin Reports Dashboard"
                  className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
