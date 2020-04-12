const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');
const createError = require('http-errors');
const { BAD_REQUEST, NOT_FOUND, OK, NO_CONTENT } = require('http-status-codes');

router.get('/', async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.status(OK).json(boards.map(Board.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const board = await boardsService.getBoardById(req.params.id);
    if (!board.id) throw new createError(NOT_FOUND, 'Task not found');
    else res.status(OK).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newBoard = await boardsService.createBoard(req.body);
    if (!newBoard) throw new createError(BAD_REQUEST, 'Bad user data');
    else res.status(OK).json(Board.toResponse(newBoard));
  } catch (err) {
    return next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateBoard = await boardsService.updateBoard(
      req.params.id,
      req.body
    );
    if (updateBoard) res.status(OK).json(updateBoard);
    else throw new createError(BAD_REQUEST, 'Bad user data');
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const deleteBoard = await boardsService.deleteBoard(req.params.id);
  try {
    if (deleteBoard) res.status(NO_CONTENT).send();
    else throw new createError(BAD_REQUEST, 'Bad user data');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
