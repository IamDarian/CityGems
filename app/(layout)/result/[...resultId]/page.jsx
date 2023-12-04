"use client"
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

function Results({ params }){

    const [data, setData] = useState();

    useEffect(() => {
        if (params) {
            fetchData();
        }
        if (!params) {
            return <p>Loading...</p>;
          }
    }, [params.resultId]);

    const fetchData = async () => {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${params.resultId}&count=10&language=en`;
    
        try {
            const response = await fetch(url);
            const res = await response.json();
            console.log(res);
            setData(res);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center">   
                <h1 className="text-center">Results For
                <br/>
                {data ? <span className="blue_gradient text-center">{data && data.results[0].name}</span> : <span className="blue_gradient">Loading...</span>}
                </h1>  
            </div>
            <div className="flex flex-wrap justify-center gap-16">
                {data && data.results.map(items => <Card key={items.id} name={items.name} content={items.timezone}/>)}
            </div>
        </section>
    );
}

export default Results;