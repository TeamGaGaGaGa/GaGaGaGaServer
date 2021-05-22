import mongoose from "mongoose";
import config from "../config"; 
import Friends from "../models/Friends";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");
    Friends.createCollection().then(function(collection){
      console.log("Friends Collection is created!");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
