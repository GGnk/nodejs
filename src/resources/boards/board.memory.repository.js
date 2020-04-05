const Board = require('./board.model');

const boards = [
  {
    id: '1',
    title: 'Title1',
    columns: [
      {
        id: '1',
        title: 'Column1',
        order: 1
      },
      {
        id: '2',
        title: 'Column2',
        order: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Title2',
    columns: [
      {
        id: '3',
        title: 'Column3',
        order: 3
      },
      {
        id: '4',
        title: 'Column4',
        order: 4
      }
    ]
  },
  {
    id: '3',
    title: 'Title3',
    columns: [
      {
        id: '5',
        title: 'Column1',
        order: 5
      },
      {
        id: '2',
        title: 'Column2',
        order: 2
      }
    ]
  },
  {
    id: '4',
    title: 'Title4',
    columns: [
      {
        id: '1',
        title: 'Column1',
        order: 1
      },
      {
        id: '2',
        title: 'Column2',
        order: 2
      }
    ]
  },
  {
    id: '5',
    title: 'Title5',
    columns: [
      {
        id: '1',
        title: 'Column1',
        order: 1
      },
      {
        id: '2',
        title: 'Column2',
        order: 2
      }
    ]
  }
];

const getAll = async () => {
  return boards;
};

const getBoardById = async id => {
  return boards.find(item => item.id === id);
};

const createBoard = async details => {
  const { title, columns } = details;
  const newBoard = new Board({ title, columns });

  boards.push(newBoard);

  return newBoard;
};

const updateBoard = async (id, details) => {
  const board = boards.find(item => item.id === id);

  for (const column of board.columns) {
    for (const detailColumn of details.columns) {
      if (column.id === detailColumn.id) {
        Object.assign(board, details);
        return board;
      }

      return false;
    }
  }
};

const deleteBoard = async id => {
  const index = boards.findIndex(item => item.id === id);

  if (index !== -1) {
    boards.splice(index, 1);
    return true;
  }

  return false;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
