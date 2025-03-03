import React from "react";
import dm from "@/public/dm.svg";
import Image from "next/image";
import Link from "next/link";

// Define the type for services
type Work = {
  title: string;
  features: string[];
  image: string;
};

// List of services
const works: Work[] = [
  {
    title: "Branding for an Agency Founder",
    features: ["increase 3x inbound leads", "Brand Optimization"],
    image: dm,
  },
  {
    title: "Website redesign for a real estate agency",
    features: ["Higher Engagement", "More Hooked Calls"],
    image: dm,
  },
  {
    title: "Social media strategy for a startup",
    features: ["explosive growth", "brand awareness"],
    image: dm,
  },
];

export const WorkSection = () => {
  return (
    <div className=" items-center justify-center w-full bg ">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Our work speaks for itself
      </h1>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 ">
        {works.map((service, index) => (
          <div
            key={index}
            className="border border-slate-50/10 rounded-md p-4 flex flex-col md:flex-row lg:flex-row gap-6"
          >
            {/* Image and content container */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-auto max-h-64 lg:max-h-none"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-4 rounded-md bg-slate-50/2">
              <div>
                <h1 className="text-md font-bold">{service.title}</h1>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs m-2"
                    >
                      <div className="rounded-full bg-slate-200 size-1"></div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 py-2 border rounded-md w-fit mt-4 md: md:mt-auto lg:mt-auto ">
                View project
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* all btn */}
      <div  className="  mt-10 mx-auto w-fit">
      <Link href='/work' className="px-8 py-2.5 border-2 border-gray-300 rounded-md bg-white text-black ">View all projects</Link>
        
      </div>
      </div>
    
  );
};
