"use client";
import React, {
  useState,
  useEffect,
  useRef,
  MouseEvent,
  TouchEvent,
} from "react";
import Image, { StaticImageData } from "next/image";
import person from "@/public/person.png";
import sabbir from "@/public/sabbir.png";
import orange_crew from "@/public/orange_crew.png";
import reyad from "@/public/reyad.png";
import genxsolutions_logo from "@/public/genxsolutions_logo.png";
import sabbir_hassan from "@/public/sabbir_hassan.jpeg";
import design_mingle_logo from "@/public/design_mingle_logo.png";

// Define a type for the testimonial data
type Testimonial = {
  name: string;
  position: string;
  image: StaticImageData;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "David S.",
    position: "Startup Founder",
    image: person,
    text: "Thanks to The Forge, my LinkedIn profile transformed into a lead magnet. The content is high-quality, engaging, and consistently brings in new business.",
  },
  {
    name: "Emily R.",
    position: "Real Estate Agent",
    image: person,
    text: "The website The Forge built for us is stunning and conversion-driven. We saw a 60% increase in inquiries within the first month!",
  },
  {
    name: "Sabbir Hossien Robin",
    position: "Founder, DesignMingle",
    image: sabbir,
    text: "The Forge has been a game-changer for my LinkedIn presence and overall brand growth. His expertise goes beyond just writing—he optimized my LinkedIn profile, ghostwrote for me, created content for both my personal and business pages. ",
  },
  {
    name: "Orange Crew",
    position: "Advertising Agency",
    image: orange_crew,
    text: "The Forge transformed our brand. From LinkedIn profile optimization to branding, web copy, and logo design, they delivered beyond expectations. Their expertise gave us a cohesive, professional look and helped us attract the right clients.",
  },
  {
    name: "Md Asifuzzaman Reyad",
    position: "Founder, Sofol IT",
    image: reyad,
    text: "The Forge optimized our LinkedIn presence, making it more professional and engaging. Their strategic content approach has significantly improved our reach and credibility.",
  },
  {
    name: "GenXSolutions",
    position: "Web Development Agency",
    image: genxsolutions_logo,
    text: "As a web development agency, we knew we needed a strong personal brand to stand out. The Forge optimized our LinkedIn profiles and gave us a clear, engaging online presence.",
  },
  {
    name: "Sabbir Hassan",
    position: "Founder, GenXSolutions",
    image: sabbir_hassan,
    text: "The Forge took my LinkedIn to the next level. Their profile optimization service positioned me as a trusted industry leader, helping me connect with more clients and partners.",
  },
  {
    name: "Design Mingle",
    position: "Web Design Agency",
    image: design_mingle_logo,
    text: "Design Mingle benefited greatly from The Forge’s expertise in LinkedIn branding. Their work helped us establish authority and credibility in the design industry.",
  },
  {
    name: "Anwar Hossen",
    position: "Entrepreneur",
    image: person,
    text: "I had the pleasure of working with The Forge for my website copy and designing, and I couldn't be more impressed. From the very beginning, their dedication and professionalism stood out.",
  },
];

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [testimonialsPerSlide, setTestimonialsPerSlide] = useState<number>(3); // Added state for testimonialsPerSlide
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  // Handle resizing and updating testimonialsPerSlide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setTestimonialsPerSlide(1); // Small screens (1 testimonial per slide)
      } else if (window.innerWidth < 1024) {
        setTestimonialsPerSlide(2); // Medium screens (2 testimonials per slide)
      } else {
        setTestimonialsPerSlide(3); // Large screens (3 testimonials per slide)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle drag start
  const handleDragStart = (e: MouseEvent | TouchEvent): void => {
    setDragging(true);
    const start = "pageX" in e ? e.pageX : e.touches[0].pageX; // Check if it's a MouseEvent or TouchEvent
    setStartX(start); // Get the starting X position
    if (testimonialsRef.current) {
      setScrollLeft(testimonialsRef.current.scrollLeft); // Save the initial scroll position
    }
  };

  // Handle drag move
  const handleDragMove = (e: MouseEvent | TouchEvent): void => {
    if (!dragging) return;
    const x = "pageX" in e ? e.pageX : e.touches[0].pageX; // Check if it's a MouseEvent or TouchEvent
    const distance = x - startX;
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  // Handle drag end
  const handleDragEnd = (): void => {
    setDragging(false);
  };

  // Prevent text and image selection during dragging
  const handlePreventSelect = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  // Handle the next testimonial (for infinite loop)
  const goToNext = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0); // Jump to the first testimonial
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="max-w-full mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">What our clients say</h1>

      <div
        className="relative py-6 rounded-md w-full mx-auto group"
        ref={testimonialsRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
        style={{
          cursor: dragging ? "grabbing" : "grab",
          overflow: "hidden",
          userSelect: dragging ? "none" : "text", // Prevent text selection during dragging
        }}
      >
        {/* Testimonials Container */}
        <div
          className="flex transition-transform duration-400 ease-in-out gap-6"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / testimonialsPerSlide
            }%)`,
          }}
        >
          {/* Duplicate the testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] border border-slate-100/5 px-5 rounded-lg bg-black/20 "
            >
              <div className="flex justify-between items-center my-4">
                <div className=" text-start">
                  <h3 className=" test-lg" onDragStart={handlePreventSelect}>
                    {testimonial.name}
                  </h3>
                  <p
                    className="text-base font-light mt-1"
                    onDragStart={handlePreventSelect}
                  >
                    {testimonial.position}
                  </p>
                </div>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  height={72}
                  width={72}
                  className="rounded-full bg-white "
                  onDragStart={handlePreventSelect}
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div
                className=" bg-neutral-950 rounded-md p-3 mb-4 text-sm font-light text-left"
                onDragStart={handlePreventSelect}
              >
                <p>

                {`"${testimonial.text}"`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-50" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
