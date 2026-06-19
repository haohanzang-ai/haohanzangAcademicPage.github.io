import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-h1 text-neutral-900 mb-6">
            Professional Website
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl">
            Built with a design system first approach. Modern, attractive, and designed for growth.
            Featuring reusable components, design tokens, and persistent project memory.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h2 className="text-h2 text-neutral-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-h3 text-neutral-900 mb-4">Design System</h3>
              <p className="text-neutral-600">
                Centralized design tokens and reusable components for consistency across the entire website.
              </p>
            </Card>

            <Card>
              <h3 className="text-h3 text-neutral-900 mb-4">Storybook</h3>
              <p className="text-neutral-600">
                Interactive component documentation. See all components and their variants in one place.
              </p>
            </Card>

            <Card>
              <h3 className="text-h3 text-neutral-900 mb-4">Version Control</h3>
              <p className="text-neutral-600">
                Git integration tracks design evolution and enables collaborative development.
              </p>
            </Card>
          </div>
        </section>

        {/* Project Status */}
        <section className="mt-20 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-h2 text-neutral-900 mb-6">Project Setup</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-lg">Git repository initialized</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-lg">Project documentation created</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-lg">Design system and brand guidelines</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <span className="text-lg">Component library structure</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <span className="text-lg text-neutral-600">Next: Install dependencies with npm install</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-neutral-400">
            Built with React, Vite, Tailwind CSS, and Storybook
          </p>
          <p className="text-center text-neutral-500 text-sm mt-2">
            © 2026 Professional Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
