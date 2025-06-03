import bcrypt from "bcryptjs";
export const sendToken = async (res, user, msg) => {
  const token = await user.getAuthToken();

  res.status(200).json({
    status: true,
    message: msg,
    accessToken: token,
    content: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      role:user.role,
      profile_pic: user.profile_pic,
    },
  });
};

export const sendResponse = (res, status, msg, user) => {
  res.status(status ? 200 : 400).json({
    status: status,
    message: msg,
    content: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      profile_pic: `http://127.0.0.1:3000/profile/${user?.profile_pic}`,
    },
  });
};
export const sendError = (res, error) => {
  res.status(500).json({ status: false, message: error.message });
};

export const hashPassword = async (pass) => await bcrypt.hash(pass, 10);