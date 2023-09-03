const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const uploadController = require("./controllers/uploadController");
dotenv.config();

// CORS OPTIONS
const corsOptions = {
  origin: [`${process.env.CLIENT_ORIGIN_LOCAL}`],
  credentials: true,
};

// Serve static files from the 'upload_images' folder
app.use(express.static("upload_images"));
app.use(cors(corsOptions));

// Use the uploadController for file uploads
app.use("/api", uploadController);

// Root
app.get("/", (req, res) => {
  res.send(`Server Is Running on port: ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
