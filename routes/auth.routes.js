import express from "express";
import {
  changePassword,
  changeProfile,
  login,
  profile,
  register,
  uploadPic,
} from "../controller/auth.controller.js";
import { isAuth, isAuthoriz } from "../middleware/isAuth.js";
import { upload } from "../middleware/storage.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile",isAuth,isAuthoriz(["user", "admin", "manager", "super-admin"]),
  profile
);

router.put("/update-profile", isAuth, changeProfile);
router.put("/change-password", isAuth, changePassword);
router.post("/upload-picture", isAuth, upload, uploadPic);

export default router;