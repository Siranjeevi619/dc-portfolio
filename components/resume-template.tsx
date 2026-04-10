"use client"

import React from "react"
import userInfo from "@/data/user-info.json"
import education from "@/data/education.json"
import { experiences } from "@/data/experience.json"
import publicationsData from "@/data/publications.json"

export const ResumeTemplate = React.forwardRef<HTMLDivElement>((props, ref) => {
  const allPublications = publicationsData.flatMap((yearGroup) => yearGroup.publications)
  const recentPublications = allPublications.slice(0, 5)

  const certifications = [
    "Infosys Certified Python Trainer",
    "Microsoft Certified Windows Network Services Trainer",
    "Advanced Tech Certified (Big Data & AI/ML), Wipro Limited",
    "Wipro Certified Faculty (TalentNext)"
  ]

  const reviewerStats = [
    { n: "Knowledge-Based Systems", c: 10 },
    { n: "Expert Systems with Applications", c: 5 },
    { n: "IEEE Access", c: 3 },
    { n: "Engineering Apps of AI", c: 3 },
    { n: "IEEE Trans. Comp. Social Systems", c: 2 },
    { n: "Neural Computing & Apps", c: 1 }
  ]

  const technicalCompetencies = [
    { category: "Languages", skills: "Python, Java (J2EE), SQL, C++" },
    { category: "Frameworks", skills: "Spring Boot, Flask, Django, React, Next.js" },
    { category: "AI / ML", skills: "Scikit-learn, TensorFlow, PyTorch, Keras, NLTK" },
    { category: "Big Data", skills: "Hadoop, Spark, NoSQL (MongoDB, Firebase)" }
  ]

  return (
    <div
      ref={ref}
      className="bg-white text-slate-800 p-12 w-[210mm] min-h-[297mm] mx-auto shadow-none font-sans"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        left: "-9999px",
        top: 0,
        color: "#334155",
        fontSize: "10.5pt",
        lineHeight: "1.4"
      }}
    >
      {/* PROFESSIONAL HEADER - BALANCED */}
      <header className="border-b-2 border-slate-900 pb-5 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase mb-1">{userInfo.name.replace('Dr. ', '')}</h1>
          <p className="text-[11pt] font-bold text-primary uppercase tracking-[0.2em]">
            Associate Professor | Member of IEEE & ACM
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9.5pt] font-black text-slate-900">{userInfo.email}</p>
          <p className="text-[9pt] text-slate-500">{userInfo.location}</p>
          <p className="text-[8pt] text-slate-400 font-mono italic">ORCID: {userInfo.orcid}</p>
        </div>
      </header>

      <div className="flex gap-10">
        {/* SIDE COLUMN - 32% */}
        <div className="w-[34%] space-y-10">
          {/* Education */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-1">Education</h3>
            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="pl-0.5">
                  <p className="text-[8pt] font-black text-primary mb-1 uppercase tracking-tighter">{edu.year}</p>
                  <p className="text-[10pt] font-bold text-slate-900 leading-tight">{edu.degree}</p>
                  <p className="text-[8pt] text-slate-500 italic mt-1 leading-snug">{edu.institution}</p>
                  {edu.thesis && <p className="text-[7.5pt] text-slate-400 mt-2 leading-relaxed text-justify">Thesis: {edu.thesis}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Proficiencies */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-1">Competencies</h3>
            <div className="space-y-4 pl-0.5">
              {technicalCompetencies.map((group, i) => (
                <div key={i}>
                  <p className="text-[8pt] font-bold text-slate-900 uppercase mb-1">{group.category}</p>
                  <p className="text-[8.5pt] text-slate-600 leading-tight">{group.skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Peer Reviewer Details */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-1">Peer Review</h3>
            <div className="space-y-2 pl-0.5">
              <p className="text-[8pt] font-black text-primary mb-3">21 TOTAL REVIEWS PERFORMED</p>
              {reviewerStats.map((stat, i) => (
                <div key={i} className="text-[8pt] flex justify-between gap-4">
                  <span className="text-slate-600 leading-tight">{stat.n}</span>
                  <span className="font-bold text-slate-900 shrink-0">({stat.c})</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Certifications */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-100 pb-1">Accreditations</h3>
            <ul className="space-y-2 pl-0.5">
              {certifications.map((cert, i) => (
                <li key={i} className="text-[8pt] text-slate-600 leading-snug flex items-start gap-2">
                   <span className="text-primary font-bold shrink-0 mt-0.5" style={{ fontSize: '7pt' }}>●</span>
                   <span>{cert}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* MAIN COLUMN - 66% */}
        <div className="w-[66%] space-y-10 border-l border-slate-100 pl-10">
          {/* Experience - FULL DETAILS */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-1">Professional Trajectory</h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-slate-900 text-[11pt] uppercase tracking-tight">{exp.role}</h4>
                    <span className="text-[8.5pt] font-black text-primary tabular-nums uppercase">{exp.period}</span>
                  </div>
                  <p className="text-slate-500 font-bold text-[9.5pt] italic mb-3 uppercase tracking-widest">{exp.company}</p>
                  <ul className="list-disc list-outside ml-4 text-[9.5pt] text-slate-600 space-y-2 text-justify">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Research Focus - DETAILED */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-5 border-b border-slate-100 pb-1">Research focus</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {[
                { t: "Deep Learning", d: "Custom transformer architectures for multimodal healthcare data and diagnostic AI." },
                { t: "NLP", d: "Sentiment analysis in Dravidian languages and early cyberbullying detection systems." },
                { t: "C. Intelligence", d: "Bio-inspired optimization algorithms for high-dimensional feature selection." },
                { t: "Health Informatics", d: "Deep ensemble learning models for cardiovascular disease classification and prediction." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  <div>
                    <p className="text-[9.5pt] font-bold text-slate-800 leading-tight">{item.t}</p>
                    <p className="text-[8.5pt] text-slate-500 leading-snug mt-1.5 text-justify">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications - FOCUSED */}
          <section>
            <h3 className="text-[9pt] font-black uppercase tracking-widest text-slate-400 mb-5 border-b border-slate-100 pb-1">Top Research Contributions</h3>
            <div className="space-y-3">
              {recentPublications.map((pub, idx) => (
                <div key={idx} className="text-[9.5pt] text-slate-700 leading-relaxed text-justify flex gap-3">
                  <span className="font-black text-primary tabular-nums shrink-0">{idx + 1}.</span>
                  <p>
                    {pub.title}. <span className="italic text-slate-500 font-medium">{pub.venue}</span>.
                  </p>
                </div>
              ))}
              <div className="mt-6 p-4 bg-slate-50 border-l-4 border-primary/20">
                <p className="text-[8pt] text-slate-500 leading-relaxed italic">
                  Note: A complete portfolio containing 32+ additional peer-reviewed publications is available at the digital version of this curriculum vitae.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-auto pt-10 text-center">
        <p className="text-[7.5pt] text-slate-400 font-mono tracking-[0.3em] uppercase italic border-t border-slate-100 pt-5">
          Academic Research Profile • AI & Systems Engineering Specialist
        </p>
      </footer>
    </div>
  )
})

ResumeTemplate.displayName = "ResumeTemplate"
