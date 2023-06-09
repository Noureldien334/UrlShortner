import { userModel } from "../models/users.model.js";

import dotenv from "dotenv";
import bcrypt from "bcrypt";

export const IsUsernameExists = async (username) => {
  const usernameSearch = await userModel.findOne({ username: username });

  if (usernameSearch !== null) return true;
  return false;
};

export const isPasswordMatch = async (loginInfo) => {
  const userData = await userModel.findOne({ username: loginInfo.username });
  const credentialsValid = await bcrypt.compare(
    loginInfo.password,
    userData.password
  );

  if (credentialsValid) return true;
  return false;
};

export const encryptPassword = async (password) => {
  dotenv.config({ path: "../../.env" });

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS)
  );
  return hashedPassword;
};
