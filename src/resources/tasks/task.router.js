const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const Task = require('./task.model');
const createError = require('http-errors');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT } = require('http-status-codes');

router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll(req.params);
    res.status(OK).json(tasks.map(Task.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const taskById = await tasksService.getTaskById(req.params);
    if (!taskById.id) throw new createError(NOT_FOUND, 'Task not found');
    else res.status(OK).json(Task.toResponse(taskById));
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const newTask = await tasksService.createTask(req.params, req.body);
    if (!newTask) throw new createError(BAD_REQUEST, 'Bad data');
    else res.status(OK).json(Task.toResponse(newTask));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const updTask = await tasksService.updateTask(req.params, req.body);
    if (updTask.id) {
      res.status(OK).json(Task.toResponse(updTask));
    } else {
      throw new createError(BAD_REQUEST, 'Bad data');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  const delTask = await tasksService.deleteTask(req.params);

  try {
    if (delTask) res.status(NO_CONTENT).send();
    else throw new createError(BAD_REQUEST, 'Bad user data');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
