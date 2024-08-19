const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({
     ...obj, 
     owner:"66b76c259ceeb2a17fb16b70" 
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
