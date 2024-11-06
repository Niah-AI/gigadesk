import React from 'react';
import { ArrowRight, Mic, FileText, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="block">Fed up with taking notes</span>
            <span className="block text-blue-600">during meetings?</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            GigaDesk is the AI-powered transcription and summarization app for audio recordings and phone calls. Capturing and understanding crucial information, wherever you are.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
              Download on the App Store <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
              Download on Google Play <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-semibold mb-4">One button is all it takes to record</p>
          <p className="text-lg text-gray-500 mb-8">Over 26,179,858 minutes of audio have been processed with GigaDesk</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Mic className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Record Audio</h3>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Transcribe Audio</h3>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold">Summarize Audio</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}