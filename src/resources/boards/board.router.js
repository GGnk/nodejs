const router = require('express').Router();
const boardsService = require('./board.service');

router.get('/', async (req, res) => {
  const users = await boardsService.getAll();

  if (users.length) res.json(users);
  else res.status(404).end();
});

router.get('/:id', async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);

  if (board) res.json(board);
  else res.status(404).end();
});

router.post('/', async (req, res) => {
  const newBoard = await boardsService.createBoard(req.body);

  res.json(newBoard);
});

router.put('/:id', async (req, res) => {
  const updateBoard = await boardsService.updateBoard(req.params.id, req.body);

  if (updateBoard) res.json(updateBoard);
  else res.status(404).send('Error');
});

router.delete('/:id', async (req, res) => {
  const deleteBoard = await boardsService.deleteBoard(req.params.id);

  if (deleteBoard) res.status(204).end();
  else res.status(404).end();
});

module.exports = router;
