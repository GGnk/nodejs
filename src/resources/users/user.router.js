const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.get('/', async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});
router.get('/:id', async (req, res) => {
  const userGetId = await usersService.getId(req.params.id);
  res.json(User.toResponse(userGetId));
});
router.post('/', async (req, res) => {
  const userCreate = await usersService.postUser(req.body);

  res.json(User.toResponse(userCreate));
});
router.put('/:id', async (req, res) => {
  const userUpdate = await usersService.putUser(req.body, req.params.id);

  res.json(User.toResponse(userUpdate));
});
router.delete('/:id', async (req, res) => {
  const userDelete = await usersService.deleteUser(req.params.id);
  if (userDelete) {
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});
module.exports = router;
