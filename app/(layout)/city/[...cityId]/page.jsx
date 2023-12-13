"use client"
import React, {useState, useEffect, useMemo} from "react";
import { useRouter } from 'next/navigation';
import dynamic from "next/dynamic";
import InfoCard from "@/components/InfoCard";
import Timer from "@/components/Timer";

export default function CityPage({ params }){

    const [geoData, setGeoData] = useState();

    useEffect(() => {
        if (params) {
            fetchGeoData();
        }
        if (!params) {
            return <p>Loading...</p>;
          }
    }, [params.cityId]);

    const part = params.cityId[0].split("_");

    const fetchGeoData = async () => {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${part[0]}&count=10&language=en`;
    
        try {
            const response = await fetch(url);
            const res = await response.json();
            const targetId = res.results.find(element => element.id === parseInt(part[1]));
            console.log(targetId);
            setGeoData(targetId);
        } catch (error) {
            console.error(error);
        }
    };

    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        { 
          loading: () => <span className="loader2"></span>,
          ssr: false
        }
    ), [])

    const handleFavorites = async () => {
        fetch(`/api/favorites/${geoData.name}/${geoData.id}/${geoData.country}/${geoData.admin1}`, {
            method: "POST",
        });
        // router.push("/favorites");
    }

    const deleteFavorites = async () => {
        fetch(`/api/favorites/${geoData.name}/${geoData.id}/${geoData.country}/${geoData.admin1}`, {
            method: "DELETE"
        })
        // router.push("/favorites");
        // !! Do an animation for favorite and unfavorite
    }

    const date = new Date().toLocaleTimeString('en-GB', {timeZone: geoData && geoData.timezone});
    const hours = date.split(":")[0];

    const router = useRouter();
    
    return(
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-center my-5">{geoData && geoData.name}</h1>
            {geoData && <div className="flex flex-wrap justify-center gap-5 my-5">
                <InfoCard 
                    title="Location" 
                    info1={geoData.country} 
                    info2={geoData.country_code}
                    county1={geoData.admin1}
                    county2={geoData.admin2}
                    imgData={`https://flagsapi.com/${geoData.country_code}/flat/48.png`}
                />
                <InfoCard 
                    title="Population" 
                    info1={geoData.population} 
                    imgData={"https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png"}
                />
                <InfoCard
                    title="Elevation"
                    info1={`${geoData.elevation}m`}
                    imgData={"https://images.vexels.com/media/users/3/137476/isolated/preview/d89adf16dc6fce8b9abe54aec3af2546-four-peak-mountain-icon.png"}
                />
                <InfoCard title="Time" imgData={hours >= 6 && hours < 18 ? "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png" : "https://cdn-icons-png.flaticon.com/512/208/208293.png"} >
                    <Timer timezone={geoData.timezone} />
                </InfoCard>  
            </div>}
            {geoData && <div className="map_width h-[28rem] bg-sky-700 rounded-md p-3 shadow-lg my-5">
                    <Map latitude={geoData.latitude} longitude={geoData.longitude}/>
            </div>}
            <div>
                <button className="btn px-3 py-2 bg-cyan-500 rounded-lg my-5 mx-2" onClick={handleFavorites}>Favorite</button>
                <button className="btn px-3 py-2 bg-red-500 rounded-lg my-5 mx-2" onClick={deleteFavorites}>Delete Favorite</button>
                <a href="/"><button className="btn px-3 py-2 text-slate-50 bg-slate-800 rounded-lg my-5 mx-2">Explore Other</button></a>
            </div>
        </main>
    );
}