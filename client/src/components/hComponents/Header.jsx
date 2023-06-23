import React from "react";
import Logo from "../../assets/Vector.png";
import Button from "../Button";

const Header = () => {
  const imgURL =
    "https://res.cloudinary.com/juadeb/image/upload/v1687355259/hero_zyr3ke.png";
  return (
    <header className="h-screen">
      <div
        className="h-[100%]  px-14 pt-8 font-SpaceGrotesk"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${imgURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav className="flex items-center justify-between text-[17px] text-white">
          <div className="flex items-center justify-between space-x-4">
            <img src={Logo} alt="" srcset="" />
            <ul className="flex space-x-4 capitalize">
              <li>Products</li>
              <li>Subscription</li>
              <li>Why Nura?</li>
              <li>support</li>
            </ul>
          </div>
          <button>Cart (0)</button>
        </nav>
        <section className="text-center text-white mt-[22rem]">
          <h3 className="font-BaiJamjuree uppercase text-header-2 font-light">
            Our biggest sale now live
          </h3>
          <h1 className="font-SpaceGrotesk capitalize text-header-1 leading-none">
            Black friday starts now!
          </h1>
          <Button
            text="SHOP SALE NOW"
            icons="&nbsp; &rArr;"
            className="bg-white text-black mt-8 rounded-full"
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
