"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28 py-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="text-white text-3xl md:text-4xl flex items-center">
                  <Image 
                    src="/assets/logo.jpg" 
                    alt="Payraydoo Logo" 
                    width={70} 
                    height={45} 
                    className="mr-4"
                  />
                  <span className="font-semibold">Payraydoo</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation placeholder - keeping this div for spacing */}
          <div className="hidden md:flex items-center">
            {/* Navigation links removed as requested */}
          </div>

          {/* Get a Free Savings Analysis Button */}
          <Button 
            className="bg-[#1F2937] text-white px-8 py-3 text-base font-medium rounded-full hover:bg-[#111827]"
          >
            Get a Free Savings Analysis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
