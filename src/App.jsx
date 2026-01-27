import React, { useState, useEffect } from 'react';

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

  return (
    <div className="min-h-screen font-sans selection:bg-green selection:text-navy">
      
      {/* Background Spotlight Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.15), transparent 80%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* --- LEFT SIDE: HEADER (Fixed) --- */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
                <a href="/">Your Name</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
                Senior Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate">
                I build pixel-perfect, accessible, and performant web experiences for the future.
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
                <a className="block hover:text-green" href="https://github.com" target="_blank" rel="noreferrer">
                  GITHUB
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-green" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LINKEDIN
                </a>
              </li>
            </ul>
          </header>

          {/* --- RIGHT SIDE: CONTENT (Scrollable) --- */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT SECTION */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 text-slate">
                  Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding. Fast-forward to today, and I’ve had the privilege of building software for an <span className="text-green">advertising agency</span>, a <span className="text-green">start-up</span>, and a <span className="text-green">huge corporation</span>.
                </p>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Experience</h2>
              </div>
              <ol className="group/list">
                <JobCard 
                  date="2024 — Present"
                  title="Senior Frontend Engineer"
                  company="Tech Corp"
                  description="Build and maintain critical components used to construct the frontend across the whole product."
                  skills={["React", "Tailwind", "TypeScript"]}
                />
                <JobCard 
                  date="2021 — 2024"
                  title="Frontend Developer"
                  company="Creative Agency"
                  description="Developed and styled interactive web apps for Apple Music, including the UI for their annual music recap experience."
                  skills={["Vue", "SCSS", "JavaScript"]}
                />
              </ol>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
               <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">Projects</h2>
              </div>
              <ul className="group/list">
                <ProjectCard 
                  title="Spotify Profile Integration"
                  desc="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks."
                  tech={["React", "Express", "Spotify API"]}
                />
                 <ProjectCard 
                  title="Halcyon Theme"
                  desc="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace."
                  tech={["VS Code", "JSON"]}
                />
              </ul>
            </section>

            {/* FOOTER */}
            <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
              <p>
                Loosely designed in <span className="text-white">Figma</span> and coded in <span className="text-white">Visual Studio Code</span> by yours truly. Built with <span className="text-white">React</span> and <span className="text-white">Tailwind CSS</span>, deployed with <span className="text-white">GitHub Pages</span>.
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

function JobCard({ date, title, company, description, skills }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={date}>{date}</header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-tight text-lightest-slate group-hover:text-green focus-visible:text-green">
            <div>
              <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
              <span>{title} · <span className="inline-block">{company}</span></span>
            </div>
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

function ProjectCard({ title, desc, tech }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="z-10 sm:col-span-8">
          <h3 className="font-medium leading-tight text-lightest-slate group-hover:text-green focus-visible:text-green">
            <a href="#" className="inline-flex items-baseline font-medium leading-tight hover:text-green focus-visible:text-green group/link text-base">
              <span className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></span>
              <span className="inline-block">{title} <span className="inline-block transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1">↗</span></span>
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