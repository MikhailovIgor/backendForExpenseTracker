const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const userController = require('../controllers/user-controller');

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 4 }),
  ],
  userController.signUp
);
router.post(
  '/login',
  [check('email').normalizeEmail().isEmail()],
  userController.logIn
);
router.post('/logout', userController.logOut);

module.exports = router;
