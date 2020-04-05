const User = require('./user.model');

const data = [
  { id: 1, name: 'John', login: 'john', password: '12345' },
  { id: 2, name: 'David', login: 'david', password: '12345' },
  { id: 3, name: 'Oland', login: 'oland', password: '12345' },
  { id: 4, name: 'Jeki', login: 'jeki', password: '12345' },
  { id: 5, name: 'Puhin', login: 'puhin', password: '12345' },
  { id: 6, name: 'Ratu', login: 'ratu', password: '12345' },
  { id: 7, name: 'Voli', login: 'voli', password: '12345' },
  { id: 8, name: 'Moli', login: 'moli', password: '12345' }
];
const getAll = async () => {
  return data;
};
const getId = async id => {
  return data.find(item => item.id === id);
};
const postUser = async user => {
  const { name, login, password } = user;
  const newUser = new User({ name, login, password });
  data.push(newUser);
  return newUser;
};

const putUser = async (user, id) => {
  const ind = data.indexOf(id);
  return data.splice(ind, 1, user);
};
const deleteUser = async id => {
  const ind = data.indexOf(id);

  if (ind !== -1) {
    data.splice(ind, 1);
    return true;
  }

  return false;
};
module.exports = { getAll, getId, postUser, putUser, deleteUser };
