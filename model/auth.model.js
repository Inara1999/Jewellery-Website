import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
  },
  password: String,
  phone: String,
  profile_pic: {
    type: String,
    default: "empty_avatar.png",
  },
  role: {
    type: String,
    enum: ["user", "admin", "super-admin", "manager"],
  },

  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: Date,
});

userSchema.methods.isPassMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getAuthToken = async function () {
  return await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
};

export default mongoose.model("user", userSchema);