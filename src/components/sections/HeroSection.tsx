"use client";

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden -mt-18">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSection.png"
          alt="Hero Background"
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
      <div className="relative z-20 h-full flex items-center pt-8">
        <div className="container mx-auto px-8 sm:px-12">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Tailor-made software development for{" "}
              <span
                className="inline-block"
                style={{ color: "var(--color-secondary)" }}
              >
                ambitious organizations
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
              style={{ color: "var(--color-black)" }}
            >
              Projix is a Montreal-based software development company. Our
              mission is to develop secure, scalable custom software solutions,
              designed from the ground up to work with your customers and your
              team.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Primary Button */}
              <button
                className="px-6 py-3 rounded-lg text-white font-semibold text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                }}
              >
                Discuss Your Project
              </button>
              {/* Secondary Button */}
              <button
                className="px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-2"
                style={{
                  color: "var(--color-black)",
                  borderColor: "var(--color-secondary)",
                  backgroundColor: "var(--color-white)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-secondary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-black)";
                }}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
