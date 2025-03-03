"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { COMPANY_DATA } from "@/lib/constants";
import { FrontPic } from "@/public/assets";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % COMPANY_DATA.hero.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? COMPANY_DATA.hero.length - 1 : prevIndex - 1
    );
  };

  return (
    <header id="home" className="relative w-full h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(/assets/front_pic1.jpg)`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto lg:px-16 px-4 md:py-48 py-24 text-white">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-orange-500 via-white to-green-500 text-transparent bg-clip-text py-2">
              Tiranga Crane Service
            </h1>
            <p className="lg:text-lg md:text-base text-sm font-medium">
              <span className="font-bold text-white">Welcome to TCS 🚛🏗️! </span>
              At Tiranga Crane Service, we take pride in delivering reliable, efficient, and safe crane solutions for all your lifting needs.
              Whether it's construction, industrial work, or heavy lifting, our expert team and well-maintained fleet are ready to assist you.
            </p>
            <p className="text-white font-bold">Your heavy lifting, our responsibility! 💪</p>
            <div className="lg:text-lg md:text-sm text-sm font-semibold text-gray-200">
              🏢 GST Number: <span className="text-white">24AOZPA2342A1ZE</span> <br />
              📝 Registration Number: <span className="text-white">UDYAM-GJ-13-0007012</span>
            </div>
          </div>

          {/* Right Section: Image Carousel */}
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            {/* Image Slides */}
            {COMPANY_DATA.hero.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Crane ${index + 1}`}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
                        <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              <IoIosArrowForward />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {COMPANY_DATA.hero.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
