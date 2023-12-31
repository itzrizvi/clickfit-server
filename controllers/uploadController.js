const express = require("express");
const router = express.Router();
const uploadModel = require("../models/uploadModel");

// Route Declaration and Controller Response Handler
router.post("/uploadimages", (req, res) => {
  uploadModel.upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err.message,
        errorcode: 400,
      });
    }
    res
      .status(200)
      .json({ success: true, message: "File uploaded successfully" });
  });
});

module.exports = router;
