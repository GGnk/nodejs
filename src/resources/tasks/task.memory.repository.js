const Task = require('./task.model');

const tasks = [
  {
    id: '1',
    title: 'Task1',
    order: '1',
    description: 'Description1',
    userId: '1',
    boardId: '1',
    columnId: '1'
  },
  {
    id: '2',
    title: 'Task2',
    order: '2',
    description: 'Description2',
    userId: '2',
    boardId: '2',
    columnId: '2'
  },
  {
    id: '3',
    title: 'Task3',
    order: '3',
    description: 'Description3',
    userId: '3',
    boardId: '3',
    columnId: '3'
  },
  {
    id: '4',
    title: 'Task4',
    order: '4',
    description: 'Description4',
    userId: '4',
    boardId: '4',
    columnId: '4'
  },
  {
    id: '5',
    title: 'Task5',
    order: '5',
    description: 'Description5',
    userId: '5',
    boardId: '5',
    columnId: '5'
  }
];

const getAll = async params => {
  return tasks.filter(item => item.boardId === params.boardId);
};

const getTaskById = async params => {
  return tasks
    .filter(item => item.boardId === params.boardId)
    .find(item => item.id === params.id);
};

const createTask = async (params, details) => {
  const { title, order, description, userId, columnId } = details;
  const boardId = params.boardId;

  const newTask = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });

  tasks.push(newTask);

  return newTask;
};

const updateTask = async (params, details) => {
  const task = tasks
    .filter(item => item.boardId === params.boardId)
    .find(item => item.id === params.id);

  if (task) {
    details.boardId = params.boardId;

    Object.assign(task, details);

    return task;
  }

  return false;
};

const deleteTask = async params => {
  const index = tasks.filter(
    item => item.boardId === params.boardId && item.id === params.id
  );

  if (index.length) {
    tasks.splice(index, 1);
    return true;
  }

  return false;
};

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
