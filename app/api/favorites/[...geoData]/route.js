import { connectDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
import CitySaved from "@/models/saved";

export async function POST(req, { params }){
    // console.log(req);
    try{
        await connectDatabase();

        const geoData = params.geoData;
        console.log(geoData);
        const favoriteExists = await CitySaved.findOne({
            cityId: geoData
        });

        if(!favoriteExists){
            await CitySaved.create({
                cityId: geoData[1],
                cityName: geoData[0],
            });
        }
    } catch(error) {
        console.log(error);
    }
    return NextResponse.json({
        success: true,
    });
}