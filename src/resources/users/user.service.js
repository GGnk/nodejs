const usersRepo = require('./user.db.repository');
const Task = require('../tasks/task.model');

const getAll = () => usersRepo.getAll();
const getId = id => usersRepo.getId(id);
const postUser = newUserData => {
  const { login, name } = newUserData;
  if (!login || !name) return null;
  return usersRepo.createUser(newUserData);
};
const putUser = (user, id) => usersRepo.putUser(user, id);
const deleteUser = async userId => {
  usersRepo.deleteUser(userId);
  await Task.updateMany({ userId }, { userId: null });
};
module.exports = { getAll, getId, postUser, putUser, deleteUser };
