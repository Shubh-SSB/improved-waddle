"use client";
import React from "react";
import Navbar from "./layout/navbar";
import Image from "next/image";

const Hero = () => {
  const heading = "dalgona.";
  const subheading =
    "transform your operations, innovate your processes with our expert consulting services.";
  const words = subheading.split(" ");

  return (
    <div className="min-h-screen flex flex-col gap-6 xl:gap-10">
      <Navbar />
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 px-4 sm:px-6 md:px-8 xl:px-10.5 pt-0 pb-16 sm:pb-24 xl:pb-[150px] w-full max-w-[1440px] mx-auto -mt-4 xl:-mt-9">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 xl:gap-12 items-center xl:items-start text-center xl:text-left">
          <div className="justify-center gap-3 md:gap-4 xl:gap-5 flex flex-col">
            <h1 className="font-outfit text-[60px] sm:text-[75px] md:text-[90px] xl:text-[110px] font-medium leading-tight">
              {heading.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fadeInChar"
                  style={{
                    animationDelay: `${index * 0.07}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <p className="text-[20px] sm:text-[26px] md:text-[32px] xl:text-[38px] font-nunito font-normal max-w-[350px] sm:max-w-[450px] md:max-w-[550px] xl:max-w-[600px] pr-4 sm:pr-8 md:pr-12 xl:pr-20 leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fadeInWord"
                  style={{
                    animationDelay: `${1 + index * 0.12}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {word}
                  {index < words.length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-base md:text-lg font-nunito gap-2.5 mt-4 w-full sm:w-auto">
            <a
              href="services"
              className="px-6 sm:px-7 md:px-8 xl:px-10 py-3.5 sm:py-4 xl:py-5 bg-[#f06517] text-white rounded-[50px] opacity-0 animate-fadeIn text-center"
              style={{
                animationDelay: `${0.8 + words.length * 0.12 + 0.3}s`,
                animationFillMode: "forwards",
              }}
            >
              Get Expert Help
            </a>
            <a
              href="contacts"
              className="px-6 sm:px-7 md:px-8 xl:px-10 py-3.5 sm:py-4 xl:py-5 bg-transparent border border-black text-black rounded-[50px] opacity-0 animate-fadeIn text-center"
              style={{
                animationDelay: `${0.8 + words.length * 0.12 + 0.3}s`,
                animationFillMode: "forwards",
              }}
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Right side - Video */}
        <div className="flex-1 flex justify-center flex-col gap-4 max-w-full xl:max-w-none">
          <div className="flex-shrink-0 gap-2.5 flex flex-row items-start justify-center xl:justify-start">
            {/* First container - rescales from circle to pill */}
            <div
              className="overflow-hidden border border-black animate-scaleCircleToPill p-2.5 h-[160px] w-[160px]"
              style={{
                animationDelay: "1s",
                borderRadius: "50%",
              }}
            >
              <video
                src="/videos/herovid1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-[300px] object-cover rounded-full opacity-0 animate-fadeInFromLeft"
                style={{ objectPosition: "center 40%", animationDelay: "1.6s" }}
              />
            </div>
            {/* Second container - only fade effect on image */}
            <div className="rounded-full aspect-square h-24 sm:h-28 md:h-36 xl:h-40 border p-2.5 border-black">
              <Image
                src="/images/hero1.avif"
                alt="Hero Video Thumbnail"
                objectFit="cover"
                className="rounded-full h-full w-full object-cover opacity-0 animate-fadeInFromRight"
                style={{ animationDelay: "1.8s" }}
                height={140}
                width={140}
              />
            </div>
          </div>
          {/* Middle container - NO animation */}
          <div className="flex items-center justify-center gap-2.5 flex-row h-24 sm:h-28 md:h-36 xl:h-40 p-2.5 w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-2xl border border-black rounded-full mx-auto xl:mx-0">
            <div className="h-full aspect-square flex-shrink-0">
              <Image
                src="/images/hero2.avif"
                alt="Hero Video Thumbnail"
                objectFit="cover"
                className="rounded-full h-full w-full object-cover "
                height={140}
                width={140}
              />
            </div>
            <div className="h-full flex-1 overflow-hidden rounded-full">
              <video
                src="/videos/herovid2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-shrink-0 gap-2.5 flex flex-row items-end justify-center xl:justify-end">
            {/* Green circle - with corner animation */}
            <div
              className="aspect-square h-24 sm:h-28 md:h-36 xl:h-40 bg-transparent border border-black animate-scaleCircle rounded-full flex items-center justify-center p-4"
              style={{
                animationDelay: "1s",
              }}
            >
              <div
                className="text-white text-center opacity-0 animate-fadeIn"
                style={{
                  animationDelay: "1.8s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-[40px] font-bold font-nunito">12+</div>
                <div className="text-sm font-nunito mt-1">
                  years of
                  <br />
                  experience
                </div>
              </div>
            </div>
            {/* Last container - rescales from circle to pill like first container */}
            <div
              className="overflow-hidden border border-black animate-scaleCircleToPillLast p-2.5 h-[160px] w-[160px] flex flex-row gap-2.5"
              style={{
                animationDelay: "1s",
                borderRadius: "50%",
              }}
            >
              <div className="h-full w-[208px] overflow-hidden rounded-full flex-shrink-0">
                <video
                  src="/videos/herovid3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover opacity-0 animate-fadeInFromLeft"
                  style={{
                    objectPosition: "center 40%",
                    animationDelay: "1.6s",
                  }}
                />
              </div>
              <div className="h-full w-[140px] flex-shrink-0">
                <Image
                  src="/images/hero3.avif"
                  alt="Hero Video Thumbnail"
                  objectFit="cover"
                  className="rounded-full h-full w-full object-cover opacity-0 animate-fadeInFromRight"
                  style={{ animationDelay: "1.8s" }}
                  height={140}
                  width={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
