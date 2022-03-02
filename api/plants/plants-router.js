const router = require('express').Router()
const Plant = require('./plants-model')

router.get('/', async (req, res, next) => {
    try {
      const data = await Plant.find()
      res.json(data)
    } catch(err) {
      next(err)
    }
})

module.exports = router