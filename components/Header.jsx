import React from "react";
import Image from "next/image";
import name from "../public/images/Name.png"
import logo from "../public/images/Logo.png"

function Header(){
    return(
        <header>
            <div className="header_format">
                <div className="self-center flex-1 mx-5">
                    <a href="/" className="hover_fade px-2 pb-5 pt-4 rounded-xl">
                        <Image src={logo} className="inline" width={50}/>
                        <Image src={name} className="logo-name inline pt-2 pl-1" width={140}/>
                    </a>
                </div>
                <div className="flex-none self-center gap-2 mx-6">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="w-24 md:w-auto px-3 py-2 bg-zinc-800 border shadow-sm border-slate-700 placeholder-slate-500 focus:outline-none focus:border-sky-700 focus:ring-cian-500 focus:bg-zinc-700 block w-full rounded-md sm:text-sm focus:ring-1" />
                    </div>
                </div>
                <div className="self-center mr-5">
                    <label tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover_fade rounded-full h-10 w-10 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    {/* <ul tabIndex={0} className="fixed mt-3 z-[1] p-2 shadow bg-zinc-900 rounded-lg text-slate-300 w-52">
                        <li className="hover_fade rounded-lg px-2 py-1"><a>Homepage</a></li>
                        <li className="hover_fade rounded-lg px-2 py-1"><a>Portfolio</a></li>
                        <li className="hover_fade rounded-lg px-2 py-1"><a>About</a></li>
                    </ul> */}
                </div>
            </div>
        </header>
    );
}

export default Header;