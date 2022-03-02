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

router.put('/add', (req, res, next) => {
    let { nickname, newNickname, species, h2oFrequency } = req.body
    Plant.update({ nickname, newNickname, species, h2oFrequency })
        .then(updatedPlant => { 
            res.status(201).json(updatedPlant)
        })
        .catch(next)
})

router.put('/add', (req, res, next) => {
    let { nickname } = req.body
    Plant.deletePlant({ nickname })
        .then(deletedPlant => { 
            res.status(201).json(deletedPlant)
        })
        .catch(next)
})

module.exports = router