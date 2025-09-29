import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Yves Hennekens",
      title: "President, YHC Environnement",
      image: "/HeroSection.png", // Placeholder - replace with actual testimonial images
      quote: "Witify has understood our needs from day 1, educating us, guiding us and accompanying us through the evolution of our system for over 7 years now. They are the cornerstone of our technological development.",
      highlight: "accompanying us through the evolution of our system"
    },
    {
      id: 2,
      name: "Maude Rondeau",
      title: "President, Luminaire Authentik",
      image: "/HeroSection.png", // Placeholder - replace with actual testimonial images
      quote: "Finding Witify was a real relief for us. Not only did they meet our specific needs with a tailor-made solution but they also supported us in our organizational transformation. Their technical expertise and unwavering support were crucial to our success.",
      highlight: "technical expertise and unwavering support were crucial"
    },
    {
      id: 3,
      name: "Kenya Kondo",
      title: "President, Workstart",
      image: "/HeroSection.png", // Placeholder - replace with actual testimonial images
      quote: "Our experience with Witify has been nothing short of exceptional. [...] Their consistently innovative and effective results have earned our highest recommendation for any company looking for a superior long-term technology partner.",
      highlight: "our highest recommendation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span style={{ color: 'var(--color-secondary)' }}>Digital success stories</span>
            <span className="text-gray-800"> : testimonials from</span>
            <br />
            <span className="text-gray-800">companies in the midst of digitalization</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12" style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center">
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                  {testimonial.quote.split(testimonial.highlight).map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && (
                        <span 
                          className="font-semibold"
                          style={{ color: 'var(--color-secondary)' }}
                        >
                          {testimonial.highlight}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 
                    className="font-bold text-lg mb-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-secondary)' }}
                  >
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Ready to become our next success story?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Start Your Digital Transformation
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
