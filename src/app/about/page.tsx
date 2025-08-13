export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Learn more about our company, mission, and the team behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, our company has been at the forefront of innovation,
              helping businesses transform and grow in the digital age. We believe
              in delivering exceptional value through cutting-edge solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of experts brings decades of combined experience across
              various industries, ensuring that we understand the unique challenges
              and opportunities that businesses face today.
            </p>
            <p className="text-gray-600">
              We&apos;re committed to building long-term partnerships with our clients,
              providing ongoing support and guidance to help them achieve their goals.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to deliver innovative solutions
                that drive real business value.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Every project we undertake is executed with the highest standards
                of quality and attention to detail.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients as trusted partners,
                understanding their needs and exceeding expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
