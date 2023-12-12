import React from "react";
import Card from "@/components/Card"
import Saved from "@/models/saved"
import { connectDatabase } from "@/utils/database"

const Favouries = async () => {
    await connectDatabase();
    const savedCity = await Saved.find();
    console.log(savedCity);

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