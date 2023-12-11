"use client"
import React , { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import name from "../public/images/Name.png"
import logo from "../public/images/Logo.png"

function Header(){
    let [navChange, setNavChange] = useState(false);

    function changeState(){
        if (navChange === false){
            setNavChange(true);
        } else {
            setNavChange(false);
        }
    }

    const router = useRouter();
    const [input, setInput] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push (`/results/${encodeURIComponent(input)}`);
    }


    return(
        <header>
            <div className="header_format">
                <div className="self-center flex-1 mx-5">
                    <a href="/" className="hover_fade px-2 pb-5 pt-4 rounded-xl">
                        <Image src={logo} className="inline" width={50} alt="Logo image"/>
                        <Image src={name} className="logo-name inline pt-2 pl-1" width={140} alt="City Gems"/>
                    </a>
                </div>
                <div className="self-center mr-3">
                    <label tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover_fade rounded-full h-10 w-10 p-2" onClick={changeState} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    {navChange && <ul tabIndex={0} className="fixed mt-6 z-[1] p-3 shadow bg-zinc-900 rounded-md text-slate-100 w-72">
                        <li className="hover_fade rounded-lg px-2 py-1"><a href="/" className="w-full inline-block">Homepage</a></li>
                        <li className="hover_fade rounded-lg px-2 py-1"><a href="/favorites" className="w-full inline-block">Favorites</a></li>
                        <li className="hover_fade rounded-lg px-2 py-1"><a href="/about" className="w-full inline-block">About</a></li>
                    </ul>}
                </div>
                <div className="flex-none self-center gap-2 ml-3 mr-11">
                    <div className="form-control">
                        <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search" className="w-24 md:w-auto px-3 py-2 bg-zinc-800 text-slate-100 border shadow-sm border-slate-700 placeholder-slate-500 focus:outline-none focus:border-sky-700 focus:ring-cian-500 focus:bg-zinc-700 block w-full rounded-md sm:text-sm focus:ring-1" value={input} onChange={(event) => setInput(event.target.value)}/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;