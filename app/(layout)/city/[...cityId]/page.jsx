"use client";
import { useState, useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import InfoCard from "@/components/InfoCard";
import Timer from "@/components/Timer";

export default function CityPage({ params }) {
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
      const targetId = res.results.find(
        (element) => element.id === parseInt(part[1])
      );
      console.log(targetId);
      setGeoData(targetId);
    } catch (error) {
      console.error(error);
    }
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <span className="loader2"></span>,
        ssr: false,
      }),
    []
  );

  const [favorite, setFavorite] = useState();

  const handleFavorites = async () => {
    fetch(
      `/api/favorites/${geoData.name}/${geoData.id}/${geoData.country}/${geoData.admin1}`,
      {
        method: "POST",
      }
    );
    if (!favorite) {
      toast.success("The location has been added to your favorites!");
      setFavorite(true);
    } else {
      toast.info("This location has already been added to the favorites!");
    }
  };

  const deleteFavorites = async () => {
    fetch(
      `/api/favorites/${geoData.name}/${geoData.id}/${geoData.country}/${geoData.admin1}`,
      {
        method: "DELETE",
      }
    );
    if (favorite) {
      toast.error("The location has been removed from your favorites!");
      setFavorite(false);
    } else {
      toast.info("This location has not been yet added to the favorites!");
    }
  };

  const date = new Date().toLocaleTimeString("en-GB", {
    timeZone: geoData && geoData.timezone,
  });
  const hours = date.split(":")[0];

  const contextClass = {
    success: "bg-sky-700",
    error: "bg-sky-700",
    info: "bg-sky-700",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <section className="flex flex-col justify-center items-center overflow-cisible">
      <h1 className="text-center my-5">{geoData && geoData.name}</h1>
      {geoData && (
        <div className="flex flex-wrap justify-center gap-5 my-5">
          <InfoCard
            title="Location"
            info1={geoData.country}
            info2={geoData.country_code}
            county1={geoData.admin1}
            county2={geoData.admin2}
            imgData={`https://flagsapi.com/${geoData.country_code}/flat/48.png`}
          />
          {geoData.population && (
            <InfoCard
              title="Population"
              info1={geoData.population}
              imgData={
                "https://icons.veryicon.com/png/o/miscellaneous/site-icon-library/team-28.png"
              }
            />
          )}
          <InfoCard
            title="Elevation"
            info1={`${geoData.elevation}m`}
            imgData={
              "https://images.vexels.com/media/users/3/137476/isolated/preview/d89adf16dc6fce8b9abe54aec3af2546-four-peak-mountain-icon.png"
            }
          />
          <InfoCard
            title="Time"
            imgData={
              hours >= 6 && hours < 18
                ? "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sunny-512.png"
                : "https://cdn-icons-png.flaticon.com/512/208/208293.png"
            }
          >
            <Timer timezone={geoData.timezone} />
          </InfoCard>
        </div>
      )}
      {geoData && (
        <div className="map_width h-[28rem] bg-sky-700 rounded-md p-3 shadow-lg my-5">
          <Map latitude={geoData.latitude} longitude={geoData.longitude} />
        </div>
      )}
      <div>
        <button
          className="btn-success px-3 py-2 text-slate-50 bg-lime-600 rounded-lg mt-5 mb-10 mx-2"
          onClick={handleFavorites}
        >
          Add to favorites
        </button>
        <button
          className="btn-error px-3 py-2 text-slate-50 bg-red-600 rounded-lg mt-5 mb-10 mx-2"
          onClick={deleteFavorites}
        >
          Remove from favorites
        </button>
      </div>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " sticky z-20 bottom-3 flex p-1 my-3 min-h-10 w-fit rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-sm font-white font-med inline-block p-3"}
        position="bottom-left"
        autoClose={3000}
      />
    </section>
  );
}
