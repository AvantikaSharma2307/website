'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, User, Phone, MessageSquare, Mail } from 'lucide-react';
import Link from 'next/link';

const DemoPage = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! I\'m ConversAI. I can help you understand how our AI agents can transform your lead management. What would you like to know?' }
  ]);
  const [input, setInput] = useState('');
  const [selectedChannel, setSelectedChannel] = useState<'voice' | 'whatsapp' | 'email'>('voice');

  const demoResponses: Record<string, string> = {
    'pricing': 'Our pricing starts at $299/month for small businesses. Enterprise plans are customized based on your needs. All plans include a 14-day free trial!',
    'features': 'ConversAI offers: 🎯 24/7 AI agents, 📞 Voice/WhatsApp/Email support, 🔄 200+ CRM integrations, 📊 Real-time analytics, 🚀 85% lead qualification rate!',
    'demo': 'I\'d be happy to show you a personalized demo! Click the "Connect with Us" button below to schedule a call with our team.',
    'integration': 'We integrate with 200+ tools including Salesforce, HubSpot, Pipedrive, Zapier, and more. Setup takes less than 10 minutes!',
    'default': 'That\'s a great question! Our AI agents can handle that and much more. Would you like to schedule a personalized demo to see how ConversAI can work for your specific use case?'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = demoResponses.default;
      
      if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        response = demoResponses.pricing;
      } else if (lowerInput.includes('feature') || lowerInput.includes('what can')) {
        response = demoResponses.features;
      } else if (lowerInput.includes('demo') || lowerInput.includes('try')) {
        response = demoResponses.demo;
      } else if (lowerInput.includes('integrat') || lowerInput.includes('connect')) {
        response = demoResponses.integration;
      }

      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 1000);

    setInput('');
  };

  const handleConnectWithUs = () => {
    window.open('https://wa.me/919953053281', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ConversAI Interactive Demo
          </h1>
          
          {/* Channel Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedChannel('voice')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                selectedChannel === 'voice' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              Voice
            </button>
            <button
              onClick={() => setSelectedChannel('whatsapp')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                selectedChannel === 'whatsapp' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </button>
            <button
              onClick={() => setSelectedChannel('email')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                selectedChannel === 'email' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Bot className="w-5 h-5" />
                ConversAI {selectedChannel === 'voice' ? 'Voice' : selectedChannel === 'whatsapp' ? 'WhatsApp' : 'Email'} Agent
              </h2>
            </div>
            
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === 'bot' ? (
                        <Bot className="w-4 h-4" />
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                      <span className="text-xs font-semibold">
                        {message.role === 'bot' ? 'ConversAI' : 'You'}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about pricing, features, integrations..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Try Sample Questions:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• What are your pricing plans?</li>
                <li>• What features do you offer?</li>
                <li>• How does integration work?</li>
                <li>• Can I get a personalized demo?</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Ready to Get Started?</h3>
              <Button 
                onClick={handleConnectWithUs}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Connect with Us for Full Demo
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                14-day free trial • No credit card required
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;