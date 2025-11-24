export function Education() {
  const education = [
    {
      degree: "Doctor of Philosophy (PhD)",
      field: "Information Technology",
      institution: "Anna University",
      location: "Chennai, Tamil Nadu",
      year: "Aug 2023",
      thesis: "Design of Hybrid Feature Selection and Deep Ensemble Models for Cardiovascular Disease Classification",
      honor: "Highly Commended",
    },
    {
      degree: "Master of Technology (M.Tech)",
      field: "Information Technology",
      institution: "SNS College of Technology",
      location: "Coimbatore, Tamil Nadu",
      year: "May 2014",
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Karpagam College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      year: "May 2011",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-gray-200 last:border-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-600 mt-2">{item.field}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.institution} • {item.location}
                  </p>
                  {item.thesis && <p className="text-gray-600 mt-3 text-sm italic">Thesis: {item.thesis}</p>}
                  {item.honor && <p className="text-blue-600 font-medium text-sm mt-2">{item.honor}</p>}
                </div>
                <span className="text-gray-500 font-medium whitespace-nowrap">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
