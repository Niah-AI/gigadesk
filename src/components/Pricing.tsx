import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      subheading: "See if you like it.",
      price: "0",
      features: [
        "30 minutes of monthly recording time",
        "Record audio or phone calls",
        "Background Recording in iOS and Android",
        "Best-in-class Transcription and Summary"
      ]
    },
    {
      name: "Standard",
      subheading: "Perfect for occasional needs",
      price: "12.99",
      features: [
        "5 Hours of monthly recording time",
        "Unlimited recording length",
        "Record audio or phone calls",
        "Background Recording in iOS and Android",
        "Best-in-class Transcription and Summary"
      ]
    },
    {
      name: "Pro",
      subheading: "Unleash advanced capabilities",
      price: "21.99",
      features: [
        "Unlimited recording time",
        "Unlimited recording length",
        "Record audio or phone calls",
        "Background Recording in iOS and Android",
        "Import Podcasts and YouTube Videos",
        "Best-in-class Transcription and Summary",
        "Unlimited Summary Customizations",
        "Web based dashboard"
      ],
      popular: true
    }
  ];

  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Start for free
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Upgrade as you need it.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm border ${
                plan.popular ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-50' : 'border-gray-100'
              } p-8 relative`}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500">{plan.subheading}</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="ml-2 text-gray-500">USD</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-lg ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}