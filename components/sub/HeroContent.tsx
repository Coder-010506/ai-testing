"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Correct place to import

const HeroContent = () => {
  const router = useRouter(); // ✅ Must be inside the component function

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI-mock Interview
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}AI Partner{" "}
            </span>
            for Interview Success.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          HireQuest is your personalized AI-powered platform designed to revolutionize interview preparation and technical hiring.
          Whether you're a student gearing up for your dream job or
          a recruiter looking to streamline candidate evaluation — HireQuest has your back.
        </motion.p>

        {/* ✅ Correct onClick navigation */}
        <motion.button
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-white rounded-lg max-w-[200px]"
          onClick={() => {
            console.log("clicked");
            router.push("/sign-up");
          }}

        >
          Learn More!
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
