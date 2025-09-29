import React from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced analytics and seamless checkout experience.",
      image: "/HeroSection.png", // Placeholder image
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/projects/ecommerce-platform"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Comprehensive patient management system with telemedicine integration.",
      image: "/HeroSection.png", // Placeholder image
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      link: "/projects/healthcare-system"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with predictive insights.",
      image: "/HeroSection.png", // Placeholder image
      technologies: ["React", "TypeScript", "D3.js", "Firebase"],
      link: "/projects/financial-dashboard"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Latest Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into what we build - innovative solutions that drive results
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="flex-1 lg:flex-[0.55]">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative h-80 lg:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 lg:flex-[0.45] text-center lg:text-left">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 text-sm rounded-full text-white font-medium shadow-md"
                          style={{ backgroundColor: 'var(--color-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    style={{
                      backgroundColor: 'var(--color-primary)'
                    }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: 'var(--color-primary)'
            }}
          >
            <span>See All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
