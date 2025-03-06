// components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/icons/facebook.png";
import insta from "@/public/icons/instagram.png";
import linkedin from "@/public/icons/linkedin.png";
import himu from "@/public/himu_new.png";
import x from "@/public/icons/x.png";
import whatsapp from "@/public/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer className="">
      {/*  */}
      <div className="flex flex-col lg:flex-row container mx-auto max-w-7xl my-6 gap-6 p-4">
        {/*  */}
        <div className="flex-6  p-4 bg-black/20 rounded-lg border-1 border-slate-50/5">
          <div className="  rounded-xl px-4 md:px-6 lg:px-8 py-14 bg-neutral-950">
            <p className=" text-md font-light text-white! mb-1">
              Get a project in mind?
            </p>
            <p className=" text-3xl md:text-4xl lg:text-5xl font-bold text-white!">
              {`Lets's discuss the details`}
            </p>

            <div className=" flex flex-col lg:flex-row  gap-5 mt-8 items-start lg:items-center">
              <div className="w-fit">
                <Link
                  href="/work"
                  className=" text-base font-outfit px-8 py-2.5 border-2 border-gray-300 rounded-lg bg-white text-black "
                >
                  Book a call
                </Link>
              </div>

              <Link
                href="/contact"
                className="font-outfit text-base px-6 py-2 border-2 border-white/10 rounded-xl"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=" flex-5 rounded-xl bg-black/20 border-1 border-white/5  py-14 px-8 ">
          {/*  */}
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-6 items-left sm:items-start">
            {/* Image first on small screens, second on larger screens */}
            <div className="sm:order-2">
              <Image src={himu} alt="himu" className="object-cover rounded-xl" />
            </div>

            {/* Text Content */}
            <div className="w-full sm:order-1 text-left">
              <p className="text-sm">Abdullah Omer Himel</p>
              <p className="text-xl text-white!">Founder, The Forge</p>
              <p className="font-light mt-4">
                I will answer all your questions.
              </p>

              <Link
                href="https://wa.me/8801854666866?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-8 font-light bg-white rounded-lg px-4 py-2 w-fit flex gap-3 items-center justify-center transition-all duration-500 ease-in-out border-2 border-gray-300">
                  <Image
                    src={whatsapp}
                    alt="WhatsApp logo"
                    height={24}
                    width={24}
                  />
                  <p className="text-black!">Ask a question</p>
                </div>
              </Link>

              {/* Social Links */}
              <div className="flex items-center space-x-6 mt-4 bg-neutral-950 py-2 px-4 rounded-md w-fit">
                <Link
                  href="https://www.facebook.com/in/abdullah-omer-himel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={facebook}
                    alt="Facebook logo"
                    height={18}
                    width={18}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abdullah-omer-himel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn logo"
                    height={18}
                    width={18}
                  />
                </Link>
                <Link
                  href="https://x.com/omerhimel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={x} alt="X logo" height={14} width={14} />
                </Link>
                <Link
                  href="https://www.instagram.com/abdullah_omer_himel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={insta}
                    alt="Instagram logo"
                    height={15}
                    width={15}
                  />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*  */}
      <div className=" text-white py-4 ">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} The Forge | Developed by
              {"  "}
              <a
                href="https://sofolit.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white "
              >
                Sofol IT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
