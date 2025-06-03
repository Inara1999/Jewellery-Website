import {
  hashPassword,
  sendError,
  sendResponse,
  sendToken,
} from "../helper/response.js";
import { msg } from "../i18n/lang.js";
import Users from "../model/auth.model.js";
import fs from "fs";

export const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !email || !password) {
      return sendResponse(res, false, msg.requiredField);
    }
    const user = await Users.findOne({ email });
    if (user) {
      return sendResponse(res, false, msg.userExist);
    }

    const data = {
      ...req.body,
      role: "user",
      password: await hashPassword(password),
    };

    const newUser = new Users(data);
    await newUser.save();
    return sendToken(res, newUser, msg.success);
  } catch (error) {
    sendError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendResponse(res, false, msg.requiredField);
    }
    const user = await Users.findOne({ email });

    if (!user) {
      return sendResponse(res, false, msg.notFound);
    }

    const isMatch = await user.isPassMatch(password);

    if (!isMatch) {
      return sendResponse(res, false, msg.passwordInvalid);
    }

    return sendToken(res, user, msg.success);
  } catch (error) {
    return res.status(500).json({ status: false, error });
  }
};
export const profile = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.notFound);
    }

    return sendResponse(res, true, msg.success, req.user);
  } catch (error) {
    sendError(res, error);
  }
};

export const changeProfile = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.notFound);
    }

    const update = await Users.findByIdAndUpdate(
      { _id: req.user._id },
      req.body,
      {
        new: true,
      }
    );

    return sendResponse(res, true, msg.success, update);
  } catch (error) {
    sendError(res, error);
  }
};

export const changePassword = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.notFound);
    }
    console.log(req.body);
    const { newPassword, oldPassword } = req.body;

    const isMatch = await req.user.isPassMatch(oldPassword);

    if (!isMatch) {
      return sendResponse(res, false, msg.passwordInvalid);
    }

    const pass = {
      password: await hashPassword(newPassword),
    };

    const update = await Users.findByIdAndUpdate({ _id: req.user._id }, pass, {
      new: true,
    });

    return sendResponse(res, true, msg.success, update);
  } catch (error) {
    sendError(res, error);
  }
};

export const uploadPic = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.notFound);
    }

    if (!req.file) {
      return sendResponse(res, false, msg.file);
    }

    // ✅ Avoid deleting default image
    if (req.user.profile_pic && req.user.profile_pic !== "empty_avatar.png") {
      const filePath = `./public/profile/${req.user.profile_pic}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    const data = { profile_pic: req.file.filename };

    const update = await Users.findByIdAndUpdate({ _id: req.user._id }, data, {
      new: true,
    });

    return sendResponse(res, true, msg.success, update);
  } catch (error) {
    sendError(res, error);
  }
};
