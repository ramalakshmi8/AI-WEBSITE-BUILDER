import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error", error);
  }
};
export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("DB connected");

// ✅ ADD THIS BLOCK RIGHT HERE
// const db = mongoose.connection;

// db.once("open", async () => {
//   try {
//     const collection = db.db.collection("websites");

//     // 🔥 remove old broken index
//     await collection.dropIndexes();

//     // 🔥 create correct index
//     await collection.createIndex(
//       { slug: 1 },
//       { unique: true, sparse: true },
//     );

//     console.log("Slug index fixed ✅");
//   } catch (err) {
//     console.log("Index fix error:", err.message);
//   }
// });
//   } catch (error) {
//     console.log("DB connection error", error);
//   }
// };

// export default connectDB;
