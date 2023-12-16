import mongoose from "mongoose";

const savedSchema = new mongoose.Schema({
  cityName: {
    required: true,
    type: String,
  },
  countryName: {
    required: true,
    type: String,
  },
  locationName: {
    required: true,
    type: String,
  },
  cityId: {
    required: true,
    type: String,
  },
  savedAt: {
    type: Date,
    default: Date.now,
  },
});

const CitySaved =
  mongoose.models.CitySave || mongoose.model("CitySave", savedSchema);

export default CitySaved;
