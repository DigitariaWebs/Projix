"use client";

import React from 'react';
import { Building, Building2, Rocket } from "lucide-react";

const WhoWeServeSection = () => {
  const clientTypes = [
    {
      title: "SMEs",
      description:
        "Transform the way you work. Streamline processes, unlock growth, and amplify your impact with solutions built for your journey.",
      icon: <Building size={38} />,
    },
    {
      title: "Institutions",
      description:
        "Turn complexity into clarity. Harness your data, strengthen your infrastructure, and drive lasting change through technology.",
      icon: <Building2 size={38} />,
    },
    {
      title: "Startup",
      description:
        "From bold ideas to breakthrough products. Launch faster, disrupt industries, and shape the future with innovation at your core.",
      icon: <Rocket size={38} />,
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
            Solutions for Every Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, scalable, and tailored software solutions—no matter your size or sector.
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="bg-[var(--color-background)] rounded-xl p-8"
            >
              {/* Icon */}
              <div className="text-[var(--color-secondary)] mb-4">
                {client.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {client.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhoWeServeSection;
