import React, { useState, useEffect } from 'react';
import carsalesImg from './assets/carsales.jpg';
import anuJohnImg from './assets/anu john.png';
import whistImg from './assets/whist.png';

function App() {
  // 1. The "Spotlight" Effect Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    document.title = "Chenwei Niu - A Tech Enthusiast to boost your business";
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-green selection:text-navy bg-black">
      
      {/* Background Spotlight Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(360px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.15), transparent 80%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* --- LEFT SIDE: HEADER (Fixed) --- */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
                <a href="/">Chenwei Niu</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
                Full Stack Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate">
                I build aesthetic, professional, and performant software for the future.
              </p>

              {/* Navigation Links */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {['About', 'Experience', 'Projects'].map((item) => (
                    <li key={item}>
                      <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                        <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-green group-focus-visible:text-green">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="https://github.com/Chenwei-Niu" target="_blank" rel="noreferrer">
                  GITHUB
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="https://www.linkedin.com/in/chenwei-niu-276b201b6/" target="_blank" rel="noreferrer">
                  LINKEDIN
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="https://leetcode.com/" target="_blank" rel="noreferrer">
                  LEETCODE
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="mailto:your.email@example.com" target="_blank" rel="noreferrer">
                  EMAIL
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="mailto:your.email@example.com" target="_blank" rel="noreferrer">
                  HIRE ME
                </a>
              </li>
            </ul>
          </header>

          {/* --- RIGHT SIDE: CONTENT (Scrollable) --- */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT SECTION */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-lightest-slate">About</h2>
              </div>
              <div>
                <p className="mb-4 text-slate">
                  From cracking admin privileges to bypass parental control of my family computer in 2013 to building enterprise software today, I’ve always been a tech enthusiast. My journey led to a Computer Science degree and a diverse portfolio, where I’ve developed applications for a<span className="text-green"> Chinese self-driving titan</span>, an <span className="text-green"> agile startup</span>, and an <span className="text-green">Australian aluminium industrial corporate</span>.
                </p>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-lightest-slate">Experience</h2>
              </div>
                <ol className="group/list">
                  {/* Job 1: ALSPEC (Current) */}
                  <JobCard 
                    date="Feb 2025 — Present"
                    title="Database Developer"
                    company="Alspec"
                    description="Optimizing the Soft Tech V6 quoting software by implementing complex SQL queries and VB.NET macros. Managing DevOps for MSSQL databases, including automated backups and code reviews."
                    skills={["SQL", "VB.NET", "MSSQL", "DevOps"]}
                    link="https://alspec.com.au"
                  />

                  {/* Job 2: Anzir (Internship) */}
                  <JobCard 
                    date="Dec 2024 — Mar 2025"
                    title="Software Engineer Intern"
                    company="Anzir"
                    description="Refactored the mobile app's localization module using Flutter, enabling real-time translation updates for global users. Streamlined the translation management workflow for the O&M team."
                    skills={["Flutter", "Dart", "Mobile Dev"]}
                    link="https://www.anzirtech.com/"
                  />

                  {/* Job 3: Outlier.ai (AI Experience) */}
                  <JobCard 
                    date="Nov 2024 — Present"
                    title="AI Training Data Annotator"
                    company="Outlier.ai"
                    description="Auditing Python-based AI outputs to refine Reinforcement Learning (RLHF) pipelines. Engineering high-fidelity multimodal training datasets to improve model alignment and logic."
                    skills={["Python", "RLHF", "Generative AI"]}
                    link="https://outlier.ai/"
                  />

                  {/* Job 4: Huawei (Big Tech Experience) */}
                  <JobCard 
                    date="Feb 2022 — Jun 2022"
                    title="Software Development Engineer"
                    company="Huawei Technologies"
                    description="Developed embedded C code for AITO electric vehicles (M5/M7/M9 models), enabling critical communication between SoC and MCU chips. Built Python automation scripts for smoke testing."
                    skills={["C", "Python", "Embedded Systems", "Automotive"]}
                    link="https://www.huawei.com/au/"
                  />
                </ol>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-lightest-slate">Projects</h2>
              </div>
              <ul className="group/list">
                <ProjectCard 
                  title="ANU Neuroscience Seminar Platform"
                  desc="A full-stack platform built for the ANU Institute of Neuroscience to aggregate and display seminar data. Features include a web crawler, elastic search, and a personalized email notification system based on user interests."
                  tech={["Next.js", "FastAPI", "PostgreSQL", "NLP/SpaCy"]}
                  link="https://github.com/Chenwei-Niu/John-Eccles-Institute-Project"
                  image={anuJohnImg}
                />
                <ProjectCard 
                  title="Android Car Trading App"
                  desc="A native Android application for buying and selling used cars (similar to Carsales). Implemented secure user authentication, real-time car listing uploads, and a search engine powered by scraped real-world data."
                  tech={["Java", "Android Studio", "SQLite", "Python"]}
                  link="https://github.com/Chenwei-Niu/COMP6442-Fake-Carsales"
                  image={carsalesImg}
                />
                <ProjectCard 
                  title="Whist Poker Game Architecture"
                  desc="Refactored a legacy Java game codebase using advanced design patterns to significantly improve maintainability. Extended the system by implementing AI-driven NPCs with distinct playing styles."
                  tech={["Java", "Design Patterns", "Game Theory", "AI"]}
                  link="https://github.com/Chenwei-Niu/SWEN30006-2020-S1"
                  image={whistImg}
                />
              </ul>
            </section>

            {/* FOOTER */}
            <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
              <p>
                Loosely drafted in <span className="text-white">Figma</span> and coded in <span className="text-white">Visual Studio Code</span> by yours truly. Built with <span className="text-white">React</span> and <span className="text-white">Tailwind CSS</span>, deployed with <span className="text-white">GitHub Pages</span>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Sub-Components
// ---------------------------------------------------------

function JobCard({ date, title, company, description, skills, link }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={date}>{date}</header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-tight text-lightest-slate group-hover:text-green focus-visible:text-green">
            <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight hover:text-green focus-visible:text-green group/link text-base">
              {/* This span makes the whole card clickable */}
              <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
              <span>
                {title} · <span className="inline-block">{company}</span>
                {/* Arrow icon that only shows if a link exists */}
                {link && <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span>}
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map(skill => (
              <li key={skill} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">{skill}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function ProjectCard({ title, desc, tech, link, image }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40">
        <div className="z-10 sm:col-span-2">
          <img src={image} alt={title} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30" />
        </div>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-tight text-lightest-slate group-hover:text-green focus-visible:text-green">
            <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-baseline font-medium leading-tight hover:text-green focus-visible:text-green group/link text-base">
              <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
              <span className="inline-block">
                {title} 
                {/* Arrow icon */}
                <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">{desc}</p>
          <ul className="mt-2 flex flex-wrap">
            {tech.map(t => (
               <li key={t} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">{t}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default App;