import React from "react";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/#features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Demo", path: "/demo" },
        { name: "Agent Templates", path: "/#agent-templates" },
        { name: "Industries", path: "/#industries" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "How It Works", path: "/#how-it-works" },
        { name: "Case Studies", path: "/#testimonials" },
        { name: "Help Center", path: "/contact" },
        { name: "Admin Panel", path: "https://admin.conversailabs.com/" },
        { name: "API Docs", path: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Privacy Policy", path: "/policy" },
        { name: "Terms and Conditions", path: "/terms" },
        { name: "Cancellation & Refund", path: "/refund" },
        { name: "Shipping & Delivery", path: "/shipping" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ConversAI Labs</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              No-code AI agent builder. Create intelligent voice bots that qualify leads 24/7 across voice, WhatsApp, and email.
            </p>
            <div className="flex space-x-4 mb-6">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Yt</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {(section.links as { name: string; path: string }[]).map((linkObj, i) => (
                  <li key={i}>
                    {linkObj.path.startsWith('http') ? (
                      <a
                        href={linkObj.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {linkObj.name}
                      </a>
                    ) : (
                      <Link
                        href={linkObj.path}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {linkObj.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 ConversAI Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <Link href="/policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
            <Link href="/refund" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cancellation & Refund
            </Link>
            <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">
              Shipping & Delivery
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
