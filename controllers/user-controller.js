let DUMMY_USERS = [
  {
    id: 'uid1',
    name: 'Johny',
    email: 'johny@mail.com',
    password: '123123',
  },
];

const signUp = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((user) => user.email === email);

  if (hasUser) {
    throw new Error('email already exists');
  }

  const createdUser = {
    id: 'uid2',
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const logIn = (req, res, next) => {
  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new Error('Could not identify user', 401);
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
