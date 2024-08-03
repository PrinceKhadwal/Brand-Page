import React from "react";
import HeroImg from "../assets/hero-image.png";
import FlipkartIcon from "../assets/flipkart.png";
import AmazonIcon from "../assets/amazon.png";

const Hero = () => {
  return (
    <>
      <div className="md:w-[90%] lg:w-[95vw]  text-center lg:text-left flex flex-col items-center justify-center lg:flex-row-reverse max-w-[1200px] mx-auto mt-20">
        <div className="basis-1/2">
          <img src={HeroImg} alt="hero-img" className="" />
        </div>

        <div className="basis-1/2">
          <h1 className="uppercase  font-bold text-8xl  lg:font-extrabold py-5">Your Feet Deserve The Best</h1>
          <p className="uppercase  font-semibold text-gray-600">
            Your Feet Deserve The Best and we're here to help you with our
            shoes. Your Feet Deserve The Best and we're here to help you with
            our shoes.
          </p>

          <div className="flex gap-10 my-8 justify-center lg:justify-normal">
            <button className="bg-red-600 text-white px-4 py-1 text-lg font-semibold">Shop Now</button>
            <button className="border px-4 py-1 text-lg font-semibold border-black">Category</button>
          </div>

          <p className="">Also Available on</p>

          <div className="flex gap-2 justify-center lg:justify-normal">
            <img src={FlipkartIcon} alt="icon-1" />
            <img src={AmazonIcon} alt="icon-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
