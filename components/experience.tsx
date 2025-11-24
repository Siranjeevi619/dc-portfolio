"use client";

import { useEffect, useState } from "react";
import experienceData from "@/data/experience.json";

export function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-gray-600 text-lg mt-2">
            My professional journey & contributions
          </p>
        </div>

        <div className="space-y-10">
          {experienceData.experiences.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white border border-gray-200 rounded-2xl 
                shadow-sm hover:shadow-lg transition-all duration-300
                p-8 flex flex-col md:flex-row gap-8
              "
            >
              {/* LOGO COLUMN (LinkedIn style) */}
              <div className="md:w-40 flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-xl border bg-gray-50 flex items-center justify-center overflow-hidden shadow-sm">
                  {/* You can replace with item.logo */}
                  <span className="text-gray-400 text-sm">Logo</span>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="flex-1">
                {/* Position & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {item.role}
                    </h3>
                    <p className="text-lg font-medium text-blue-600 mt-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="mt-3 md:mt-0 text-sm px-4 py-2 bg-gray-100 rounded-full font-medium">
                    {item.period}
                  </span>
                </div>

                {/* Department & Location */}
                <div className="mt-6 mb-6 border-b pb-6">
                  {item.department && (
                    <p className="text-sm text-gray-800 font-medium mb-2">
                      {item.department}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 flex gap-2 items-center">
                    <i className="fa-solid fa-location-dot text-blue-600"></i>
                    {item.location}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp: string, ridx: number) => (
                      <li key={ridx} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
