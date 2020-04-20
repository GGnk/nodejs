const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const getTaskById = async taskId => {
  return Task.findOne({ _id: taskId });
};

const createTask = async newTaskData => {
  return Task.create(newTaskData);
};

const updateTask = async (taskId, newTaskData) => {
  return Task.updateOne({ _id: taskId }, newTaskData);
};

const deleteTask = async taskId => {
  return Task.deleteOne({ _id: taskId });
};

module.exports = {
  getAll,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
