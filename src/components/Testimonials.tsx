import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            75,172 GigaDesk users and counting
          </h2>
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6 text-left">
            <p className="text-lg text-gray-600">✓ Provides accurate and concise summaries for doctor visits and meeting notes.</p>
            <p className="text-lg text-gray-600">✓ Allows users to capture insights without the need for note-taking.</p>
            <p className="text-lg text-gray-600">✓ Offers cross-device syncing for convenience and flexibility.</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">AI-Generated Summary</p>
            <p className="mt-2 text-gray-400">Based on 4,900 Apple App Store reviews</p>
          </div>

          <div className="mt-8">
            <p className="font-medium">Ease of use</p>
            <p className="mt-2 text-gray-600">Very easy to use and understand</p>
            <p className="mt-2 text-sm text-gray-500">Mrz Durham • 6 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}