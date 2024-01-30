import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectToDB from "./config/dbConnection.js";
// import { v2 } from "cloudinary";

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`SERVER UP At http://localhost:${PORT}`);
});
