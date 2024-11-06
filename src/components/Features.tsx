import React from 'react';
import { Mic, FileText, Phone, Import, Brain, Share, Languages, Command } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Record",
      description: "Effortless audio recording on iPhone, iPad, & Mac. Unlimited recording, background capability, one-tap start."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Transcribe",
      description: "Top-notch transcription: Fast, multilingual support."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "Capture calls: ID recognition, secure storage."
    },
    {
      icon: <Import className="h-6 w-6" />,
      title: "Import",
      description: "Import voicemails, notes: Podcast player compatibility."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Summarize",
      description: "Summarize with highlights: Custom lengths, formats."
    },
    {
      icon: <Share className="h-6 w-6" />,
      title: "Share",
      description: "Share audio, summary, or transcript: URL publish, PDF."
    },
    {
      icon: <Languages className="h-6 w-6" />,
      title: "Languages",
      description: "Multi-language support: Accurate transcription, language customization."
    },
    {
      icon: <Command className="h-6 w-6" />,
      title: "Siri",
      description: "Siri shortcut compatible: iPhone 15 action button recording."
    }
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Take Your AI Companion Anywhere, Anytime
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Embrace spontaneity. Life's important moments unfold beyond the confines of the office. Capture them with GigaDesk.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}