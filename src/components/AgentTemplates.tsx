'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Stethoscope, 
  ShoppingCart, 
  Car, 
  GraduationCap, 
  Briefcase,
  Play,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

const AgentTemplates = () => {
  const templates = [
    {
      icon: <Home className="w-8 h-8" />,
      name: "Real Estate Lead Qualifier",
      description: "Qualifies property inquiries, collects budget, location preferences, and timeline",
      features: ["Budget qualification", "Location targeting", "Timeline assessment", "Lead scoring"],
      metrics: { qualified: "78%", avgTime: "2.3m", conversions: "34%" },
      industry: "Real Estate",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      name: "Healthcare Appointment Scheduler",
      description: "Books appointments, handles insurance verification, and manages rescheduling",
      features: ["Insurance check", "Appointment booking", "Reminder calls", "Cancellation handling"],
      metrics: { qualified: "92%", avgTime: "1.8m", conversions: "67%" },
      industry: "Healthcare",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "E-commerce Order Support",
      description: "Handles order status, returns, product questions, and upselling opportunities",
      features: ["Order tracking", "Return processing", "Product recommendations", "Issue resolution"],
      metrics: { qualified: "85%", avgTime: "3.1m", conversions: "42%" },
      industry: "E-commerce",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "Auto Dealership Assistant",
      description: "Qualifies car buyers, schedules test drives, and handles financing inquiries",
      features: ["Budget assessment", "Vehicle matching", "Test drive booking", "Financing pre-qual"],
      metrics: { qualified: "71%", avgTime: "4.2m", conversions: "28%" },
      industry: "Automotive",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "Education Enrollment Bot",
      description: "Handles course inquiries, admission requirements, and enrollment assistance",
      features: ["Course info", "Admission guidance", "Scholarship details", "Enrollment support"],
      metrics: { qualified: "89%", avgTime: "2.7m", conversions: "56%" },
      industry: "Education",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "B2B Lead Qualifier",
      description: "Qualifies business prospects, identifies decision makers, and schedules demos",
      features: ["Company sizing", "Decision maker ID", "Pain point discovery", "Demo scheduling"],
      metrics: { qualified: "82%", avgTime: "3.8m", conversions: "45%" },
      industry: "B2B SaaS",
      color: "from-teal-500 to-green-600"
    }
  ];

  const handleTryDemo = () => {
    // In a real implementation, this would open a specific demo for that template
    window.open('/demo', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Pre-Built Agent Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with proven templates designed for your industry. Each template is optimized for maximum conversion based on thousands of real conversations.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {templates.map((template, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Industry Badge */}
                <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {template.industry}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {template.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {template.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {template.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{template.metrics.qualified}</div>
                    <div className="text-xs text-gray-500">Qualified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{template.metrics.avgTime}</div>
                    <div className="text-xs text-gray-500">Avg Call</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{template.metrics.conversions}</div>
                    <div className="text-xs text-gray-500">Convert</div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={handleTryDemo}
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Live Demo
                </Button>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Proven Results Across Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <p className="text-blue-100">Active Businesses</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  <span className="text-3xl font-bold">85%</span>
                </div>
                <p className="text-blue-100">Avg Qualification Rate</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 mr-2" />
                  <span className="text-3xl font-bold">3.2x</span>
                </div>
                <p className="text-blue-100">Faster Response Time</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Play className="w-6 h-6 mr-2" />
                  <span className="text-3xl font-bold">&lt;10m</span>
                </div>
                <p className="text-blue-100">Setup Time</p>
              </div>
            </div>
          </div>

          {/* Custom Template CTA */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Don&apos;t See Your Industry?</h3>
              <p className="text-gray-600 mb-6">
                Our AI can create custom agents for any business. Upload your script or describe your process, and we&apos;ll build a template that fits your exact needs.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open('/contact', '_blank')}
              >
                Create Custom Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentTemplates;