import { connectDatabase } from "@/utils/database";
import Saved from "@/models/saved";

async function handler(req, res){
    if (req.method === "POST") {
        const { data } = req.body;
    }
    try{
        await connectDatabase();

        const favoriteExists = await Saved.findOne({
            cityId: test.cityId
        });

        if(!favoriteExists){
            await Saved.create({
                cityId: test.cityId,
                cityName: test.name,
                locationName: test.location
            });
        }
    } catch(error) {
        console.log(error);
    }
}

export { handler };