const UserModel = require("../models/UserModel");

exports.Register = async (req, res) => {
  try {
    const newUser = new UserModel({
      ...req.body,
    });

    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.GetAllUsers = async (req, res) => {
  try {
    const AllUser = await UserModel.find();

    res.status(200).json(AllUser);
  } catch (error) {}
};
