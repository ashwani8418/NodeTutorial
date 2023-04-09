const userService = require("../Services/user.service");

const getUsers = (req, res) => {
  const user = userService.getUserFromDB();
  res.json({
    data: user,
  });
};

const getUserByID = (req, res) => {
  const userId = req.params.id;
  const userData = userService.getUserFromDbById(userId);
  console.log(userData);
  res.json({
    success : true,
    data: userData
  });
};

const createUser = (req, res) => {
  console.log("user Details ", req.body);
  const users = userService.createUserInDB(req.body);
  res.json({
    success: true,
    data: users
  });
};

const updateUserById = (req, res) => {
  const userData = req.body;
  const userId = req.params.id;
  const updatedUsers = userService.updateUserById(userId, userData);
  res.json({
    success: true,
    message : "Updated Successfully",
    data : updatedUsers
  });
};

const deleteUserdataById = (req, res) =>{
    const userid = req.params.id;
    const deleteUser = userService.deleteUserByIdFromDB(userid);
    res.json({
        success : true,
        message : `Deleted SuccessFully the user id ${userid}`
    })
}
module.exports = { getUsers, getUserByID, createUser, updateUserById, deleteUserdataById };
