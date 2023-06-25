import React from "react";
import Empty from "../assets/empty.png";
import Iphone from "../assets/ihpone.png";

const ForYourEars = () => {
  return (
    <section className="px-9 h-screen bg-gradient-to-r from-[#3633F5] via-[#3381F5] to-[#3381F5] pt-4 flex items-center justify-center gap-16">
      <div className="relative h-[100%]">
        <div>
          <img src={Empty} alt="" className="w-full h-[80%]"/>
        </div>
        <img src={Iphone} alt="" className="absolute top-0 rounded-2xl" />
      </div>
      <div className="details">
        <h3>For your ears only</h3>
        <p>
          Normal hearing varies significantly from person to person, and these
          variations make a <span>big difference</span> to how you experience
          music
        </p>
        <p>
          The first time you use Nura earbuds they
          <span>measure your hearing</span> to create your personalised hearing
          profile
        </p>
      </div>
    </section>
  );
};

export default ForYourEars;
