import React from 'react';
import { Play } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="flex items-center">
          <Play className="w-8 h-8 text-emerald-400" fill="currentColor" />
          <span className="ml-2 text-xl font-bold">StreamFlow</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-16 pb-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Join the Future of Digital Creation
          </h1>
          <p className="text-gray-400 text-xl">
            Transform your ideas into reality. Start your journey with us today.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl p-8 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-colors"
                placeholder="Your Company"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-emerald-400"
            >
              Get Started
            </button>
          </form>
        </div>
      </main>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-emerald-400/10 to-transparent rotate-12 transform-gpu" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent -rotate-12 transform-gpu" />
      </div>
    </div>
  );
}

export default App;