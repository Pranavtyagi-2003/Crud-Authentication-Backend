import { generateAuthToken } from "../Utils/sendToken.js";
import { Contact } from "../models/Contact.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { name, email, password, cPassword } = req.body;
  if (password !== cPassword) {
    return res.status(401).json({
      success: false,
      message: "Password didn't matched",
    });
  }

  let user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({
      success: false,
      message: "User Already Exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateAuthToken(user._id);

  res.status(200).json({
    success: true,
    message: "User Registered Successfully!",
    user,
    token,
  });
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(201).send({
      success: false,
      message: "Incorrect Email or Password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Incorrect Email or Passsword",
    });
  }

  const token = generateAuthToken(user._id);
  res.status(200).json({
    success: true,
    message: `Welcome back, ${user.name}`,
    user,
    token,
  });
};


export const addUser = async (req, res, next) => {
  const { name, email, phone, address } = req.body;

  await Contact.create({
    name,
    email,
    phone,
    address,
  });

  res.status(201).json({
    success: true,
    message: "User Added Successfully",
  });
};

export const getUser = async (req, res, next) => {
  const users = await Contact.find();

  res.status(201).json({
    success: true,
    users,
  });
};

export const deleteData = async (req, res, next) => {
  const user = await Contact.findById(req.params.id);
  await user.remove();
  res.status(200).json({
    success: true,
    message: "Data Deleted Successfully",
  });
};

export const getSingleData = async (req, res, next) => {
  const { _id } = req.params;
  const user = await Contact.findById({ _id });
  res.status(201).json({
    success: true,
    user,
  });
};

export const updateDate = async (req, res, next) => {
  const { _id } = req.params;
  const user = await Contact.findById({ _id });
  const { name, email, phone, address } = req.body;
  user.name = name;
  user.email = email;
  user.phone = phone;
  user.address = address;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Data Updated Successfully",
  });
};
