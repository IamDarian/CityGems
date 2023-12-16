"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

function Results({ params }) {
  const decodedParams = decodeURIComponent(params.resultId);

  const [geoData, setGeoData] = useState();

  useEffect(() => {
    if (params) {
      fetchGeoData();
    }
    if (!params) {
      return <p>Loading...</p>;
    }
  }, [params.resultId]);

  const fetchGeoData = async () => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${params.resultId}&count=10&language=en`;

    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log(res);
      setGeoData(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-center">
          Results For
          <br />
          <span className="blue_gradient text-center">{decodedParams}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        {geoData && geoData.results ? (
          geoData.results.map((items) => (
            <Card
              key={items.id}
              id={items.id}
              name={items.name}
              country={items.country}
              county={items.admin1}
            />
          ))
        ) : (
          <span className="loader my-36"></span>
        )}
      </div>
    </section>
  );
}

export default Results;
