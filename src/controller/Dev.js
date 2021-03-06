const axios = require('axios')
const Dev = require('../model/Dev');

module.exports = {
  async index (req, res) {
    const { page = 1 } = req.query;
    const devs = await Dev.paginate({}, {page, limit: 5});

    return res.json(devs);
  },

  async store(req, res) {
    const { username } = req.body;

    const userExist = await Dev.findOne({user: username});

    if (userExist) {
      console.log(`user ${username} already exist.`);
      return res.json(`user ${username} already exist.`);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;
    
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })
    console.log(`User ${username} created.`)
    return res.json(dev);
  },

  async show (req, res) {
    const dev = await Dev.findById(req.params.id);

    return res.json(dev);
  }
}