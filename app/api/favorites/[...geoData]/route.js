import { connectDatabase } from "@/utils/database";
import { NextResponse } from "next/server";
import CitySaved from "@/models/favorites";

async function POST(req, { params }) {
  try {
    await connectDatabase();

    const geoData = params.geoData;
    console.log(geoData);
    const favoriteExists = await CitySaved.findOne({
      cityId: geoData[1],
    });

    if (!favoriteExists) {
      await CitySaved.create({
        cityName: geoData[0],
        cityId: geoData[1],
        countryName: geoData[2],
        locationName: geoData[3],
      });
    }
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({
    success: true,
  });
}

async function DELETE(req, { params }) {
  try {
    await connectDatabase();

    const geoData = params.geoData;
    const favoriteExists = await CitySaved.findOne({
      cityId: geoData[1],
    });

    if (favoriteExists) {
      await favoriteExists.deleteOne();
    }
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({
    success: true,
  });
}

export { POST, DELETE };
