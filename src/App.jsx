import React, { useState } from 'react';
import { ArrowRight, FileText, Zap, CheckCircle, Code, Lock, Sparkles, X } from 'lucide-react';

// Create a shared button class with a more contrasting color scheme
const buttonClasses = `
  transition-all duration-300 
  bg-gray-800 text-white 
  hover:bg-gradient-to-r hover:from-gray-800 hover:via-blue-900 hover:to-gray-800 
  hover:shadow-xl hover:shadow-blue-900/10
`;

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="font-serif text-lg text-slate-900 hover:text-slate-700 transition-colors">Computable</div>
      <a 
        href="https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding?back=1&month=2025-01"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full px-4 py-2 text-sm font-semibold ${buttonClasses}`}
      >
        Contact Us
      </a>
    </div>
  </nav>
);

const CodeDemo = () => (
  <div className="rounded-2xl bg-slate-900 p-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-3 w-3 rounded-full bg-rose-500" />
      <div className="h-3 w-3 rounded-full bg-amber-500" />
      <div className="h-3 w-3 rounded-full bg-emerald-500" />
    </div>
    <pre className="text-sm">
      <code className="text-slate-300">{`// Transform policy to executable code
const policy = await computable.translate({
  document: policyFile,
  type: 'auto_insurance'
});

// Get instant coverage decision
const decision = await computable.check({
  policy_id: policy.id,
  claim: {
    type: 'collision',
    amount: 5000
  }
});`}</code>
    </pre>
  </div>
);

// Add this new component for the animated badge
const MarketBadge = () => (
  <div className="inline-flex items-center rounded-full bg-slate-900 px-6 py-2 text-sm text-white mb-8">
    <Sparkles className="mr-2 h-4 w-4" />
    <span>Transforming $1.8T insurance industry</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <MarketBadge />
            <h1 className="font-serif text-6xl lg:text-7xl tracking-tight text-slate-900 mb-8">
              <span className="block mb-2">Policy to code.</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              We transform complex insurance contracts into machine-readable code, enabling instant processing and automated decisions at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="transform transition-all duration-500 hover:scale-[1.02]">
              <CodeDemo />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="font-serif text-3xl text-slate-900 mb-6">
                Turn policies into code
              </h2>
              <p className="text-slate-600 mb-8">
                Upload any insurance policy and get back executable code through our API. Enable instant decisions and automated processing at scale.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <Lock className="mr-2 h-4 w-4" />
                  SOC2 Compliant
                </div>
                <div className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  99.9% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-slate-900 mb-4">Built for enterprise scale</h2>
            <p className="text-lg text-slate-600">Powerful features that transform how insurance works</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Policy Translation',
                description: 'Convert any insurance policy into executable code through our API.'
              },
              {
                icon: Zap,
                title: 'Instant Processing',
                description: 'Make coverage decisions and process claims in milliseconds.'
              },
              {
                icon: Lock,
                title: 'Enterprise Security',
                description: 'Bank-grade security with SOC2 compliance and encryption.'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-8 w-8 mb-6 text-indigo-600 transform transition-transform group-hover:scale-110" />
                <h3 className="font-serif text-xl text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-slate-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 mb-6">
              Transform your insurance operations with our enterprise solution.
            </p>
            <a
              href="https://calendly.com/swiftlaw/swiftlaw-ai-drafting-assistant-onboarding?back=1&month=2025-01"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block rounded-lg px-6 py-2 text-sm font-semibold ${buttonClasses}`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer with black background */}
      <footer className="bg-black text-slate-400">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="font-serif text-xl text-white mb-4">Computable</div>
              <p className="text-sm">
                Transforming insurance policies into executable code for instant processing and automated decisions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:hello@computable.ai" className="block text-sm hover:text-white transition-colors">
                  hello@computable.ai
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Computable. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 