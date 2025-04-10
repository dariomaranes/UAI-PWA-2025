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

export { getUsers };
