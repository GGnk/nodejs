const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async boardId => {
  return Board.findOne({ _id: boardId });
};

const createBoard = async newBoardData => {
  return Board.create(newBoardData);
};

const updateBoard = async (boardId, boardData) => {
  return Board.updateOne({ _id: boardId }, boardData);
};

const deleteBoard = async boardId => {
  return Board.deleteOne({ _id: boardId });
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
