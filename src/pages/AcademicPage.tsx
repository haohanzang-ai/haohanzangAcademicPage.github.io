import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card/Card'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Music', href: '#music' },
  { label: 'Awards', href: '#awards' },
  { label: 'Projects', href: '#projects' },
  { label: 'Service', href: '#service' },
  { label: 'Contact', href: '#contact' },
]

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-neutral-900 pb-3 border-b-2 border-primary-600 inline-block">
      {title}
    </h2>
  </div>
)

const Badge: React.FC<{ children: React.ReactNode; color?: 'primary' | 'gold' | 'neutral' }> = ({
  children,
  color = 'primary',
}) => {
  const styles = {
    primary: 'bg-primary-50 text-primary-700',
    gold: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
    neutral: 'bg-neutral-100 text-neutral-700',
  }
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${styles[color]}`}>
      {children}
    </span>
  )
}

export const AcademicPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">

      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur shadow-sm border-b border-neutral-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className={`font-bold text-lg transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            Haohan Zang
          </a>
          <ul className="hidden md:flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    scrolled ? 'text-neutral-700' : 'text-primary-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:haohanzang@gmail.com"
            className={`hidden md:inline-block text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
              scrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-white/10 text-primary-100 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Cedar Park High School · Class of 2028
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Haohan Zang</h1>
          <p className="text-primary-200 text-xl mb-2 font-light">
            Student Researcher · Competitive Musician · STEM Leader
          </p>
          <p className="text-primary-300 text-sm mb-10">
            Weighted GPA: 5.260 &nbsp;·&nbsp; Unweighted GPA: 4.0 &nbsp;·&nbsp; Top 5.8% of Class
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { stat: '2×', label: 'International Awards' },
              { stat: '9×', label: '5A State Band Champion' },
              { stat: '100+', label: 'Service Hours' },
              { stat: '20+', label: 'Students Tutored' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-1">{item.stat}</div>
                <div className="text-primary-200 text-xs">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:haohanzang@gmail.com"
              className="flex items-center gap-2 bg-white text-primary-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-50 transition-colors text-sm"
            >
              haohanzang@gmail.com
            </a>
            <span className="flex items-center gap-2 bg-white/10 text-primary-100 px-5 py-2.5 rounded-lg text-sm">
              Cedar Park, TX &nbsp;·&nbsp; (737) 202-5004
            </span>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Research & Academic Experience" />
          <div className="space-y-5">
            {[
              {
                title: 'Agentic AI Research Mentorship',
                institution: 'Northwestern University',
                dates: 'Summer 2026',
                description:
                  'Conducting AI research under Professor Naichen Shi (Industrial Engineering & Mechanical Engineering). Responsibilities include designing experiments, collecting and analyzing data, and co-authoring a research paper for publication.',
                tags: ['Artificial Intelligence', 'Research Design', 'Data Analysis'],
              },
              {
                title: 'UT High School Research Academy — X-Plants Project',
                institution: 'University of Texas at Austin',
                dates: '2026',
                description:
                  'Completed a 5-week intensive research endorsement program through the UT High School Research Academy. Conducted an independent research project in plant biology, earning a formal university-level research endorsement.',
                tags: ['Plant Biology', 'Independent Research', '5-Week Endorsement'],
              },
              {
                title: 'miRcore Computational Biology Camp',
                institution: 'University of Michigan, Ann Arbor',
                dates: '2025',
                description:
                  'Conducted computational analysis of gene expression data in a collaborative research setting. Explored mechanisms of gene regulation, replication, and isolation using bioinformatics tools.',
                tags: ['Bioinformatics', 'Gene Expression', 'Computational Biology'],
              },
            ].map((item) => (
              <Card key={item.title} variant="outlined" padding="lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                  <span className="text-sm text-neutral-400 whitespace-nowrap">{item.dates}</span>
                </div>
                <p className="text-primary-600 font-medium text-sm mb-3">{item.institution}</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Education" />
          <Card variant="outlined" padding="lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">Cedar Park High School</h3>
                <p className="text-neutral-500 text-sm mb-6">Cedar Park, TX &nbsp;·&nbsp; Expected Graduation: May 2028</p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-700">5.260</div>
                    <div className="text-xs text-neutral-500 mt-1">Weighted GPA</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-700">4.0</div>
                    <div className="text-xs text-neutral-500 mt-1">Unweighted GPA</div>
                  </div>
                  <div className="text-center p-4 bg-primary-50 rounded-xl">
                    <div className="text-2xl font-bold text-primary-700">Top 5.8%</div>
                    <div className="text-xs text-neutral-500 mt-1">Class Rank</div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-700 mb-3">AP Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AP Human Geography (Score: 5)',
                      'AP Chemistry',
                      'AP Pre-Calculus',
                      'AP Computer Science',
                      'AP World History',
                    ].map((course) => (
                      <Badge key={course}>{course}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Leadership Experience" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Drum Major',
                org: 'Cedar Park High School Band',
                dates: '2026–2027',
                detail:
                  '9× Consecutive 5A State Champion. Sudler Shield Award Winner — the highest honor in marching band excellence.',
              },
              {
                title: 'President & Co-Founder',
                org: 'Chinese Club',
                dates: '2025–Present',
                detail:
                  'Founded and leads the school\'s Chinese culture and language organization, growing membership and programming.',
              },
              {
                title: 'Junior Team Captain',
                org: 'UIL Science',
                dates: '2026–2027',
                detail:
                  'Placed 8th individually in district competition. Led team to 3rd place across biology, chemistry, and physics combined.',
              },
              {
                title: 'Chapter Secretary',
                org: 'National Technical Honor Society',
                dates: '2026–2027',
                detail:
                  'Elected secretary of the NTHS chapter, supporting STEM recognition and academic excellence programs.',
              },
              {
                title: 'Chapter Secretary',
                org: 'Mu Alpha Theta / National Math Honor Society',
                dates: '2026–2027',
                detail:
                  'Elected secretary supporting math competitions, tutoring initiatives, and honor society programming.',
              },
              {
                title: 'Business & Outreach Promoter',
                org: 'FTC/FRC Robotics Team',
                dates: '2025–2026',
                detail:
                  '2× Consecutive 5A State Champion. Handled sponsorship outreach, community partnerships, and team promotion.',
              },
            ].map((item) => (
              <Card key={item.title} variant="elevated" hoverable padding="md">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-neutral-900 text-base">{item.title}</h3>
                  <span className="text-xs text-neutral-400 ml-3 whitespace-nowrap">{item.dates}</span>
                </div>
                <p className="text-primary-600 text-xs font-semibold uppercase tracking-wide mb-2">
                  {item.org}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Music" />
          <p className="text-neutral-600 mb-8 max-w-2xl leading-relaxed">
            Accomplished performer on clarinet and violin, competing and performing at district, state,
            national, and international levels across orchestral, wind ensemble, and pit orchestra settings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                award: '1st Prize Winner',
                event: 'International Clarinet Association Junior Bb Clareidoscope Competition',
                year: '2024–2025',
                highlight: true,
              },
              {
                award: 'Principal Clarinetist',
                event: 'Austin Youth Wind Ensemble',
                year: '2025–2026',
                highlight: false,
              },
              {
                award: 'First Violin',
                event: 'Austin Youth Symphony Orchestra',
                year: '2024–Present',
                highlight: false,
              },
              {
                award: 'Finalist — 12 of 300+ Participants',
                event: 'Cedar Park Young Artist Competition',
                year: '2024–2026',
                highlight: false,
              },
              {
                award: 'TMEA Region Band & Area Qualifier',
                event: 'Clarinet',
                year: '2024–2026',
                highlight: false,
              },
              {
                award: 'TMEA Region Orchestra & Area Qualifier',
                event: 'Violin',
                year: '2024–2026',
                highlight: false,
              },
              {
                award: 'Heller Award Nominee — Best Pit Orchestra',
                event: '"Titanic" & "Pippin" · Concertmaster',
                year: '2024–2026',
                highlight: false,
              },
              {
                award: 'Principal Clarinetist',
                event: 'Cedar Park High School Honor Band',
                year: '2025–Present',
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.event}
                className={`flex gap-3 p-4 rounded-xl border transition-colors ${
                  item.highlight
                    ? 'bg-primary-50 border-primary-200'
                    : 'bg-neutral-50 border-neutral-100'
                }`}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      item.highlight ? 'text-primary-800' : 'text-neutral-900'
                    }`}
                  >
                    {item.award}
                  </p>
                  <p className="text-xs text-neutral-600">{item.event}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Academic Awards & Competitions" />
          <div className="space-y-3">
            {[
              {
                award: 'Gold Medal',
                competition: 'British Biology Olympiad (UKBC)',
                detail: 'Ranked in the top 5% internationally in an advanced biology competition.',
                year: '2026',
              },
              {
                award: 'Honorable Mention',
                competition: 'USA Biology Olympiad — Center of Excellence',
                detail: 'Placed in the top 20% among 12,000+ participants nationwide.',
                year: '2026',
              },
              {
                award: 'Gold Medal',
                competition: 'British Biology Challenge (UKBC)',
                detail: '',
                year: '2025',
              },
              {
                award: 'Regional Competitor',
                competition: 'HOSA Biotechnology',
                detail: 'Competed in health science and biotechnology at the regional level.',
                year: '2024–2026',
              },
            ].map((item) => (
              <div
                key={item.competition}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-100 shadow-sm"
              >
                <span className="flex-shrink-0 bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {item.award}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-900">{item.competition}</p>
                  {item.detail && (
                    <p className="text-xs text-neutral-500 mt-0.5">{item.detail}</p>
                  )}
                </div>
                <span className="text-xs text-neutral-400 whitespace-nowrap">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Projects" />
          <div className="space-y-6">

            {/* WEBS */}
            <Card variant="outlined" padding="lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Professional Website Platform (WEBS)</h3>
                  <p className="text-primary-600 text-sm font-medium mt-0.5">Personal Engineering Project</p>
                </div>
                <span className="text-sm text-neutral-400 whitespace-nowrap">2026 – Present</span>
              </div>

              <div className="mb-5">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Mission</p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A design-system-first web platform built to demonstrate modern front-end engineering
                  practices. The goal is to produce a professional, scalable website that grows through
                  a structured component library, centralized design tokens, and version-controlled
                  design decisions — giving each interface element a single source of truth.
                </p>
              </div>

              <div className="mb-5">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Capabilities</p>
                <ul className="text-neutral-600 text-sm space-y-1.5">
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Component library with reusable, accessible UI primitives (Button, Card, Header) and variant APIs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Design tokens centralized in TypeScript for colors, typography, spacing, and shadows
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Storybook integration for interactive component documentation and visual testing
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    React + Vite build pipeline with TypeScript for type-safe, fast development
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Tailwind CSS utility layer wired to design tokens for consistent, maintainable styling
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Git-tracked design history with feature-branch workflow and descriptive commits
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Storybook', 'Git', 'Design Systems'].map(
                  (tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  )
                )}
              </div>
            </Card>

            {/* Weather Channel */}
            <Card variant="outlined" padding="lg">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Weather Channel Web App</h3>
                  <p className="text-primary-600 text-sm font-medium mt-0.5">Personal Engineering Project</p>
                </div>
                <span className="text-sm text-neutral-400 whitespace-nowrap">2025–2026</span>
              </div>

              <div className="mb-5">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Mission</p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A weather comparison web application built from scratch with vanilla JavaScript. The goal
                  was to explore real-world API integration, dynamic data rendering, and custom UI design
                  without relying on frameworks — strengthening core web fundamentals.
                </p>
              </div>

              <div className="mb-5">
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Capabilities</p>
                <ul className="text-neutral-600 text-sm space-y-1.5">
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Fetches and displays real-time meteorological data with dynamic rendering
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Side-by-side weather comparison view with fuel/energy efficiency analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-500 flex-shrink-0">▸</span>
                    Custom CSS styling with responsive layout and data visualization components
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'CSS', 'Web APIs', 'Data Visualization', 'Responsive Design'].map(
                  (tech) => (
                    <Badge key={tech} color="neutral">{tech}</Badge>
                  )
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section id="service" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Community Service" />
          <div className="flex items-center gap-4 mb-8 p-5 bg-primary-50 rounded-xl border border-primary-100">
            <div className="text-4xl font-bold text-primary-700">100+</div>
            <div>
              <div className="font-semibold text-neutral-900">Hours of Community Service</div>
              <div className="text-sm text-neutral-500">2025 – Present</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Big Future Ambassador',
                org: 'The College Board',
                detail:
                  'Promotes college access and awareness, helping students navigate the college application process and scholarship opportunities.',
              },
              {
                title: 'STEM Tutor',
                org: 'Independent',
                detail:
                  'Tutored 20+ students in advanced mathematics and science, improving academic understanding and standardized test performance.',
              },
              {
                title: 'Community Outreach Volunteer',
                org: 'Central Texas Food Bank',
                detail:
                  'Organized and distributed food to support local families experiencing food insecurity in the Central Texas region.',
              },
              {
                title: 'Musical Outreach Performer',
                org: 'Local Nursing Homes',
                detail:
                  'Performs classical music at nursing homes to support resident engagement, emotional well-being, and connection to the arts.',
              },
            ].map((item) => (
              <Card key={item.title} variant="elevated" hoverable padding="md">
                <h3 className="font-semibold text-neutral-900 text-sm mb-0.5">{item.title}</h3>
                <p className="text-primary-600 text-xs font-semibold uppercase tracking-wide mb-2">
                  {item.org}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="References" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Naichen Shi',
                title: 'Assistant Professor, Industrial Engineering & Mechanical Engineering',
                org: 'Northwestern University',
                email: 'naichen.shi@northwestern.edu',
              },
              {
                name: 'Allison Trueblood',
                title: 'Science Department Head',
                org: 'Cedar Park High School',
                email: 'Allison.Trueblood@leanderisd.org',
              },
              {
                name: 'Christopher Yee',
                title: 'Head Band Director',
                org: 'Cedar Park High School',
                email: 'Christopher.Yee@leanderisd.org',
              },
              {
                name: 'Dawn Marie Lindblade-Evans, DMA',
                title: 'Assistant Director, School of Music · Professor of Clarinet',
                org: 'University of Central Oklahoma',
                email: '',
              },
              {
                name: 'Mike Lebiras',
                title: 'Director, Austin Youth Wind Ensemble · Assistant Director of Bands',
                org: 'University of Texas at Austin',
                email: 'mlebrias@utexas.edu',
              },
            ].map((ref) => (
              <div
                key={ref.name}
                className="p-4 rounded-xl border border-neutral-100 bg-neutral-50"
              >
                <p className="font-semibold text-neutral-900 text-sm">{ref.name}</p>
                <p className="text-xs text-neutral-600 mt-0.5">{ref.title}</p>
                <p className="text-xs text-primary-600 font-medium mt-0.5">{ref.org}</p>
                {ref.email && (
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-xs text-neutral-400 hover:text-primary-600 transition-colors mt-1 inline-block"
                  >
                    {ref.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section
        id="contact"
        className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-primary-200 mb-10 max-w-md mx-auto leading-relaxed">
            Open to research opportunities, academic collaborations, music connections, and STEM mentorship.
          </p>
          <a
            href="mailto:haohanzang@gmail.com"
            className="inline-block bg-white text-primary-900 font-bold px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-colors text-lg mb-6"
          >
            haohanzang@gmail.com
          </a>
          <p className="text-primary-300 text-sm">Cedar Park, TX &nbsp;·&nbsp; (737) 202-5004</p>

          <div className="mt-16 pt-8 border-t border-white/10 text-primary-400 text-xs">
            © 2026 Haohan Zang · Built with React, Vite & Tailwind CSS
          </div>
        </div>
      </section>
    </div>
  )
}
