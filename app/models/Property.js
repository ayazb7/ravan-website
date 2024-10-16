import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const propertychema = new Schema({
  type: String,
  status: String,
  bedrooms: String,
  price: Number,
  property: String,
  photoUrl: String,
  address: String,
});

const Property =
  mongoose.models.Properties || mongoose.model("properties", propertychema);

export default Property;
