let DUMMY_FUEL = [
  {
    id: 'f1',
    date: '06/04/21',
    money: 65,
    description: '50 l',
    user: 'u1',
  },
  {
    id: 'f2',
    date: '10/04/21',
    money: 19,
    description: '10 l',
    user: 'u1',
  },
  {
    id: 'f3',
    date: '15/04/21',
    money: 26,
    description: '20 l',
    user: 'u1',
  },
  {
    id: 'f4',
    date: '22/04/21',
    money: 50,
    description: '30 l',
    user: 'u1',
  },
];

const getFuelData = (req, res, next) => {
  console.log('get request in fuel');
  console.log(`req.params`, req.params);
  res.json(DUMMY_FUEL);
};

const addFuelExpense = (req, res, next) => {
  const { money, description, user } = req.body;

  const date = Date.now();

  const fuelExpense = {
    date,
    money,
    description,
    user,
  };

  DUMMY_FUEL.push(fuelExpense);

  res.status(201).json({ fuelExpense });
};

exports.getFuelData = getFuelData;
exports.addFuelExpense = addFuelExpense;
