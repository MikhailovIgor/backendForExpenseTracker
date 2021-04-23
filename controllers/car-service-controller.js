let DUMMY_CAR_SERVICE = [
  {
    id: 'cs1',
    date: '10/04/21',
    money: 18,
    description: '',
    user: 'u1',
  },
  {
    id: 'cs2',
    date: '15/04/21',
    money: 55,
    description: '3 filters',
    user: 'u1',
  },
];

const getCarServiceData = (req, res, next) => {
  console.log('get request in car service');
  console.log(`req.params`, req.params);
  res.json(DUMMY_CAR_SERVICE);
};

const addCarServiceExpense = (req, res, next) => {};

exports.getCarServiceData = getCarServiceData;
exports.addCarServiceExpense = addCarServiceExpense;
