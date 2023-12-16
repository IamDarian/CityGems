"use client";
import Link from "next/link";

function Card(props) {
  return (
    <div className="w-96 my-3 card-bg rounded-xl overflow-hidden shadow-lg">
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
