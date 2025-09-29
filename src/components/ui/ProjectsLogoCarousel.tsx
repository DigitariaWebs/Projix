'use client';

import React from 'react';
import Image from 'next/image';

const LogoCarousel = () => {
  // Liste des logos avec leurs informations
  const logos = [
    { src: "/TrustedBySection/CFAQ.png", alt: "CFAQ" },
    { src: "/TrustedBySection/Crustys.png", alt: "Crustys" },
    { src: "/TrustedBySection/FruitExoticInc.png", alt: "Fruit Exotic Inc" },
    { src: "/TrustedBySection/VilleDeTerrebonne.svg", alt: "Ville de Terrebonne" }
  ];

  return (
    <div className="mt-10">
      <div className="relative overflow-hidden">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
          
        {/* Scrolling Container */}
        <div className="flex animate-scroll items-center py-8" style={{ gap: '4rem' }}>
          {/* First Set */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex items-center justify-center h-20 flex-shrink-0" style={{ minWidth: '200px' }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          
          {/* Duplicate first logo at the end of first set for seamless transition */}
          <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ minWidth: '200px' }}>
            <Image
              src={logos[0].src}
              alt={logos[0].alt}
              width={200}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* Second Set for Seamless Loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex items-center justify-center h-20 flex-shrink-0" style={{ minWidth: '200px' }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          
          {/* Duplicate first logo at the end of second set for seamless transition */}
          <div className="flex items-center justify-center h-20 flex-shrink-0" style={{ minWidth: '200px' }}>
            <Image
              src={logos[0].src}
              alt={logos[0].alt}
              width={200}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
