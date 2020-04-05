const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getId = id => usersRepo.getId(id);
const postUser = user => usersRepo.postUser(user);
const putUser = (user, id) => usersRepo.putUser(user, id);
const deleteUser = id => usersRepo.deleteUser(id);
module.exports = { getAll, getId, postUser, putUser, deleteUser };
