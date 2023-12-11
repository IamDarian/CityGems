import React from "react";
import Card from "@/components/Card"

function Favouries(){
    return (
    <main className="flex flex-col justify-center items-center">
        <div className="text-center my-5">
            <h1>Your Favorite Locations</h1>
        </div>
        <Card />
    </main>
    );
}

export default Favouries;