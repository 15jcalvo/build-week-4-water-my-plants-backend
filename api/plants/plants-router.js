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

router.post('/add', (req, res, next) => {
    let { nickname, species, h2oFrequency } = req.body
    Plant.add({ nickname, species, h2oFrequency })
        .then(newPlant => { 
            res.status(201).json(newPlant)
        })
        .catch(next)
  })

module.exports = router