const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  // Set File Destination
  destination: function (req, file, cb) {
    cb(null, "upload_images");
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`; // File name generation
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Maximum 1MB Support
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png/; // JPG, PNG and JPEG Supported
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Error: Only JPEG, JPG and PNG images are allowed."));
    }
  },
}).single("file");

module.exports = {
  upload,
};
