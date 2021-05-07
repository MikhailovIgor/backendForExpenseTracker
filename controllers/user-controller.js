const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new Error('Invalid inputs passed, please check the data'));
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later',
      500
    );

    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User already exists, please log in instead',
      422
    );

    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again', 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later',
      500
    );

    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError('Could not identify user', 401));
  }
  res.json({ message: 'Logged in!' });
};

const logOut = (req, res, next) => {
  console.log('post request in users logout');
  res.json({ message: 'logout works!' });
};

exports.signUp = signUp;
exports.logIn = logIn;
exports.logOut = logOut;
