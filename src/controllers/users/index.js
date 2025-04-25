import User from "../../models/user.js";

const users = {
  1: {
    username: "john",
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
  2: {
    username: "jane",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
  },
};

const getUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: users,
  });
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: 'Created successfully',
      data: user,
      error: false
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

export { getUsers, createUser };
