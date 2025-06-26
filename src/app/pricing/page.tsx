'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, MessageSquare, Phone, Zap, BarChart3, Shield } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  priceMonthly: number;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
}

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: isAnnual ? '$239' : '$299',
      priceMonthly: isAnnual ? 239 : 299,
      description: 'Perfect for small businesses getting started with AI agent building',
      features: [
        'Up to 1,000 conversations/month',
        '1 AI agent (Voice, WhatsApp, or Email)',
        'YAML prompt builder access',
        'Basic industry templates',
        'Voice selection (6 options)',
        '5 CRM integrations',
        'Email support',
        '14-day free trial'
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outline'
    },
    {
      name: 'Professional',
      price: isAnnual ? '$799' : '$999',
      priceMonthly: isAnnual ? 799 : 999,
      description: 'Ideal for growing businesses ready to scale with multiple AI agents',
      features: [
        'Up to 10,000 conversations/month',
        '3 AI agents (Voice + WhatsApp + Email)',
        'Full admin panel access',
        'All industry templates',
        'Advanced voice options',
        'Script upload & website import',
        'Custom call cycling rules',
        '50+ CRM integrations',
        'Priority support',
        'A/B testing & lead scoring'
      ],
      popular: true,
      buttonText: 'Get Started',
      buttonVariant: 'default'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceMonthly: 0,
      description: 'Tailored agent building platform for large organizations',
      features: [
        'Unlimited conversations',
        'Unlimited AI agents',
        'White-label admin panel',
        'Custom agent templates',
        'Voice cloning & custom voices',
        'Advanced prompt engineering',
        'Custom integrations & APIs',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security & compliance'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline'
    }
  ];

  const addOns = [
    {
      name: 'Additional Agent',
      price: '$199/month',
      description: 'Add more AI agents with unique templates and voices'
    },
    {
      name: 'Custom Voice Training',
      price: '$499/month',
      description: 'Train AI voices to match your brand or specific personas'
    },
    {
      name: 'Advanced Analytics',
      price: '$149/month',
      description: 'Detailed conversation analysis and ROI tracking'
    },
    {
      name: 'White-label Admin',
      price: '$999/month',
      description: 'Branded admin panel for agencies and resellers'
    }
  ];

  const handleContactSales = () => {
    window.open('https://wa.me/919953053281', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI conversation features with 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
                  Save 20%
                </span>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {plan.price}
                    </span>
                    {plan.priceMonthly > 0 && (
                      <span className="text-gray-500 ml-2">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      plan.buttonVariant === 'outline'
                        ? 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    }`}
                    onClick={plan.name === 'Enterprise' ? handleContactSales : undefined}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Add-ons & Extensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <p className="text-blue-600 font-bold mb-3">{addon.price}</p>
                  <p className="text-sm text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">No-Code Builder</h3>
                <p className="text-sm text-gray-600">YAML editor with visual interface</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Industry Templates</h3>
                <p className="text-sm text-gray-600">Pre-built agents for every sector</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Voice Selection</h3>
                <p className="text-sm text-gray-600">Multiple languages and accents</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Smart Cycling</h3>
                <p className="text-sm text-gray-600">Automated retry and follow-up logic</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What happens if I exceed my conversation limit?</h3>
                <p className="text-gray-600 text-sm">We&apos;ll notify you when you&apos;re approaching your limit. You can purchase additional conversations or upgrade your plan.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600 text-sm">No setup fees for Starter and Professional plans. Enterprise plans may include onboarding services.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 text-sm">We offer a 14-day free trial. Paid plans include a 30-day money-back guarantee.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using ConversAI to transform their customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleContactSales}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Sales
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;