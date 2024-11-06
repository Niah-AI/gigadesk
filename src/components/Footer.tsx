import React from 'react';
import { Wallet2, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Wallet2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">GigaDesk</span>
            </div>
            <p className="mt-4 text-sm">
              Making business finance management simple, intelligent, and secure.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Features</a></li>
              <li><a href="#" className="text-sm hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-sm hover:text-white">Security</a></li>
              <li><a href="#" className="text-sm hover:text-white">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About</a></li>
              <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white">API Status</a></li>
              <li><a href="#" className="text-sm hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GigaDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}