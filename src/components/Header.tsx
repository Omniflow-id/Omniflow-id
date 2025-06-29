import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CircuitBoard } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full backdrop-enterprise shadow-enterprise z-50">
      <nav className="container-enterprise py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <CircuitBoard className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-enterprise-primary">Omniflow.id</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/modules/hris" className="nav-link">HRIS</Link>
            <Link to="/blog" className="nav-link">Insights</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/contact" className="btn-primary ml-4">
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 p-6 bg-white rounded-2xl shadow-enterprise-lg border border-gray-100">
            <div className="space-y-4">
              <Link to="/" className="block nav-link text-lg">Home</Link>
              <Link to="/modules/hris" className="block nav-link text-lg">HRIS</Link>
              <Link to="/blog" className="block nav-link text-lg">Insights</Link>
              <Link to="/contact" className="block nav-link text-lg">Contact</Link>
              <Link to="/contact" className="btn-primary w-full mt-4">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}