import Card from "@/components/Card";
import Saved from "@/models/favorites";
import { connectDatabase } from "@/utils/database";

async function Favorites() {
  await connectDatabase();
  const savedCity = await Saved.find();
  console.log(savedCity);

  return (
    <section className="items-center">
      <div className="text-center my-5">
        <h1>
          Your <span className="blue_gradient">Favorite</span> Locations
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        {savedCity.length > 0 ? (
          savedCity.map((items) => (
            <Card
              key={items.cityId}
              id={items.cityId}
              name={items.cityName}
              country={items.countryName}
              county={items.locationName}
            />
          ))
        ) : (
          <h2 className="text-center mt-5 font-bold drop-shadow-xl text-4xl text-slate-100">
            You Have No Favorite Locations Saved Yet,
            <br />
            Go Explore Some!
          </h2>
        )}
      </div>
    </section>
  );
}

export default Favorites;
