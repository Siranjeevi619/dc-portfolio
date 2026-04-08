"use client"

import React from "react"
import userInfo from "@/data/user-info.json"
import education from "@/data/education.json"
import { experiences } from "@/data/experience.json"
import publicationsData from "@/data/publications.json"

export const ResumeTemplate = React.forwardRef<HTMLDivElement>((props, ref) => {
  // Flatten publications for the CV
  const allPublications = publicationsData.flatMap((yearGroup) => yearGroup.publications)
  const selectedPublications = allPublications.slice(0, 15) // Show top 15 for the CV

  return (
    <div
      ref={ref}
      className="bg-white text-slate-900 p-12 w-[210mm] min-h-[297mm] mx-auto shadow-2xl font-sans leading-relaxed"
      style={{
        boxSizing: "border-box",
        pageBreakAfter: "always",
        position: "absolute",
        left: "-9999px",
        top: 0,
      }}
    >
      {/* Header */}
      <header className="border-b-2 border-primary/20 pb-8 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 uppercase mb-1">{userInfo.name}</h1>
          <h2 className="text-lg font-medium text-primary mb-4">{userInfo.title}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-900">Email:</span> {userInfo.email}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-900">Location:</span> {userInfo.location}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-900">ORCID:</span> {userInfo.orcid}
            </span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-3 border-l-4 border-primary pl-3 bg-slate-50 py-1">
          Professional Profile
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed text-justify">{userInfo.bio}</p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-4 border-primary pl-3 bg-slate-50 py-1">
          Professional Experience
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-4 border-l-2 border-slate-100">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-slate-900">{exp.role}</h4>
                <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded uppercase">
                  {exp.period}
                </span>
              </div>
              <div className="text-primary font-medium text-sm mb-2">
                {exp.company} {exp.department ? `| ${exp.department}` : ""}
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                {exp.responsibilities.map((resp, ridx) => (
                  <li key={ridx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-4 border-primary pl-3 bg-slate-50 py-1">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                <p className="text-slate-700 text-xs mt-0.5">
                  {edu.institution} • {edu.location}
                </p>
                {edu.thesis && <p className="text-slate-500 text-[10px] mt-1 italic">Thesis: {edu.thesis}</p>}
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Publications */}
      <section>
        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 border-l-4 border-primary pl-3 bg-slate-50 py-1">
          Selected Publications ({selectedPublications.length})
        </h3>
        <div className="space-y-3">
          {selectedPublications.map((pub, idx) => (
            <div key={idx} className="text-[10px] text-slate-700 leading-normal">
              <span className="font-bold text-slate-900">{idx + 1}.</span> {pub.title}.{" "}
              <span className="italic">{pub.venue}</span>. {pub.doi && `DOI: ${pub.doi}`}
            </div>
          ))}
          {allPublications.length > selectedPublications.length && (
            <p className="text-[9px] text-slate-500 italic mt-2">
              ...and {allPublications.length - selectedPublications.length} more publications. See full list on the
              portfolio website.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-4 border-t border-slate-100 text-center">
        <p className="text-[8px] text-slate-400">
          Generated from online portfolio: {typeof window !== "undefined" ? window.location.origin : ""}
        </p>
      </footer>
    </div>
  )
})

ResumeTemplate.displayName = "ResumeTemplate"
