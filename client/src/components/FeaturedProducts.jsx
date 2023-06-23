import React from "react";
import Button from "./Button";
import Card from "./Card";
import Card1 from "../assets/card (1).png";
import Card2 from "../assets/card (2).png";
import Card3 from "../assets/card (3).png";
import Card4 from "../assets/card (4).png";

const FeaturedProducts = () => {
  return (
    <section className="h-screen bg-Nura-Dark px-9 py-14">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-SpaceGrotesk text-header-4">
          Featured discounts
        </h3>
        <Button
          text="View All Discounts"
          icons="&nbsp; &rarr;"
          className="uppercase text-Nura-Green font-BaiJamjuree"
        />
      </div>
      <div className="grid grid-cols-4 gap-8 mt-10 place-content-center">
        <Card discount="30% OFF" image={Card1} />
        <Card discount="30% OFF" image={Card2} />
        <Card discount="30% OFF" image={Card3} />
        <Card discount="30% OFF" image={Card4} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
