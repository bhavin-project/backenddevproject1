import connectDb from "./db/dbConnect.js";
import "dotenv/config";
import app from "./app.js";

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is connected on port number: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!!", err);
  });
