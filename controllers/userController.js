const userService = require('../services/userService');

exports.getUser = (req, res) => {
  const user = userService.getUserData();
  res.json(user);
};
