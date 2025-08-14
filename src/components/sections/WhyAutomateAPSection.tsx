export function WhyAutomateAPSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-normal mb-6 text-gray-900">
            Why automate your{' '}
            <span className="text-[rgb(128,76,195)] font-normal">AP</span>{' '}
            <span className="text-[rgb(166,112,241)] font-normal">invoice</span>{' '}
            processing?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Free your AP teams from mundane processes to focus on strategic
            initiatives and better vendor relationships
          </p>
        </div>

        {/* Features List - All content left, all images right */}
        <div className="space-y-24">
          {/* Feature 1 - Invoice & Line Item Capture */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Invoice & Line Item Capture</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce manual data entry and human error with AI based 
                OCR and machine learning technology that instantly 
                captures and codes your invoice
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Invoice & Line Item Capture"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 2 - Automatic Data Validation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Automatic Data Validation</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automatically validate invoices against corresponding 
                purchase orders, receipts, and invoice numbers using 2-way 
                and 3-way matching for enhanced accuracy.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Automatic Data Validation"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 3 - Streamlined Approvals */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Streamlined Approvals</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Accelerate invoice approvals with streamlined workflows, 
                routing invoices to the right user based on custom built 
                rules - no matter how complex they are
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Streamlined Approvals"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 4 - Accrual Automation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Accrual Automation</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simplify month-end closing for AP Teams by generating 
                accurate accrual entries to save time, reduce manual errors 
                and gain cashflow visibility
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Accrual Automation"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 5 - Manage Multiple Entities */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">5</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Manage Multiple Entities</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Effortlessly add & manage affiliated entities along with their 
                invoices, and assign granular user roles for enhanced control 
                and visibility
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Manage Multiple Entities"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Feature 6 - Informed Decision Making */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium text-sm">6</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Informed Decision Making</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access real-time reports to identify trends, optimize processes, 
                and make data-driven decisions that improve your financial 
                performance
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/assets/data.jpg" 
                alt="Informed Decision Making"
                className="max-w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
