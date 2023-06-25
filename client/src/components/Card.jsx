import React from "react";
import Button from "./Button";

const Card = ({
  discount,
  image,
  className,
  oldPrice,
  newPrice,
  productName,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center h-full p-4 rounded-2xl bg-Nura-Light-Grey text-Nura-Dark ${className}`}
    >
      {/* Circle */}
      <div class="absolute top-5 left-5 mx-auto h-[55px] w-[53px] text-center break-all flex items-center justify-center">
        <div class=" w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex h-full w-full items-center justify-center bg-gray-800 rounded-full back">
            <span class="text-transparent bg-gradient-to-r from-[#de48f7] via-[#f8d481] to-[#ccff02] bg-clip-text font-SpaceGrotesk leading-none py-2 font-medium">
              {discount}
            </span>
          </div>
        </div>
      </div>
      <img src={image} alt="CardImage" className="w-full mx-auto -mt-4 h-max" />
      <div>
        <h3 className="px-4 pt-3 font-medium leading-none text-center font-SpaceGrotesk text-header-2">
          {productName}
        </h3>
        <span className="text-[14px] flex items-center justify-center font-bold text-Nura-Dark font-BaiJamjuree mt-2">
          <s className="text-[#808080]">${oldPrice}</s>&nbsp; ${newPrice}
        </span>
      </div>
      <Button
        text="SHOP NOW"
        icons="&nbsp; &rarr;"
        className="mt-6 mb-4 text-white transition-all duration-150 rounded-full bg-Nura-Btn-Blue hover:bg-Nura-Light-Grey hover:text-Nura-Dark font-BaiJamjuree"
      />
    </div>
  );
};

export default Card;
