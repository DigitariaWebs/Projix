import Image from 'next/image';

const TrustedBySection = () => {
  const trustedLogos = [
    {
      name: 'Canada',
      src: '/TrustedBySection/CFAQ.png',
      alt: 'CFAQ Logo'
    },
    {
      name: 'IVADO',
      src: '/TrustedBySection/FruitExoticInc.png',
      alt: 'Fruit Exotic Inc Logo'
    },
    {
      name: 'Desjardins',
      src: '/TrustedBySection/VilleDeTerrebonne.svg',
      alt: 'Ville de Terrebonne Logo'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          {trustedLogos.map((logo, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center justify-center py-4 px-8 md:px-12">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={80}
                  className="max-h-20 w-auto object-contain filter grayscale"
                />
              </div>
              {/* Vertical line separator - hidden on last item and on mobile */}
              {index < trustedLogos.length - 1 && (
                <div className="hidden md:block h-16 w-px bg-gray-300 mx-26"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
