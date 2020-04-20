const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getId = async userId => {
  return User.findOne({ _id: userId });
};

const createUser = async newUserData => {
  return User.create(newUserData);
};

const putUser = async (userId, userData) => {
  return User.updateOne({ _id: userId }, userData);
};

const deleteUser = async userId => {
  return User.deleteOne({ _id: userId });
};

module.exports = { getAll, getId, createUser, putUser, deleteUser };
