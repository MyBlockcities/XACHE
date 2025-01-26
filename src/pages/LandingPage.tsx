import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bitcoin, CreditCard, Globe, Lock, ChevronDown, Twitter, Disc as Discord, Brain, Zap, BarChart3, Shield } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

function LandingPage() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 700}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartTrading = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#0A0B0F] text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ParticleBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-transparent" />
        </div>
        <div 
          ref={heroRef}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <div className="mb-8 relative">
            <Brain 
              className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-pulse relative z-10"
            />
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full transform scale-150" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient bg-[length:200%_auto]">
            Welcome to XACHE
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 [text-shadow:_0_2px_10px_rgb(6_182_212_/_30%)]">
            The Simple, Smart Way to Grow Your Crypto
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Automated crypto trading. Real-time rewards. Maximum simplicity. Join thousands of users leveraging the power of smart automation to trade and grow their digital assets.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleStartTrading}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden"
            >
              <span className="relative z-10">Start Trading Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
              Learn More
              <ChevronDown className="group-hover:animate-bounce" />
            </button>
          </div>
          <p className="mt-4 text-gray-500">Sign up in under 2 minutes – no experience required.</p>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Why Choose XACHE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Real-Time Analytics',
                desc: 'Stay informed with real-time performance tracking. Monitor your portfolio\'s growth and trading activity at a glance.'
              },
              {
                icon: Globe,
                title: 'Global Trading',
                desc: 'Access markets worldwide 24/7. Our automated systems work around the clock to find the best trading opportunities.'
              },
              {
                icon: Shield,
                title: 'Bank-Grade Security',
                desc: 'Your assets are protected by military-grade encryption and multi-layer security protocols.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                desc: 'Execute trades at lightning speed. Our advanced algorithms ensure you never miss an opportunity.'
              },
              {
                icon: Bitcoin,
                title: 'Multi-Asset Support',
                desc: 'Trade a wide range of cryptocurrencies and digital assets from a single platform.'
              },
              {
                icon: Lock,
                title: 'Smart Automation',
                desc: 'Let our AI-powered trading scripts do the work. Set your strategy and let the system execute trades automatically.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative">
                  <div className="mb-4 p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900/50 to-transparent relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '$2.5M+', label: 'Trading Volume' },
              { value: '10,000+', label: 'Active Users' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 relative">
                  <span className="relative z-10">{stat.value}</span>
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 [text-shadow:_0_2px_10px_rgb(6_182_212_/_30%)]">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of traders who are already growing their crypto portfolio with XACHE.
          </p>
          <button
            onClick={handleStartTrading}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden"
          >
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="relative w-fit">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
              </div>
              <p className="text-gray-400">
                The future of crypto trading is here.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="group relative">
                  <Twitter className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a href="#" className="group relative">
                  <Discord className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 XACHE Card Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;