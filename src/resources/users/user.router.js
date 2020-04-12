const router = require('express').Router();
const createError = require('http-errors');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT } = require('http-status-codes');
const User = require('./user.model');
const usersService = require('./user.service');

router.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(OK).json(users.map(User.toResponse));
  } catch (err) {
    return next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const userGetId = await usersService.getId(req.params.id);
    if (!userGetId.id) {
      throw new createError(NOT_FOUND, 'User not found');
    } else {
      res.status(OK).json(User.toResponse(userGetId));
    }
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const userCreate = await usersService.postUser(req.body);
    if (!userCreate) {
      throw new createError(BAD_REQUEST, 'Bad data');
    } else {
      res.status(OK).json(User.toResponse(userCreate));
    }
  } catch (err) {
    return next(err);
  }
});
router.put('/:id', async (req, res, next) => {
  try {
    const userUpdate = await usersService.putUser(req.params.id, req.body);
    if (userUpdate.id) {
      res.status(OK).json(User.toResponse(userUpdate));
    } else {
      throw new createError(BAD_REQUEST, 'Bad data');
    }
  } catch (err) {
    return next(err);
  }
});
router.delete('/:id', async (req, res, next) => {
  const userDelete = await usersService.deleteUser(req.params.id);
  try {
    if (userDelete) res.status(OK).json(NO_CONTENT);
    else throw new createError(BAD_REQUEST, 'Bad data');
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
