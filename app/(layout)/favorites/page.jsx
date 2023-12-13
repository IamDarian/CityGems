import React from "react";
import Card from "@/components/Card"
import Saved from "@/models/saved"
import { connectDatabase } from "@/utils/database"

const Favorites = async () => {
        await connectDatabase();
        const savedCity = await Saved.find();
        console.log(savedCity);

    return (
    <main className="flex flex-col justify-center items-center">
        <div className="text-center my-5">
            <h1>Your Favorite Locations</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-16">
            {savedCity && savedCity.map(items => <Card key={items.cityId} id={items.cityId} name={items.cityName} country={items.countryName} county={items.locationName}/>)}
        </div>
    </main>
    );
}

export default Favorites;