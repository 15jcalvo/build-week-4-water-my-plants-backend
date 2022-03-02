const router = require('express').Router()
const User = require('../users/users-model')
const bcrypt = require('bcryptjs')
const makeToken = require('./auth-token-builder')

router.get('/users', async (req, res, next) => {
  try {
    const data = await User.find()
    res.json(data)
  } catch(err) {
    next(err)
  }
})

router.post('/register', (req, res, next) => {
  let { username, password, role } = req.body
  const hash = bcrypt.hashSync(password, 8)
  User.add({ username, password: hash, role })
      .then(newUser => { 
          res.status(201).json(newUser)
      })
      .catch(next)
})

router.post('/login', async (req, res, next) => {
  let { username, password } = req.body
  try {
    const [user] =  await User.findBy({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = makeToken(user)
      res.json({ message: `logged in ${user.username}`, token})
    }
  } catch(err){
    next(err)
  }
})

module.exports = router