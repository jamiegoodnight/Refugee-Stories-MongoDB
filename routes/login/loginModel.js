const Users = require("./loginSchema");

module.exports = {
  findUser
};

function findUser(email) {
  return Users.findOne({ email }).exec();
}
