import React from "react";
import Image, { StaticImageData } from "next/image";
import linkedin from "@/public/service/linkedin.png";
import content from "@/public/service/content.png";
import design from "@/public/service/design.png";
import social from "@/public/service/social.png";
import video from "@/public/service/video.png";
import ebook from "@/public/service/ebook.png";

// Define the type for services
type Service = {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
};

// List of services
const services: Service[] = [
  {
    title: "Personal Branding on LinkedIn",
    description:
      "Stand out with a strong LinkedIn profile that builds authority and attracts high-value connections.",
    tags: ["LinkedIn Branding", "Profile Optimization"],
    image: linkedin,
  },
  {
    title: "LinkedIn Content Creation & Ghostwriting",
    description:
      "Consistent, high-quality content that engages your audience and drives leads—without you lifting a finger.",
    tags: ["Ghostwriting Services", "Content Strategy"],
    image: content,
  },
  {
    title: "High-Converting Website Design & Development",
    description:
      "Turn visitors into clients with a sleek, fast, and conversion-optimized website.",
    tags: ["High-Converting Sites", "Custom Web Design", "Landing Pages"],
    image: design,
  },
  {
    title: "Social Media Management",
    description:
      "We handle your social presence so you can focus on growing your business.",
    tags: ["Brand Visibility", "Organic Reach"],
    image: social,
  },
  {
    title: "Video Editing",
    description:
      "Professional video content that enhances your brand and boosts engagement.",
    tags: ["Video Content", "Reels & Shorts"],
    image: video,
  },
  {
    title: "Ebook Design",
    description:
      "Position yourself as an expert with professionally designed lead magnets and digital products.",
    tags: ["Lead Magnets", "Digital Books", "Branded Layouts"],
    image: ebook,
  },
];

export const ServiceSection = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Services we offer</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-10 bg-black/20 rounded-lg p-6 border-1 border-slate-50/5 backdrop-blur-sm">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-950 rounded-xl px-4 lg:px-8 lg:py-10 flex flex-col justify-between h-auto transition-all duration-1000 ease-in-out hover:bg-gradient-to-tr from-purple-700 to-orange-800"
            >
            {/* Title & Image */}
            <div className="flex gap-4 items-center">
              {/* Image container with fixed size */}
              <div className="flex-shrink-0 size-20 border-2 border-neutral-200/10 rounded-xl p-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={64}
                  width={64}
                  className="object-cover"
                />
              </div>
              {/* Title that can wrap without affecting the image size */}
              <h1 className="text-2xl font-bold break-words font-outfit!">
                {service.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-base text-white/80! my-4">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mt-auto">
              {service.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-gray-50/5 rounded-lg py-1 px-2 w-fit flex items-center gap-2 text-sm"
                >
                  <div className="rounded-full bg-slate-200 size-1"></div>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
