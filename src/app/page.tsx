"use client";

import React from "react";

export default function Home() {
  const certificates = [
    {
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "August 09, 2026",
      id: "330461297AAI26OFA",
      badge: "AI & Automation",
    },
    {
      title: "Bajaj Manufacturing Systems Certification",
      issuer: "Bajaj Auto Ltd. (CSR Initiative)",
      date: "July 31, 2026",
      id: "526041-36-2026-07-31",
      badge: "Manufacturing",
    },
  ];

  const skills = [
    "Mechanical Design & CAD",
    "Manufacturing Systems",
    "Python Programming",
    "Automation Concepts",
    "Go-Kart Engineering",
    "Problem Solving",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Hero Section with Spreading Text Animation */}
      <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)] pointer-events-none" />
        
        <span className="px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/80 rounded-full">
          2nd Year B.Tech Mechanical Engineering | SNJB COE
        </span>

        {/* Spreading Name Animation */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-normal animate-[spread_2.5s_ease-out_forwards] bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
          Akshatraj Kothalkar
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 font-light leading-relaxed">
          Passionate about Mechanical Systems, Manufacturing, Go-Kart Design, and AI Integration.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:kothalkarakshatraj@gmail.com"
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Contact Me
          </a>
          <a
            href="#certificates"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 transition-all"
          >
            View Certificates
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-3">
          Technical & Professional Core
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center font-medium text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificates" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-3">
          Verified Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 rounded-md">
                    {cert.badge}
                  </span>
                  <span className="text-xs text-slate-500">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex justify-between items-center text-xs text-slate-500">
                <span>Credential ID:</span>
                <span className="font-mono text-slate-400">{cert.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400 mb-8 border-l-4 border-cyan-500 pl-3">
          Experience & Activities
        </h2>
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
          <h3 className="text-lg font-bold text-slate-200">Go-Kart Club Member</h3>
          <p className="text-sm text-cyan-400">SNJB's College of Engineering</p>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Gaining hands-on exposure to mechanical fabrication, steering/braking mechanics, teamwork, and practical design problem-solving.
          </p>
        </div>
      </section>
    </main>
  );
}