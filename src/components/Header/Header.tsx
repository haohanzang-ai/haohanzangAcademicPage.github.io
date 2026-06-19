import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <h1 className="text-xl font-bold text-neutral-900">WEBS</h1>
        </div>

        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="#home"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#docs"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Documentation
            </a>
          </li>
        </ul>

        <div className="flex gap-2">
          <button className="text-neutral-700 hover:text-primary-600 transition-colors px-3 py-2">
            Sign In
          </button>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
