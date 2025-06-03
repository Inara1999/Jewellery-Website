import multer, { diskStorage } from "multer";
import path from "path";
import randomstring from "randomstring";
import fs from "fs";  // Import fs module for file operations

// File type validation function
const fileType = (file, cb) => {
  const allowedTypes = /png|jpg|jpeg|gif|webp/;
  const isMatch = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeMatch = allowedTypes.test(file.mimetype);

  if (mimeMatch && isMatch) {
    cb(null, true); // File is valid
  } else {
    cb(new Error("Invalid file type. Only PNG, JPG, JPEG, GIF, or WEBP allowed."), false); // Reject file
  }
};

// Multer storage configuration
export const upload = multer({
  storage: diskStorage({
    destination: path.resolve("public", "profile"), // Make path more flexible
    filename: (req, file, cb) => {
      const uniqueString = randomstring.generate(8); // Generate random string for filename
      const ext = path.extname(file.originalname).toLowerCase(); // Get file extension
      cb(null, `${file.fieldname}_${uniqueString}${ext}`); // Create a unique filename
    },
  }),
  limits: {
    fileSize: 1000000 * 2, // 2MB file size limit
  },
  fileFilter: (req, file, cb) => {
    fileType(file, cb); // Call file type validation
  },
}).single("profile"); // Single file upload with the field name "profile"

// Middleware to delete old file before uploading new one
export const deleteOldFile = (req, res, next) => {
  if (req.user && req.user.profile_pic && req.user.profile_pic !== "empty_avatar.png") {
    const oldFilePath = path.join(__dirname, "public", "profile", req.user.profile_pic);
    // Check if the old file exists
    if (fs.existsSync(oldFilePath)) {
      // Delete the old file
      fs.unlinkSync(oldFilePath);
    }
  }
  next(); //Proceed
};
