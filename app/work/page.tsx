import React from "react";
import Image, { StaticImageData } from "next/image";
import branding from "@/public//work/branding.png";
import website from "@/public//work/website.png";
import social_media from "@/public//work/social_media.png";

// Define the type for services
type Work = {
  title: string;
  features: string[];
  image: StaticImageData;
};

// List of services
const works: Work[] = [
  {
    title: "Branding for an Agency Founder",
    features: ["increase 3x inbound leads", "Brand Optimization"],
    image: branding,
  },
  {
    title: "Website redesign for a real estate agency",
    features: ["Higher Engagement", "More Hooked Calls"],
    image: website,
  },
  {
    title: "Social media strategy for a startup",
    features: ["explosive growth", "brand awareness"],
    image: social_media,
  },
];

export default function page() {
  return (
    <div className=" px-4 items-center justify-center w-full mb-32">
      <h1 className="text-2xl mb-6 text-start">Our Work</h1>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-10 ">
        {works.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 flex flex-col md:flex-row lg:flex-row gap-6 bg-black/20"
          >
            {/* Image and content container */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-96  max-h-64 lg:max-h-none rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-6 rounded-lg bg-neutral-950">
              <div>
                <h1 className="text-xl ">{service.title}</h1>
                <div className="mt-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs mx-2"
                    >
                      <div className="rounded-full bg-slate-200 size-1"></div>
                      <p className=" text-base font-light ">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-outfit text-base px-6 py-2 border-2 border-white/10 rounded-[10px] w-fit mt-4 md:mt-auto lg:mt-auto bg-gradient-to-r from-[#0e0e0e] via-[#363636] to-[#0e0e0e] text-white opacity-100">
                View project
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
