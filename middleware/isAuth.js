import { sendError, sendResponse } from "../helper/response.js";
import { msg } from "../i18n/lang.js";
import Users from "../model/auth.model.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return sendResponse(res, false, msg.requireToken);
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decoded);
    req.user = await Users.findById(decoded._id);

    next();
  } catch (error) {
    sendError(res, error);
  }
};

export const isAuthoriz = (role = []) => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return sendResponse(res, false, msg.notFound);
      }
      if (!role.includes(req.user.role)) {
        return sendResponse(res, false, msg.access);
      }

      next();
    } catch (error) {
      sendError(res, error.message);
    }
  };
};