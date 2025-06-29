import React from 'react';
import { CircuitBoard, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="container-enterprise py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Omniflow.id</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Transforming businesses worldwide with integrated ERP solutions. Join thousands of companies that trust us to streamline their operations and accelerate growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>contact@omniflow.id</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+62 (21) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#modules" className="text-blue-100 hover:text-white transition-colors">HRIS</a></li>
              <li><a href="#modules" className="text-blue-100 hover:text-white transition-colors">Accounting</a></li>
              <li><a href="#modules" className="text-blue-100 hover:text-white transition-colors">CRM</a></li>
              <li><a href="#modules" className="text-blue-100 hover:text-white transition-colors">Inventory</a></li>
              <li><a href="#modules" className="text-blue-100 hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-blue-100 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/support" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-100">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-blue-800">
            <p className="text-blue-100">
              &copy; {new Date().getFullYear()} Omniflow.id. All rights reserved. Built with excellence for enterprise success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}