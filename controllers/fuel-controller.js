const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const FuelExpense = require('../models/fuel');

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

const getFuelData = async (req, res, next) => {
  const user = req.params.user;

  let fuelForUser;
  try {
    fuelForUser = await FuelExpense.find({ user });
    // console.log(fuelForUser);
  } catch (err) {
    const error = new HttpError('Fetching Fuel Data Failed', 500);
    return next(error);
  }

  res.json({
    fuelForUser: fuelForUser.map((data) => data.toObject({ getters: true })),
  });
};

const addFuelExpense = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new Error('Invalid inputs passed, please check the data');
  }

  const { date, money, description, user } = req.body;
  // const date = Date.now();

  const fuelExpense = new FuelExpense({
    date,
    money,
    description,
    user,
  });
  try {
    await fuelExpense.save();
  } catch (err) {
    const error = new HttpError(
      'Adding one more Expense failed, please try again later',
      500
    );
    return next(error);
  }

  res.status(201).json({ fuelExpense });
};

exports.getFuelData = getFuelData;
exports.addFuelExpense = addFuelExpense;
