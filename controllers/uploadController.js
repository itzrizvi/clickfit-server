const express = require("express");
const router = express.Router();
const uploadModel = require("../models/uploadModel");

router.post("/uploadimages", (req, res) => {
  uploadModel.upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err.message,
        errorcode: 400,
      });
    }
    // Handle the uploaded file here
    res
      .status(200)
      .json({ success: true, message: "File uploaded successfully" });
  });
});

module.exports = router;
