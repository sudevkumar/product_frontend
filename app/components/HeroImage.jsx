import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className=" h-[550px] w-full relative ">
      <img
        className=" w-full h-full filter brightness-100 blur-sm"
        src={
          "https://images.pexels.com/photos/29078812/pexels-photo-29078812/free-photo-of-scenic-mountain-trail-with-hikers-in-rocky-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-5xl font-bold">Test Text for All The Images</h1>
        <p className=" text-xl font-semibold">
          Test Text for All The Images Test Text for All The Images
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
