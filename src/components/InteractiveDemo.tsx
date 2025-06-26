'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Code, Mic, BarChart3, Upload, FileText, Globe, Headphones } from 'lucide-react';

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState('builder');
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = [
    { id: 'builder', label: 'Prompt Builder', icon: <Code className="w-4 h-4" /> },
    { id: 'voice', label: 'Voice Selection', icon: <Mic className="w-4 h-4" /> },
    { id: 'analytics', label: 'Live Analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const yamlContent = `# Lead Qualification Agent
identity:
  name: "Sarah"
  role: "Lead Qualification Specialist"
  language: "english"

greeting: "Hi! I'm Sarah from ConversAI. I see you're interested in our AI solutions. Is this a good time to chat for 2 minutes?"

flow:
  - id: qualify_budget
    type: question
    text: "What's your budget range for AI automation?"
    entity: "budget"
    
  - id: qualify_timeline
    type: question
    text: "When are you looking to implement this?"
    entity: "timeline"
    
  - id: qualify_decision
    type: question
    text: "Are you the decision maker for this purchase?"
    entity: "decision_maker"

closing: "Perfect! I'll have our specialist reach out with a custom proposal. Expect a call within 24 hours!"`;

  const voiceOptions = [
    { name: 'Professional Sarah', accent: 'US English', gender: 'Female', sample: 'sample1.mp3' },
    { name: 'Friendly Mike', accent: 'US English', gender: 'Male', sample: 'sample2.mp3' },
    { name: 'British Emma', accent: 'UK English', gender: 'Female', sample: 'sample3.mp3' },
    { name: 'Confident Raj', accent: 'Hinglish', gender: 'Male', sample: 'sample4.mp3' }
  ];

  const analyticsData = [
    { metric: 'Calls Today', value: '247', change: '+23%' },
    { metric: 'Qualified Leads', value: '89', change: '+45%' },
    { metric: 'Avg Call Duration', value: '3.2m', change: '+12%' },
    { metric: 'Conversion Rate', value: '36%', change: '+8%' }
  ];

  const handlePlaySample = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              See the Admin Panel in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This is exactly what you&apos;ll use to build your AI agents. No complex coding, just intuitive tools that work.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Prompt Builder Tab */}
            {activeTab === 'builder' && (
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: Input Options */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Create Your Agent</h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium">Upload Script or Audio</p>
                          <p className="text-xs text-gray-500">Drag & drop your call script or recording</p>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
                        <div className="text-center">
                          <Globe className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium">Import from Website</p>
                          <p className="text-xs text-gray-500">Paste URL to extract sales content</p>
                        </div>
                      </div>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium">Start from Template</p>
                          <p className="text-xs text-gray-500">Use pre-built industry templates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: YAML Editor */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Generated Agent Configuration</h3>
                    <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-auto">
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {yamlContent}
                      </pre>
                    </div>
                    <Button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      Deploy Agent
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Voice Selection Tab */}
            {activeTab === 'voice' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Choose Your AI Voice</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {voiceOptions.map((voice, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-lg">{voice.name}</h4>
                          <p className="text-gray-600">{voice.accent} • {voice.gender}</p>
                        </div>
                        <button
                          onClick={handlePlaySample}
                          disabled={isPlaying}
                          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {isPlaying ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Playing
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              Play Sample
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-700 italic">
                          &ldquo;Hi! I&apos;m calling about your recent inquiry. Is this a good time to chat for a few minutes about how ConversAI can help your business?&rdquo;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Real-Time Analytics Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {analyticsData.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                      <h4 className="text-sm text-gray-600 font-medium">{item.metric}</h4>
                      <div className="flex items-end gap-2 mt-2">
                        <span className="text-3xl font-bold text-gray-900">{item.value}</span>
                        <span className="text-green-600 text-sm font-semibold">{item.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call History Table */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Recent Calls</h4>
                  <div className="space-y-3">
                    {[
                      { time: '10:34 AM', number: '+91-98765-43210', outcome: 'Qualified', data: 'Budget: $50k, Timeline: Q2' },
                      { time: '10:29 AM', number: '+91-98765-43211', outcome: 'Callback', data: 'Requested callback at 2 PM' },
                      { time: '10:23 AM', number: '+91-98765-43212', outcome: 'Not Interested', data: 'Not currently looking' },
                      { time: '10:18 AM', number: '+91-98765-43213', outcome: 'Qualified', data: 'Budget: $25k, Timeline: ASAP' }
                    ].map((call, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded p-3">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">{call.time}</span>
                          <span className="font-mono text-sm">{call.number}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            call.outcome === 'Qualified' ? 'bg-green-100 text-green-800' :
                            call.outcome === 'Callback' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {call.outcome}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{call.data}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold"
              onClick={() => window.open('https://admin.conversailabs.com/', '_blank')}
            >
              <Headphones className="w-5 h-5 mr-2" />
              Try the Full Admin Panel
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              No signup required • Full access for 14 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;