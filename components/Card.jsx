import React from "react";
import Image from "next/image";
import city from "@/public/images/city1.jpg"

function Card(props){
    return(
        <div className="w-96 my-7 backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden shadow-md">
            <figure><Image src={city} alt="City photo"/></figure>
            <div className=" flex flex-col card-body p-7">
                <h2 className="font-semibold text-lg">{props.name}</h2>
                <p>Timezone: {props.content}</p>
                <div className="
                self-end">
                    <button className="btn mt-5 px-3 py-2 bg-cyan-500 block rounded-md shadow" >See more</button>
                </div>
            </div>
        </div>
    );
}

export default Card;