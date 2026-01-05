import mongoose from "mongoose";

export async function initDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://pedromarquespy_db_user:GMTR9xLLLS38EvYU@sarcasticreadercluster.npayqhl.mongodb.net/?appName=SarcasticReaderCluster"
    );
    console.log("Connected to MongoDB successfully ✅");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
