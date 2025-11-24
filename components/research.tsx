export function Research() {
  const interests = [
    { title: "Artificial Intelligence", description: "Exploring machine learning and AI fundamentals" },
    { title: "Deep Learning", description: "Neural networks and advanced learning architectures" },
    { title: "Natural Language Processing", description: "Language understanding and sentiment analysis" },
    { title: "Computational Intelligence", description: "Evolutionary algorithms and optimization" },
  ]

  const skills = [
    "J2SE/J2EE",
    "Python",
    "Spring Boot",
    "Hibernate",
    "Flask",
    "Django",
    "NoSQL Databases",
    "Apache Spark",
    "Zeppelin",
    "Java Frameworks",
    "MERN Stack",
  ]

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Research & Skills</h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Research Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                  <h4 className="font-semibold text-gray-900">{interest.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{interest.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Certifications & Honors</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600">✓</span>{" "}
              <span>Advanced Technology Certified Faculty in Big Data, Wipro Limited (April 2022)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">✓</span>{" "}
              <span>Advanced Technology Certified Faculty in AI/ML, Wipro Limited (June 2021)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">✓</span> <span>Wipro Certified Faculty (June 2016)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">✓</span>{" "}
              <span>Best Faculty of the College, Cognizant Technology Solutions (April 2016)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">✓</span> <span>Anna University Rank Holder - 6th Rank (May 2014)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
