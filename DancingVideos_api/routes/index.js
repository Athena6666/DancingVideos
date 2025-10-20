const express = require('express')
const router = express.Router()

const videoRoutes = require('./video')
const userRoutes = require('./user')

router.use('/videos', videoRoutes)
router.use('/users', userRoutes)

module.exports = router
