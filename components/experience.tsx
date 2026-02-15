"use client";

import { useEffect, useState } from "react";
import experienceData from "@/data/experience.json";

import { ScrollAnimation } from "@/components/ui/scroll-animation";

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
        <ScrollAnimation className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg mt-2">
            My professional journey & contributions
          </p>
        </ScrollAnimation>

        <div className="space-y-10">
          {experienceData.experiences.map((item, idx) => (
            <ScrollAnimation
              key={idx}
              animation="fade-up"
              delay={idx * 0.1}
              className="
                bg-card border border-border rounded-2xl 
                shadow-sm hover-card
                p-8 flex flex-col md:flex-row gap-8
              "
            >
              {/* LOGO COLUMN (LinkedIn style) */}
              <div className="md:w-40 flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-xl border border-border bg-muted flex items-center justify-center overflow-hidden shadow-sm">
                  {/* You can replace with item.logo */}
                  <img src={item.logo} alt="LOGO" />
                  {/* <span className="text-muted-foreground text-sm">Logo</span> */}
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="flex-1">
                {/* Position & Company */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-card-foreground">
                      {item.role}
                    </h3>
                    <p className="text-lg font-medium text-primary mt-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="mt-3 md:mt-0 text-sm px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium">
                    {item.period}
                  </span>
                </div>

                {/* Department & Location */}
                <div className="mt-6 mb-6 border-b pb-6">
                  {item.department && (
                    <p className="text-sm text-foreground font-medium mb-2">
                      {item.department}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground flex gap-2 items-center">
                    <i className="fa-solid fa-location-dot text-primary"></i>
                    {item.location}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp: string, ridx: number) => (
                      <li key={ridx} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
