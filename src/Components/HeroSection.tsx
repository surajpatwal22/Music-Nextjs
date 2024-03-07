"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";

// const words = `Dive into our comprehensive music courses and transform your magical journey today.Whether you are a begineer or looking to refine your skills, join us to unlock your true potential.
// `;

 function HeroSection(){

    const words = [
        {
          text: "Master",
        },
        {
          text: "the",
        },
        {
          text: "Art",
        },
        {
          text: "of",
        },
        {
          text: "Music.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

    const images = [
      
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       
      ];
    return(
        <div className="h-auto md:h-[38rem] w-full flex flex-col items-center relative overflow-hidden mx-auto  md:py-0 ">
         <ImagesSlider className="h-[38rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <TypewriterEffectSmooth words={words} />
        </motion.p>
        <motion.p className="font-bold text-sm md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 px-8 mb-4">
        {/* <TextGenerateEffect words={words} /> */}
        Dive into our comprehensive music courses and transform your magical journey today.  Whether you are a begineer or looking to refine your skills, join us to unlock your true potential
        </motion.p>
        <Button borderRadius="1.75rem" 
        className="bg-white dark:bg-slate-950 text-black dark:text-white border-neutral-200 border-slate-800">
          <span>Explore Courses →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Button>
      </motion.div>
    </ImagesSlider>
        </div>
    )
}

export default  HeroSection; 