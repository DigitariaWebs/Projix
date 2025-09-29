"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Filter } from "lucide-react";
import LogoCarousel from "@/components/ui/ProjectsLogoCarousel";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      client: "TechCorp Solutions",
      category: "E-COMMERCE",
      industry: "RETAIL",
      type: "WEB APPLICATION",
      year: "2024",
      featured: true,
      image: "/HeroSection.png",
      description:
        "Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse with advanced analytics and AI-powered recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "/projects/ecommerce-platform",
      stats: {
        views: "15K",
        conversion: "+250%",
        performance: "98%",
      },
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "MediCore Health",
      category: "HEALTHCARE",
      industry: "MEDICAL",
      type: "WEB APPLICATION",
      year: "2024",
      featured: true,
      image: "/HeroSection.png",
      description:
        "Comprehensive patient management system with telemedicine integration, real-time monitoring, and secure data handling.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS", "Socket.io"],
      link: "/projects/healthcare-system",
      stats: {
        users: "50K+",
        uptime: "99.9%",
        satisfaction: "4.9/5",
      },
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      client: "InvestPro Analytics",
      category: "FINTECH",
      industry: "FINANCE",
      type: "DASHBOARD",
      year: "2024",
      featured: false,
      image: "/HeroSection.png",
      description:
        "Real-time financial analytics dashboard with predictive insights, portfolio management, and automated reporting systems.",
      technologies: ["React", "TypeScript", "D3.js", "Firebase", "TradingView"],
      link: "/projects/financial-dashboard",
      stats: {
        dataPoints: "1M+",
        accuracy: "97%",
        speed: "< 100ms",
      },
    },
    {
      id: 4,
      title: "Smart City IoT Platform",
      client: "Urban Solutions Inc",
      category: "IOT",
      industry: "GOVERNMENT",
      type: "PLATFORM",
      year: "2023",
      featured: true,
      image: "/HeroSection.png",
      description:
        "Integrated IoT platform for smart city management including traffic optimization, energy monitoring, and environmental sensors.",
      technologies: ["Angular", "Python", "InfluxDB", "Docker", "Kubernetes"],
      link: "/projects/smart-city",
      stats: {
        sensors: "10K+",
        cities: "25",
        efficiency: "+35%",
      },
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      client: "EduTech Solutions",
      category: "EDUCATION",
      industry: "EDUCATION",
      type: "MOBILE APP",
      year: "2023",
      featured: true,
      image: "/HeroSection.png",
      description:
        "Interactive learning platform with gamification, progress tracking, and AI-powered personalized learning paths.",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "AWS"],
      link: "/projects/edu-platform",
      stats: {
        students: "100K+",
        engagement: "+180%",
        completion: "85%",
      },
    },
    {
      id: 6,
      title: "Restaurant Management Suite",
      client: "Culinary Chain Co",
      category: "HOSPITALITY",
      industry: "FOOD",
      type: "WEB APPLICATION",
      year: "2023",
      featured: false,
      image: "/HeroSection.png",
      description:
        "Complete restaurant management solution with POS integration, inventory management, and customer relationship tools.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe", "Twilio"],
      link: "/projects/restaurant-suite",
      stats: {
        restaurants: "200+",
        orders: "1M+",
        revenue: "+120%",
      },
    },
  ];

  const categories = [
    "ALL",
    "E-COMMERCE",
    "HEALTHCARE",
    "FINTECH",
    "IOT",
    "EDUCATION",
    "HOSPITALITY",
  ];
  const industries = [
    "ALL",
    "RETAIL",
    "MEDICAL",
    "FINANCE",
    "GOVERNMENT",
    "EDUCATION",
    "FOOD",
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "FEATURED" && !project.featured) return false;
    if (
      activeFilter !== "ALL" &&
      activeFilter !== "FEATURED" &&
      project.category !== activeFilter
    )
      return false;
    if (activeCategory !== "ALL" && project.industry !== activeCategory)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden -mt-18">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HeroSection.png"
            alt="Projects Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay - Strong from left, fading to right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, rgba(230, 242, 255, 1.0) 0%, rgba(230, 242, 255, 0.8) 15%, rgba(230, 242, 255, 0.5) 30%, rgba(230, 242, 255, 0.2) 45%, transparent 100%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span style={{ color: "var(--color-primary)" }}>
                  NO MORE CHIT-CHAT,
                </span>
                <br />
                <span style={{ color: "var(--color-secondary)" }}>
                  WHAT DOES OUR WORK
                </span>
                <br />
                <span style={{ color: "var(--color-primary)" }}>
                  REALLY LOOK LIKE?
                </span>
              </h1>
              <p
                className="text-xl leading-relaxed mb-12 max-w-3xl"
                style={{ color: "var(--color-black)" }}
              >
                It&#39;s time to prove that we&#39;re good at what we do. Check
                out our case studies and browse the list of our projects below.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--color-primary)" }}
            >
              <Filter className="w-5 h-5 text-[var(--color-secondary)]" />
              <span className="font-semibold">FILTER BY</span>
            </div>

            {/* Types Dropdown */}
            <div className="flex items-center gap-2">
              <select
                className="border-b-2 bg-transparent px-2 py-2 font-semibold cursor-pointer focus:outline-none transition-all duration-300"
                style={{
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-primary)",
                }}
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="ALL">ALL TYPES</option>
                <option value="FEATURED">FEATURED</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Ampersand */}
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--color-secondary)" }}
            >
              &
            </span>

            {/* Industries Dropdown */}
            <div className="flex items-center gap-2">
              <select
                className="border-b-2 bg-transparent px-2 py-2 font-semibold cursor-pointer focus:outline-none transition-all duration-300"
                style={{
                  borderColor: "var(--color-secondary)",
                  color: "var(--color-primary)",
                }}
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                <option value="ALL">ALL INDUSTRIES</option>
                {industries.slice(1).map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Projects */}
          {activeFilter === "ALL" || activeFilter === "FEATURED" ? (
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span style={{ color: "var(--color-secondary)" }}>
                  OUR FAVORITES
                </span>
                <span className="text-gray-800">
                  {" "}
                  (EVEN IF WE LOVE THEM ALL)
                </span>
              </h2>

              <div
                className="columns-2 gap-8 mb-16 space-y-8"
                style={{ columnFill: "balance" }}
              >
                {filteredProjects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <div
                      key={project.id}
                      className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
                        index % 2 === 0 ? "mt-12" : ""
                      }`}
                    >
                      {/* Project Image */}
                      <div className="relative h-[600px] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : null}

          {/* All Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span style={{ color: "var(--color-secondary)" }}>EVEN MORE</span>
              <span className="text-gray-800"> PROJECTS</span>
            </h2>

            <div
              className="columns-2 gap-8 space-y-8"
              style={{ columnFill: "balance" }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? "mt-12" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button
              className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              SHOW MORE PROJECTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
