import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { name: 'Custom Software Development', href: '/services/software-development' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Applications', href: '/services/mobile-apps' },
      { name: 'Cloud & Infrastructure', href: '/services/cloud' },
      { name: 'Security & Compliance', href: '/services/security' },
      { name: 'Digital Transformation', href: '/services/transformation' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support Center', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/Logo.png"
                alt="Projix Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge software development, digital transformation, 
              and strategic consulting services to help you achieve your goals.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
                <a 
                  href="mailto:hello@projix.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  hello@projix.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
                <span className="text-gray-300">
                  123 Innovation Street, Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-secondary)' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {footerSections.services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-secondary)' }}>
              Company
            </h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--color-secondary)' }}>
              Resources
            </h3>
            <ul className="space-y-3">
              {footerSections.resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Projix. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-gray-800 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">
                Terms
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
