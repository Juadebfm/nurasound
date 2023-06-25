import React from "react";
import Button from "./Button";
import Card from "./Card";
import Card1 from "../assets/card (1).png";
import Card2 from "../assets/card (2).png";
import Card3 from "../assets/card (3).png";
import Card4 from "../assets/card (4).png";

const FeaturedProducts = () => {
  return (
    <section className="h-screen py-16 bg-Nura-Dark px-9">
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
        <Card
          productName="NuraPhone"
          discount="25% OFF"
          image={Card1}
          oldPrice="399"
          newPrice="299.25"
          className="shadow-sm shadow-slate-400"
        />
        <Card
          productName="NuraTrue"
          discount="35% OFF"
          image={Card2}
          oldPrice="199.99"
          newPrice="139.99"
          className="shadow-sm shadow-slate-400"
        />
        <Card
          productName="NuraBuds 2"
          discount="25% OFF"
          image={Card3}
          oldPrice="119"
          newPrice="89.25"
          className="shadow-sm shadow-slate-400"
        />
        <Card
          productName="Nura Bluetooth 5.3 Audio Transmitter"
          discount="25% OFF"
          image={Card4}
          oldPrice="59"
          newPrice="44.25"
          className="shadow-sm shadow-slate-400"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
