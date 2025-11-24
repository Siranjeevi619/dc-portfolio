export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                I am an Assistant Professor at Karpagam College of Engineering with a strong passion for artificial
                intelligence and machine learning. My academic journey has equipped me with expertise in both
                theoretical foundations and practical applications of modern AI technologies.
              </p>
              <p className="leading-relaxed">
                My research focuses on designing innovative solutions using deep learning and computational
                intelligence, with particular emphasis on healthcare AI applications including cardiovascular disease
                prediction and sentiment analysis across multiple languages.
              </p>
              <p className="leading-relaxed">
                Beyond research, I'm dedicated to fostering the next generation of AI professionals through mentoring,
                industry training, and developing comprehensive curriculum for emerging technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">800+</div>
              <p className="text-gray-600 text-sm">Students Mentored</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600 text-sm">Projects Supervised</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-gray-600 text-sm">SCI/SCIE Publications</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600 text-sm">Academic Reviewer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
