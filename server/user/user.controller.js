const User = require('./user.model');

function getUser(req, res) {
  const id = req.params.id;
  User.findById(id)
    .then((user) => res.json(user))
    .catch(() => res.status(404).json({}));
}

module.exports = {
  getUser
};
