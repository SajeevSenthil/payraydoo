const StatsSection = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Our clients love working with us and recommend our services"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Experienced professionals dedicated to your success"
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Proven track record of delivering exceptional results"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that speak for themselves. See why businesses trust us
            with their most important projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <p className="text-blue-100 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
