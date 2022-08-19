const userService = require('../service/user')

module.exports = {
  index: async function (req, res) {
    res.json( await userService.listData());
    console.log('end list');
  },
  profile: function (req, res) {
    res.send("profile");
  },
  store: async function (req, res, next) {
    const output  = await userService.store(req.body);
    console.log('output',output);
    res.json(output);
  },
};