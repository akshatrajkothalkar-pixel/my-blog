"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const certificates = [
    {
      title: "Agentic AI Certified Foundations Associate",
      issuer: "Oracle University",
      date: "August 09, 2026",
      id: "330461297AAI26OFA",
      badge: "AI & AUTOMATION",
    },
    {
      title: "Bajaj Manufacturing Systems Certification",
      issuer: "Bajaj Auto Ltd. (CSR Initiative)",
      date: "July 31, 2026",
      id: "526041-36-2026-07-31",
      badge: "MANUFACTURING",
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

  const works = [
    {
      number: "01",
      title: "MECHANICAL DESIGN",
      text: "Engineering concepts, CAD thinking and practical mechanical design.",
    },
    {
      number: "02",
      title: "GO-KART ENGINEERING",
      text: "Hands-on mechanical systems, fabrication and vehicle engineering.",
    },
    {
      number: "03",
      title: "MANUFACTURING",
      text: "Manufacturing systems, process understanding and industrial thinking.",
    },
    {
      number: "04",
      title: "AI × AUTOMATION",
      text: "Exploring the intersection of artificial intelligence and engineering.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 4200);

    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#030609] text-white overflow-hidden selection:bg-cyan-400 selection:text-black">

      {/* =========================================================
          CINEMATIC INTRO
      ========================================================= */}
      {intro && (
        <div className="fixed inset-0 z-[9999] bg-[#020405] flex items-center justify-center overflow-hidden intro-screen">

          <div className="absolute inset-0 industrial-grid opacity-40" />

          <div
            className="absolute w-[500px] h-[500px] rounded-full border border-cyan-400/10"
            style={{
              transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
            }}
          />

          <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-400/10 animate-[spin_12s_linear_infinite]" />

          <div className="absolute w-[260px] h-[260px] rounded-full border border-white/10 border-dashed animate-[spin_8s_linear_infinite_reverse]" />

          <div className="relative text-center px-5">

            <p className="text-[10px] sm:text-xs tracking-[0.6em] text-cyan-400 mb-5 intro-small">
              ENGINEERING / TECHNOLOGY / CREATIVE
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase intro-name">
              AKSHATRAJ
            </h1>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-[0.15em] text-slate-400 mt-2 intro-lastname">
              KOTHALKAR
            </h2>

            <div className="mt-8 mx-auto w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent intro-line" />

            <p className="mt-5 text-[9px] tracking-[0.45em] text-slate-600 intro-small">
              INITIALIZING PORTFOLIO
            </p>

          </div>
        </div>
      )}

      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 industrial-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="scanline" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-10 py-5 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-white/5">

        <div className="font-black tracking-widest text-sm">
          AK<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] tracking-[0.25em] text-slate-500 uppercase">
          <a href="#works" className="hover:text-cyan-400 transition-colors">
            Works
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>

          <a
            href="#certificates"
            className="hover:text-cyan-400 transition-colors"
          >
            Certificates
          </a>

          <a href="#connect" className="hover:text-cyan-400 transition-colors">
            Connect
          </a>
        </div>

        <div className="text-[9px] tracking-[0.25em] text-cyan-400">
          SYSTEM / ONLINE
        </div>

      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-5 pt-24">

        <div
          className="absolute right-[10%] top-[25%] w-40 h-40 border border-cyan-400/10 rounded-full"
          style={{
            transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
          }}
        />

        <div className="max-w-7xl w-full grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          <div>

            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[1px] bg-cyan-400" />

              <span className="text-[10px] tracking-[0.4em] text-cyan-400 uppercase">
                Personal Engineering Interface
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[8rem] leading-[0.85] font-black tracking-[-0.06em] uppercase">
              <span className="block text-white">
                AKSHATRAJ
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-slate-500">
                KOTHALKAR
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm sm:text-base text-slate-400 leading-7">
              Mechanical engineering student building at the intersection of
              mechanical systems, manufacturing, automation and emerging AI.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#works"
                className="group px-7 py-4 bg-cyan-400 text-black font-black text-xs tracking-[0.2em] uppercase hover:bg-white transition-all"
              >
                Explore My Work

                <span className="ml-3 group-hover:ml-5 transition-all">
                  →
                </span>
              </a>

              <a
                href="mailto:kothalkarakshatraj@gmail.com"
                className="px-7 py-4 border border-white/10 bg-white/[0.03] text-white font-bold text-xs tracking-[0.2em] uppercase hover:border-cyan-400/60 transition-all"
              >
                Contact
              </a>

            </div>

            <div className="mt-12 grid grid-cols-3 max-w-lg border-t border-white/10 pt-6">

              <div>
                <div className="text-2xl font-black text-cyan-400">
                  02+
                </div>

                <div className="text-[8px] tracking-[0.25em] text-slate-600 mt-1">
                  CERTIFICATIONS
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">
                  06
                </div>

                <div className="text-[8px] tracking-[0.25em] text-slate-600 mt-1">
                  CORE SKILLS
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">
                  ∞
                </div>

                <div className="text-[8px] tracking-[0.25em] text-slate-600 mt-1">
                  POSSIBILITIES
                </div>
              </div>

            </div>

          </div>

          {/* INDUSTRIAL CORE */}

          <div className="hidden lg:flex relative w-72 h-72 items-center justify-center">

            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite]" />

            <div className="absolute inset-8 rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-16 rounded-full border border-cyan-400/20" />

            <div className="w-20 h-20 rounded-full border border-cyan-400 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.25)] flex items-center justify-center">
              <span className="text-xl font-black">
                AK
              </span>
            </div>

            <div className="absolute top-0 text-[8px] tracking-[0.3em] text-cyan-400">
              CORE
            </div>

            <div className="absolute bottom-0 text-[8px] tracking-[0.3em] text-slate-600">
              ENGINEERING SYSTEM
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          WORKS
      ========================================================= */}
      <section
        id="works"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 py-32"
      >

        <div className="flex items-end justify-between mb-14 border-b border-white/10 pb-6">

          <div>

            <p className="text-[9px] tracking-[0.45em] text-cyan-400 mb-3">
              01 / SELECTED WORK
            </p>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">
              ENGINEERING
              <br />
              <span className="text-slate-600">
                SYSTEMS
              </span>
            </h2>

          </div>

          <div className="hidden sm:block text-right text-[9px] tracking-[0.3em] text-slate-600">
            INDUSTRIAL PORTFOLIO
            <br />
            REV. 2026
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">

          {works.map((work) => (

            <div
              key={work.number}
              className="group relative min-h-[300px] bg-[#05090c] p-8 sm:p-10 overflow-hidden hover:bg-[#081116] transition-all duration-700"
            >

              <div className="absolute right-8 top-8 text-[10px] tracking-[0.3em] text-slate-700 group-hover:text-cyan-400 transition-colors">
                {work.number}
              </div>

              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full border border-cyan-400/5 group-hover:scale-150 transition-transform duration-1000" />

              <div className="relative z-10 h-full flex flex-col justify-between">

                <div>

                  <div className="w-12 h-[2px] bg-cyan-400 mb-8 group-hover:w-24 transition-all duration-500" />

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight group-hover:text-cyan-300 transition-colors">
                    {work.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-500 max-w-md">
                    {work.text}
                  </p>

                </div>

                <div className="mt-10 flex items-center justify-between text-[9px] tracking-[0.3em] text-slate-600 uppercase">

                  <span>
                    Explore System
                  </span>

                  <span className="text-cyan-400 group-hover:translate-x-2 transition-transform">
                    →
                  </span>

                </div>

              </div>
            </div>

          ))}

        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section
        id="skills"
        className="relative z-10 border-y border-white/10 bg-white/[0.015]"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-28">

          <p className="text-[9px] tracking-[0.45em] text-cyan-400 mb-4">
            02 / CAPABILITIES
          </p>

          <h2 className="text-4xl sm:text-6xl font-black uppercase mb-14">
            CORE <span className="text-slate-600">SYSTEMS</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {skills.map((skill, index) => (

              <div
                key={skill}
                className="group relative p-7 border border-white/10 bg-[#05090c] overflow-hidden hover:border-cyan-400/40 transition-all"
              >

                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />

                <div className="text-[9px] tracking-[0.3em] text-slate-700 mb-8">
                  0{index + 1}
                </div>

                <div className="font-bold text-slate-200 group-hover:text-white transition-colors">
                  {skill}
                </div>

                <div className="mt-5 h-[2px] bg-white/5 overflow-hidden">

                  <div className="h-full w-0 group-hover:w-full bg-cyan-400 transition-all duration-700" />

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CERTIFICATIONS
      ========================================================= */}
      <section
        id="certificates"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 py-32"
      >

        <div className="mb-14">

          <p className="text-[9px] tracking-[0.45em] text-cyan-400 mb-4">
            03 / VERIFIED CREDENTIALS
          </p>

          <h2 className="text-4xl sm:text-6xl font-black uppercase">
            CERTIFICATION
            <span className="text-slate-600">
              {" "}ARCHIVE
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm text-slate-500 leading-7">
            A growing archive of verified learning, engineering and technology
            credentials.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-5">

          {certificates.map((cert, index) => (

            <article
              key={cert.id}
              className="group relative border border-white/10 bg-[#05090c] p-7 sm:p-9 overflow-hidden hover:border-cyan-400/40 transition-all duration-500"
            >

              <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-cyan-400/10" />

              <div className="flex justify-between items-start gap-5">

                <span className="text-[8px] tracking-[0.25em] px-3 py-2 border border-cyan-400/20 text-cyan-400">
                  {cert.badge}
                </span>

                <span className="text-[9px] text-slate-600">
                  {cert.date}
                </span>

              </div>

              <div className="mt-14">

                <div className="text-[9px] tracking-[0.3em] text-slate-700 mb-4">
                  CREDENTIAL / 0{index + 1}
                </div>

                <h3 className="text-2xl font-black leading-tight group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  {cert.issuer}
                </p>

              </div>

              <div className="mt-12 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-2 text-[9px]">

                <span className="text-slate-700 uppercase tracking-widest">
                  Credential ID
                </span>

                <span className="font-mono text-slate-500">
                  {cert.id}
                </span>

              </div>

            </article>

          ))}

        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.015]">

        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-28">

          <p className="text-[9px] tracking-[0.45em] text-cyan-400 mb-4">
            04 / EXPERIENCE
          </p>

          <h2 className="text-4xl sm:text-6xl font-black uppercase mb-14">
            FIELD <span className="text-slate-600">ACTIVITY</span>
          </h2>

          <div className="relative border-l border-cyan-400/30 pl-8 sm:pl-12">

            <div className="absolute -left-[5px] top-2 w-2 h-2 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            <p className="text-[9px] tracking-[0.3em] text-cyan-400">
              SNJB COLLEGE OF ENGINEERING
            </p>

            <h3 className="mt-3 text-2xl sm:text-3xl font-black">
              GO-KART CLUB MEMBER
            </h3>

            <p className="mt-5 max-w-2xl text-sm text-slate-500 leading-7">
              Gaining hands-on exposure to mechanical fabrication,
              steering/braking mechanics, teamwork and practical engineering
              problem-solving.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          LINKEDIN
      ========================================================= */}
      <section
        id="connect"
        className="relative z-10 min-h-[70vh] flex items-center justify-center px-5"
      >

        <div className="text-center max-w-3xl">

          <p className="text-[9px] tracking-[0.5em] text-cyan-400 mb-6">
            05 / PROFESSIONAL NETWORK
          </p>

          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tight">
            LET&apos;S
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              CONNECT.
            </span>
          </h2>

          <p className="mt-7 text-sm text-slate-500">
            Follow the engineering journey, projects and professional updates.
          </p>

          {/* YOUR LINKEDIN PROFILE */}

          <a
            href="https://www.linkedin.com/in/akshatraj-kothalkar-255279375/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 px-9 py-5 bg-cyan-400 text-black font-black text-xs tracking-[0.25em] uppercase hover:bg-white transition-all duration-300"
          >
            Connect on LinkedIn →
          </a>

        </div>
      </section>

      {/* =========================================================
          FINAL THANK YOU
      ========================================================= */}
      <section className="relative z-10 min-h-[55vh] flex flex-col items-center justify-center text-center border-t border-white/10">

        <div className="w-20 h-[1px] bg-cyan-400 mb-10" />

        <p className="text-[9px] tracking-[0.6em] text-slate-600 mb-6">
          END OF TRANSMISSION
        </p>

        <h2 className="text-4xl sm:text-6xl font-black uppercase">
          THANK YOU
        </h2>

        <p className="mt-5 text-sm text-slate-600 tracking-wide">
          Thanks for entering the world of Akshatraj Kothalkar.
        </p>

        <div className="mt-14 text-[9px] tracking-[0.4em] text-cyan-400">
          AK / 2026
        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="relative z-10 border-t border-white/10 px-5 sm:px-10 py-8 flex flex-col sm:flex-row justify-between gap-3 text-[8px] tracking-[0.3em] text-slate-700 uppercase">

        <span>
          Akshatraj Kothalkar
        </span>

        <span>
          Mechanical Engineering × Technology
        </span>

        <span>
          Portfolio / 2026
        </span>

      </footer>

      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style jsx global>{`

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #030609;
        }

        .industrial-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 45px 45px;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(34,211,238,0.25);
          box-shadow: 0 0 25px rgba(34,211,238,0.4);
          animation: scan 6s linear infinite;
        }

        .intro-screen {
          animation: introExit 1.2s ease 3.2s forwards;
        }

        .intro-name {
          animation:
            namePop 1.2s cubic-bezier(.16,1,.3,1) .25s both,
            nameExpand 1.4s cubic-bezier(.7,0,.84,0) 2.3s forwards;
        }

        .intro-lastname {
          animation:
            lastNameIn 1s cubic-bezier(.16,1,.3,1) .55s both,
            lastNameOut 1.1s ease 2.45s forwards;
        }

        .intro-small {
          animation: fadeUp .8s ease .9s both;
        }

        .intro-line {
          animation: lineGrow 1s ease 1s both;
        }

        @keyframes namePop {

          0% {
            opacity: 0;
            transform: scale(.25);
            filter: blur(20px);
            letter-spacing: .5em;
          }

          60% {
            opacity: 1;
            transform: scale(1.08);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: scale(1);
            letter-spacing: -.04em;
          }

        }

        @keyframes nameExpand {

          0% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }

          100% {
            opacity: 0;
            transform: scale(9);
            filter: blur(25px);
            letter-spacing: .2em;
          }

        }

        @keyframes lastNameIn {

          from {
            opacity: 0;
            transform: translateY(25px);
            letter-spacing: .8em;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: .15em;
          }

        }

        @keyframes lastNameOut {

          to {
            opacity: 0;
            transform: translateY(-30px);
            filter: blur(15px);
          }

        }

        @keyframes fadeUp {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes lineGrow {

          from {
            width: 0;
            opacity: 0;
          }

          to {
            width: 10rem;
            opacity: 1;
          }

        }

        @keyframes introExit {

          0% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

        }

        @keyframes scan {

          0% {
            transform: translateY(0);
          }

          100% {
            transform: translateY(100vh);
          }

        }

        ::selection {
          background: #22d3ee;
          color: #000;
        }

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

        }

      `}

      </style>

    </main>
  );
}