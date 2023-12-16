"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import template from "@/public/images/template.jpg";

function Card(props) {
  const [imgData, setImgData] = useState();

  useEffect(() => {
    if (props) {
      fetchImgData();
    }
    if (!props) {
      return <p>Loading...</p>;
    }
  }, [props.name]);

  const fetchImgData = async () => {
    const url = `https://api.teleport.org/api/urban_areas/slug:${props.name
      .toLowerCase()
      .replace(/\s+/g, "-")}/images/`;

    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log(res);
      setImgData(res.photos[0].image.mobile);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-96 my-7 card-bg rounded-xl overflow-hidden shadow-lg">
      {/* {imgData && imgData !== undefined ? <figure><img src={imgData} alt="City photo"/></figure> : <figure><Image src={template} alt="City photo"/></figure>} */}
      <div className=" flex flex-col card-body p-7">
        <h2 className="font-bold text-2xl text-slate-100 mb-2 truncate">
          {props.name}
        </h2>
        <p>
          Location: {props.country}, {props.county}
        </p>
        <div className="self-end mt-4">
          <Link href={`/city/${props.name}_${props.id}`}>
            <button className="btn px-3 py-2 bg-cyan-500 block rounded-md shadow">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
