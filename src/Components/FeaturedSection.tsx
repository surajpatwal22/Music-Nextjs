"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import courseData from '../data/music_courses.json';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link"

function FeaturedSection(){
    const words = [
        {
          text: "Learn",
        },
        {
          text: "with",
        },
        {
          text: "the",
        },
        {
          text: "Best.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

    return(
        <div className='py-12 bg-slate-950'>
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-2xl leading-8 flex justify-center font-extrabold tracking-tight text-white sm:text-4xl" >
                <TypewriterEffectSmooth words={words} />
                </p>
            </div>
        </div>
        <div>
            
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All courses
            </Link>
        </div>
        </div>
        
    )
}
export default FeaturedSection;