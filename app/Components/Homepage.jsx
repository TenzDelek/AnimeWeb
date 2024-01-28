"use client";
import React, { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../Context/global";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

const Homepage = () => {
  const [rendered, setrendered] = useState("popular");
  const { 
    handlechange,
     handlesubmit,
     searchanime, 
     search ,
     getPopularAnime,
     getairinganime,
     getupcomingAnime
    } =
    useGlobalContext();
  const switchcomponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
        case "airing":
            return <Airing rendered={rendered} />
        case "upcoming":
            return <Upcoming rendered={rendered} />
      default:
        return <Popular rendered={rendered} />;
    }
  };
  return (
    <div>
      <header className=" p-4 w-[60%] m-auto transition-all duration-200 ease-in-out">
        <div className=" flex items-center justify-center mb-8 font-bold uppercase">
          <h1>
            {rendered === "popular"
              ? "popular anime"
              : rendered === "airing"
              ? "airing anime"
              : "upcoming anime"}
          </h1>
        </div>
        <div className=" flex items-center justify-center gap-4">
          <div>
            <button
              onClick={() => {
                setrendered("popular");
              }}
             className=" flex items-center px-3 py-2 rounded-lg
              border-gray-200 border-2 text-sm">
              Popular
            </button>
          </div>
          <form onSubmit={handlesubmit} action="" className=" relative w-full">
            <div className=" relative transition-all ease-in-out duration-150" >
              <input className=" text-black w-full p-2 border-none outline-none rounded-md "
                type="text"
                placeholder="search anime"
                value={search}
                onChange={handlechange}
              />
              <button className=" text-black absolute right-0 translate-y-[-50%] top-[50%] flex items-center px-3 py-2 
               border-gray-600 border-l-2 text-sm" type="submit" >
                Search
              </button>
            </div>
          </form>
          <div>
            <button  className=" flex items-center px-3 py-2 rounded-lg
              border-gray-200 border-2 text-sm"
              onClick={() => {
                setrendered("airing");
                getairinganime()
              }}
            >
              Airing
            </button>
          </div>
          <div>
            <button className=" flex items-center px-3 py-2 rounded-lg
              border-gray-200 border-2 text-sm"
              onClick={() => {
                setrendered("upcoming");
                getupcomingAnime()
              }}
            >
              Upcoming
            </button>
          </div>
        </div>
      </header>
              {switchcomponent()}

    </div>
  );
};

export default Homepage;
