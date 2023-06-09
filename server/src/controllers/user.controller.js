import { userModel } from "../models/users.model.js";
import { asyncWrapper } from "../middlewares/asyncWrapper.js";
import {
  IsUsernameExists,
  encryptPassword,
  isPasswordMatch,
} from "../services/user.services.js";

export const getUsers = asyncWrapper(async (req, res) => {

    const allUsersData = await userModel.find();
  return res.status(200).json({ allUsersData });
});

export const signUp = asyncWrapper(async (req, res) => {
  console.log(req.body)

  const signUpInfo = req.body;
  const userExists = await IsUsernameExists(signUpInfo.username);
  console.log(userExists)
  if (userExists) return res.status(404).json({ msg: "Username Exists" });

  //Hashing password
  signUpInfo.password = await encryptPassword(signUpInfo.password);

  await userModel.create(signUpInfo);

  return res.status(200).json({ msg: "User is Created" });
});

export const login = asyncWrapper(async (req, res) => {

  const loginInfo = req.body;
  const userExists = await IsUsernameExists(loginInfo.username);

  if (userExists) {

    // Check if password matches as well
    const passwordMatch = await isPasswordMatch(loginInfo);
    
    if (passwordMatch) return res.status(200).json({ msg: "Logged" });

  }

  res.status(404).json({ msg: "Wrong Username/Password" });
});
