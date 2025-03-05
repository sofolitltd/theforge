// components/Footer.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/icons/facebook.png";
import insta from "@/public/icons/instagram.png";
import linkedin from "@/public/icons/linkedin.png";
import himu from "@/public/himu.png";
import x from "@/public/icons/x.png";
import whatsapp from "@/public/icons/whatsapp.png";

export default function Footer() {
  return (
    <footer className="">
      {/*  */}
      <div className="flex flex-col lg:flex-row container mx-auto max-w-7xl my-6 gap-6 p-4">
        {/*  */}

        <div className="flex-2  p-4 bg-black/20 rounded-lg">

       
        <div className="  rounded-xl p-14 bg-neutral-950">
          <p className=" text-sm font-light text-white! mb-1">
            Get a project in mind?
          </p>
          <p className=" text-4xl font-bold text-white!">
            {`Lets's discuss the details`}

          </p>

          <div className="flex gap-4 mt-8 mb-2 items-center ">
            <div className="w-fit">
              <Link
                href="/work"
                className=" text-base font-outfit px-8 py-2.5 border-2 border-gray-300 rounded-lg bg-white text-black "
              >
                Book a call
              </Link>
            </div>

            <div className="font-outfit text-base px-6 py-2 border-2 border-white/10 rounded-[10px]  bg-gradient-to-r from-[#0e0e0e] via-[#363636] to-[#0e0e0e] text-white opacity-100">
              Get in touch
            </div>
          </div>
        </div>
 </div>
        {/*  */}
        <div className=" flex-1 rounded-xl bg-black/20 border-1 border-white/5  py-14 px-8 ">
          <Image
            src={himu}
            alt="himu"
            height={50}
            width={50}
            className="rounded-full object-cover "
          ></Image>

          <p className="mt-4 font-light">
            This is Abdullah Omer Himu, Founder of The Forge. I will answer all
            your questions.
          </p>

          <Link
            href="https://wa.me/8801854666866?text=Hello, Abdullah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mt-4 font-light bg-gray-200/10 rounded-lg px-4 py-2 w-fit flex gap-2 items-center justify-center">
              <Image
                src={whatsapp}
                alt="WhatsApp logo"
                height={24}
                width={24}
              />
              <p>Ask a question</p>
            </div>
          </Link>
        </div>
      </div>

      {/*  */}
      <div className=" text-white py-4 ">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} The Forge | Developed by
              Sofol IT
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <Link
              href="https://www.facebook.com/in/abdullah-omer-himel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} alt="insta logo" height={18} width={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdullah-omer-himel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="insta logo" height={18} width={18} />
            </Link>
            <Link
              href="https://x.com/omerhimel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={x} alt="insta-logo" height={14} width={14} />
            </Link>
            <Link
              href="https://www.instagram.com/abdullah_omer_himel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-gray-300 hover:text-white">
                <Image src={insta} alt="insta logo" height={15} width={15} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
