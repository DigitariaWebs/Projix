import React from 'react';
import Image from 'next/image';
import { Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences across all devices."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that engage users and drive business results on iOS and Android."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and robust infrastructure that ensures your applications perform at their best."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance frameworks to protect your data and business operations."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure your applications deliver lightning-fast user experiences."
    }
  ];

  const teamMembers = [
    {
      name: "Development Team",
      role: "Full-Stack Developers",
      image: "/HeroSection.png",
      specialties: ["React", "Node.js", "Python", "AWS"]
    },
    {
      name: "Design Team", 
      role: "UI/UX Designers",
      image: "/HeroSection.png",
      specialties: ["Figma", "Adobe Suite", "User Research", "Prototyping"]
    },
    {
      name: "DevOps Team",
      role: "Infrastructure Engineers",
      image: "/HeroSection.png",
      specialties: ["Docker", "Kubernetes", "CI/CD", "Monitoring"]
    },
    {
      name: "Quality Team",
      role: "QA Engineers",
      image: "/HeroSection.png",
      specialties: ["Automation", "Testing", "Security", "Performance"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--color-background)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of experts delivering cutting-edge solutions across
            the full technology stack
          </p>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="mb-6" style={{ color: "var(--color-secondary)" }}>
                {area.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Meet Our Expert Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of specialists brings years of experience and
              passion for innovation to every project
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <h4
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {member.name}
                </h4>
                <p className="text-gray-600 mb-4">{member.role}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full text-white font-medium"
                      style={{ backgroundColor: "var(--color-secondary)" }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className="rounded-2xl p-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
            }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how our expertise can help bring your vision to
              life.
            </p>
            <button
              className="group relative bg-white px-8 py-3 rounded-lg font-semibold transition-all duration-400 shadow-lg hover:shadow-xl overflow-hidden"
              style={{ color: "var(--color-primary)" }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-400 ease-in-out">
                Discuss your project
              </span>
              <div
                className="absolute top-1/2 left-1/2 w-0 h-0 rounded-lg group-hover:w-full group-hover:h-full transition-all duration-400 ease-in-out transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
