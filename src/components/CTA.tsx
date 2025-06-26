
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {Play, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CTA = () => {
  const router = useRouter();
  
  const handleConnectWithUs = () => {
    window.open('https://wa.me/919953053281', '_blank');
  };
  
  const handleTryDemo = () => {
    router.push('/demo');
  };
  
  const handleContactSales = () => {
    router.push('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your First AI Agent?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join 500+ businesses already using ConversAI to automate conversations and never miss another lead.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleConnectWithUs}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleTryDemo}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              See 5-Minute Demo
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={handleContactSales}
              className="text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Talk to Sales
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-8">
            No credit card required • 14-day free trial • Setup in under 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
