import React from "react";
import Image from "next/image";
import name from "../public/images/Name.png"

export default function Home() {
  return (
    <section className="w-full flex items-center flex-col title_section">
      <h1 className="text-center">
        <Image src={name} alt="City Gems" className="text-center block ml-auto mr-auto" width={550}/>
        <span className="text-center blue_gradient">Discover Places From Around The World</span>
      </h1>
      <p className="description text-center">Discover, adore, and save your favorite cities effortlessly with CityGems. Unveil the world's urban wonders, one click at a time. Your personalized cityscape awaits – start exploring now!</p>
      <input type="text" placeholder="Search" className="px-3 py-2 mt-10 md:w-10/12 bg-zinc-200 border shadow-xl border-slate-500 placeholder-slate-500 focus:outline-none focus:border-sky-600 focus:ring-cian-500 focus:bg-zinc-100 block rounded-md sm:text-sm focus:ring-1" />
      <button type="submit" className="btn mt-5 px-3 py-1 bg-cyan-500 block rounded-md">Submit</button>
    </section>
  );
}
